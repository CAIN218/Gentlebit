/* Shared behaviour for every page. */
(function () {
    // The header gets a background once the page is scrolled (always on pages without a hero).
    var top = document.getElementById("top");
    if (top) {
        var update = function () { top.classList.toggle("sc", window.scrollY > 40); };
        update();
        window.addEventListener("scroll", update, { passive: true });
    }

    // "Back" links return to the previous page (keeping its scroll position)
    // when the visitor came from this site; otherwise they follow their link.
    document.querySelectorAll(".card-back-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var ref = document.referrer;
            var fromThisSite = ref && new URL(ref).origin === location.origin;
            if (fromThisSite && history.length > 1) {
                e.preventDefault();
                history.back();
            }
        });
    });
})();
