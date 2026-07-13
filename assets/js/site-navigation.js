(function () {
  "use strict";

  function initNavigation() {
    var navigation = document.getElementById("site-nav");
    if (!navigation) {
      return;
    }

    var toggle = navigation.querySelector("button");
    var overflowMenu = navigation.querySelector(".hidden-links");
    if (!toggle || !overflowMenu) {
      return;
    }

    function isOverflowMenuOpen() {
      return !toggle.classList.contains("hidden") && !overflowMenu.classList.contains("hidden");
    }

    function syncExpandedState() {
      toggle.setAttribute("aria-expanded", isOverflowMenuOpen() ? "true" : "false");
    }

    function closeOverflowMenu() {
      overflowMenu.classList.add("hidden");
      toggle.classList.remove("close");
      syncExpandedState();
    }

    function getAnchorLink(element) {
      while (element && element !== navigation) {
        if (element.tagName === "A") {
          return element;
        }
        element = element.parentElement;
      }
      return null;
    }

    function getCurrentPageTarget(link) {
      var destination;

      try {
        destination = new URL(link.href, window.location.href);
      } catch (error) {
        return null;
      }

      if (destination.origin !== window.location.origin ||
          destination.pathname !== window.location.pathname ||
          !destination.hash) {
        return null;
      }

      var targetId = destination.hash.slice(1);
      try {
        targetId = decodeURIComponent(targetId);
      } catch (error) {
        return null;
      }

      return document.getElementById(targetId);
    }

    toggle.addEventListener("click", function () {
      window.setTimeout(syncExpandedState, 0);
    });

    navigation.addEventListener("click", function (event) {
      var link = getAnchorLink(event.target);
      var target = link && getCurrentPageTarget(link);

      if (!target) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      closeOverflowMenu();
      target.scrollIntoView({
        behavior: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", link.hash);
      }
    }, true);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOverflowMenuOpen()) {
        closeOverflowMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (isOverflowMenuOpen() && !navigation.contains(event.target)) {
        closeOverflowMenu();
      }
    });

    window.addEventListener("resize", function () {
      window.setTimeout(syncExpandedState, 0);
    });

    syncExpandedState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavigation);
  } else {
    initNavigation();
  }
}());