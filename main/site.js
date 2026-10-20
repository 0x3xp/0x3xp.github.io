(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("[data-nav-toggle]");
    var nav    = document.querySelector("[data-nav]");

    if (!button || !nav) return;

    button.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });

    // Close menu when a nav link is clicked (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside nav on mobile
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") &&
          !nav.contains(e.target) &&
          !button.contains(e.target)) {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
