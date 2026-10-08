/* Shared browser-only helpers. No portfolio content is generated here. */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-year]").forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });

    document.querySelectorAll('a[href^="http"]').forEach(function (anchor) {
      if (anchor.hostname && anchor.hostname !== window.location.hostname) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer noopener";
      }
    });
  });
})();
