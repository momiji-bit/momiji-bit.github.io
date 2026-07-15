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

  if (finePointer && !reducedMotion) {
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      deactivateSurface();
    }
  });

  syncScrollMaterial();
}());