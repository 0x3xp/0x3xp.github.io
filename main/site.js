(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");

    if (!button || !nav) return;

    button.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  });
})();
