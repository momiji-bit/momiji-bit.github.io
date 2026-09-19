(function () {
  "use strict";

  var root = document.documentElement;
  var masthead = document.querySelector(".masthead");
  var surfaceSelector = ".masthead__inner-wrap, .sidebar .profile_box, .paper-box";
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var activeSurface = null;
  var pointerFrame = null;
  var scrollFrame = null;
  var pointerX = 0;
  var pointerY = 0;

  function closestSurface(element) {
    while (element && element !== document.documentElement) {
      if (element.matches && element.matches(surfaceSelector)) {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  }

  function deactivateSurface() {
    if (!activeSurface) {
      return;
    }

    activeSurface.classList.remove("is-glass-active");
    activeSurface.style.removeProperty("--lg-x");
    activeSurface.style.removeProperty("--lg-y");
    activeSurface = null;
  }

  function paintPointerLight() {
    pointerFrame = null;
    if (!activeSurface || !document.documentElement.contains(activeSurface)) {
      deactivateSurface();
      return;
    }

    var rect = activeSurface.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return;
    }

    var x = Math.max(0, Math.min(100, ((pointerX - rect.left) / rect.width) * 100));
    var y = Math.max(0, Math.min(100, ((pointerY - rect.top) / rect.height) * 100));
    activeSurface.style.setProperty("--lg-x", x.toFixed(2) + "%");
    activeSurface.style.setProperty("--lg-y", y.toFixed(2) + "%");
  }

  function handlePointerMove(event) {
    var surface = closestSurface(event.target);
    if (!surface) {
      deactivateSurface();
      return;
    }

    if (surface !== activeSurface) {
      deactivateSurface();
      activeSurface = surface;
      activeSurface.classList.add("is-glass-active");
    }

    pointerX = event.clientX;
    pointerY = event.clientY;
    if (pointerFrame === null) {
      pointerFrame = window.requestAnimationFrame(paintPointerLight);
    }
  }

  function handlePointerOut(event) {
    if (activeSurface && (!event.relatedTarget || !activeSurface.contains(event.relatedTarget))) {
      deactivateSurface();
    }
  }

  function syncScrollMaterial() {
    scrollFrame = null;
    var scrolled = window.pageYOffset > 8;
    root.classList.toggle("is-scrolled", scrolled);
    if (masthead) {
      masthead.classList.toggle("is-scrolled", scrolled);
    }
  }

  function handleScroll() {
    if (scrollFrame === null) {
      scrollFrame = window.requestAnimationFrame(syncScrollMaterial);
    }
  }

  /* Selection lozenge: follows the section currently being read. */
  function initNavPill() {
    var nav = document.getElementById("site-nav");
    if (!nav) {
      return;
    }

    var pill = document.createElement("span");
    var sections = [];
    var activeLink = null;
    var spyFrame = null;
    var placed = false;

    pill.className = "nav-glass-pill";
    pill.setAttribute("aria-hidden", "true");
    nav.insertBefore(pill, nav.firstChild);

    Array.prototype.forEach.call(nav.querySelectorAll("a[href*='#']"), function (link) {
      var item = link.parentElement;
      var hash = link.hash ? link.hash.slice(1) : "";
      var target = null;

      if (!hash || (item && item.classList.contains("masthead__menu-home-item"))) {
        return;
      }

      try {
        target = document.getElementById(decodeURIComponent(hash));
      } catch (error) {
        target = null;
      }

      if (target) {
        sections.push({ link: link, target: target });
      }
    });

    if (!sections.length) {
      return;
    }

    function placePill() {
      var visible = activeLink && activeLink.offsetParent !== null &&
        !!nav.querySelector(".visible-links") && nav.querySelector(".visible-links").contains(activeLink);

      if (!visible) {
        pill.classList.remove("is-visible");
        placed = false;
        return;
      }

      var navRect = nav.getBoundingClientRect();
      var linkRect = activeLink.getBoundingClientRect();

      if (!placed) {
        pill.classList.add("is-instant");
      }

      pill.style.width = linkRect.width.toFixed(1) + "px";
      pill.style.transform = "translate3d(" + (linkRect.left - navRect.left).toFixed(1) + "px, 0, 0)";

      if (!placed) {
        void pill.offsetWidth;
        pill.classList.remove("is-instant");
        placed = true;
      }

      pill.classList.add("is-visible");
    }

    function syncActiveSection() {
      spyFrame = null;

      var offset = (masthead ? masthead.getBoundingClientRect().bottom : 0) + 40;
      var current = sections[0];
      var atBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4;

      if (atBottom) {
        current = sections[sections.length - 1];
      } else {
        sections.forEach(function (section) {
          if (section.target.getBoundingClientRect().top <= offset) {
            current = section;
          }
        });
      }

      if (current.link !== activeLink) {
        if (activeLink) {
          activeLink.classList.remove("is-active");
          activeLink.removeAttribute("aria-current");
        }

        activeLink = current.link;
        activeLink.classList.add("is-active");
        activeLink.setAttribute("aria-current", "location");
      }

      placePill();
    }

    function requestSync() {
      if (spyFrame === null) {
        spyFrame = window.requestAnimationFrame(syncActiveSection);
      }
    }

    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", function () {
      /* The greedy nav reflows its links on resize; measure after it settles. */
      placed = false;
      window.setTimeout(requestSync, 60);
    });
    window.addEventListener("load", function () {
      placed = false;
      requestSync();
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        placed = false;
        requestSync();
      });
    }

    syncActiveSection();
  }

  /* Edge refraction: bends the backdrop along the capsule's rim with an SVG
     displacement map. Chromium is the only engine that accepts SVG filters in
     backdrop-filter, so every other browser keeps the plain blurred material. */
  function initRefraction() {
    var surface = document.querySelector(".masthead__inner-wrap");
    var svgNS = "http://www.w3.org/2000/svg";
    var reducedTransparency = window.matchMedia && window.matchMedia("(prefers-reduced-transparency: reduce)").matches;
    var isChromium = !!window.chrome || !!(navigator.userAgentData && navigator.userAgentData.brands &&
      navigator.userAgentData.brands.some(function (brand) { return /Chromium/.test(brand.brand); }));

    if (!surface || !finePointer || reducedTransparency || !isChromium ||
        !window.ResizeObserver || !window.CSS || !CSS.supports || !CSS.supports("backdrop-filter", "url(#lg)")) {
      return;
    }

    var svg = document.createElementNS(svgNS, "svg");
    var filter = document.createElementNS(svgNS, "filter");
    var image = document.createElementNS(svgNS, "feImage");
    var displace = document.createElementNS(svgNS, "feDisplacementMap");
    var canvas = document.createElement("canvas");
    var generation = 0;
    var lastKey = "";
    var buildFrame = null;
    var bezel = 13;
    var strength = 30;

    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
    filter.setAttribute("filterUnits", "userSpaceOnUse");
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.setAttribute("x", "0");
    filter.setAttribute("y", "0");
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");
    image.setAttribute("preserveAspectRatio", "none");
    image.setAttribute("result", "map");
    displace.setAttribute("in", "SourceGraphic");
    displace.setAttribute("in2", "map");
    displace.setAttribute("xChannelSelector", "R");
    displace.setAttribute("yChannelSelector", "G");
    displace.setAttribute("scale", String(strength));
    filter.appendChild(image);
    filter.appendChild(displace);
    svg.appendChild(filter);
    document.body.appendChild(svg);

    function buildMap(width, height, radius) {
      canvas.width = width;
      canvas.height = height;

      var context = canvas.getContext("2d");
      var pixels = context.createImageData(width, height);
      var data = pixels.data;
      var halfW = width / 2;
      var halfH = height / 2;

      for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {
          var px = x + 0.5 - halfW;
          var py = y + 0.5 - halfH;
          var qx = Math.abs(px) - (halfW - radius);
          var qy = Math.abs(py) - (halfH - radius);
          var ox = Math.max(qx, 0);
          var oy = Math.max(qy, 0);
          var outer = Math.sqrt(ox * ox + oy * oy);
          var depth = radius - outer - Math.min(Math.max(qx, qy), 0);
          var nx = 0;
          var ny = 0;
          var index = (y * width + x) * 4;

          if (depth >= 0 && depth < bezel) {
            if (outer > 0) {
              nx = (ox / outer) * (px < 0 ? -1 : 1);
              ny = (oy / outer) * (py < 0 ? -1 : 1);
            } else if (qx > qy) {
              nx = px < 0 ? -1 : 1;
            } else {
              ny = py < 0 ? -1 : 1;
            }

            /* Steep near the rim, flat toward the centre: a convex bezel
               that pulls the backdrop inward. */
            var bend = 1 - depth / bezel;
            bend = bend * bend * bend;
            nx *= -bend;
            ny *= -bend;
          }

          data[index] = Math.round(128 + nx * 127);
          data[index + 1] = Math.round(128 + ny * 127);
          data[index + 2] = 128;
          data[index + 3] = 255;
        }
      }

      context.putImageData(pixels, 0, 0);
      return canvas.toDataURL("image/png");
    }

    function rebuild() {
      buildFrame = null;

      var width = Math.round(surface.offsetWidth);
      var height = Math.round(surface.offsetHeight);
      var radius = Math.min(parseFloat(window.getComputedStyle(surface).borderTopLeftRadius) || 0, width / 2, height / 2);
      var key = width + "x" + height + "r" + radius;

      if (!width || !height || key === lastKey) {
        return;
      }

      lastKey = key;
      generation += 1;

      /* A fresh id each time makes the compositor pick up the new map. */
      var id = "lg-refract-" + generation;
      var url = buildMap(width, height, radius);
      var material = "url(#" + id + ") blur(14px) saturate(190%) brightness(1.08)";

      filter.setAttribute("id", id);
      filter.setAttribute("width", String(width));
      filter.setAttribute("height", String(height));
      image.setAttribute("width", String(width));
      image.setAttribute("height", String(height));
      image.setAttribute("href", url);
      image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
      surface.style.webkitBackdropFilter = material;
      surface.style.backdropFilter = material;
      root.classList.add("has-glass-refraction");
    }

    new ResizeObserver(function () {
      if (buildFrame === null) {
        buildFrame = window.requestAnimationFrame(rebuild);
      }
    }).observe(surface);

    rebuild();
  }

  /* Scrolling window sized to a whole number of entries. The entries differ in
     height (and grow when their details open), so CSS alone cannot do this. */
  function initEntryWindow(selector, visibleCount) {
    var list = document.querySelector(selector);
    var fitFrame = null;

    if (!list || list.children.length <= visibleCount) {
      if (list) {
        list.style.maxHeight = "none";
      }
      return;
    }

    function fit() {
      fitFrame = null;

      var last = list.children[visibleCount - 1];
      var fade = parseFloat(window.getComputedStyle(list).paddingBottom) || 0;
      var height = last.offsetTop + last.offsetHeight - list.children[0].offsetTop;

      list.style.maxHeight = Math.ceil(height + fade + 6) + "px";
    }

    function requestFit() {
      if (fitFrame === null) {
        fitFrame = window.requestAnimationFrame(fit);
      }
    }

    /* `toggle` does not bubble, so listen in the capture phase. */
    list.addEventListener("toggle", requestFit, true);
    window.addEventListener("resize", requestFit);
    window.addEventListener("load", requestFit);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(requestFit);
    }

    fit();
  }

  if (finePointer && !reducedMotion) {
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
  }

  initNavPill();
  initEntryWindow("#projects + ul", 2);
  initRefraction();

  window.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      deactivateSurface();
    }
  });

  syncScrollMaterial();
}());