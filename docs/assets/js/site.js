/* Shared behaviour for every page. */
(function () {
    // The header gets a background once the page is scrolled (always on pages without a hero).
    var top = document.getElementById("top");
    if (top) {
        var update = function () { top.classList.toggle("sc", window.scrollY > 40); };
        update();
        window.addEventListener("scroll", update, { passive: true });
    }
})();
