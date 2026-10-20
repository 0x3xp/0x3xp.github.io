(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // ── Year auto-update ─────────────────────────────────────
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    // ── External links: open in new tab ──────────────────────
    document.querySelectorAll("a[href^='http']").forEach(function (anchor) {
      try {
        var host = new URL(anchor.href).hostname;
        if (host && host !== window.location.hostname) {
          anchor.target = "_blank";
          anchor.rel    = "noreferrer noopener";
        }
      } catch (e) { /* ignore malformed hrefs */ }
    });
  });
})();
