/* Home page only: scroll position on Back, and the "Lumina" brightness readout of the opening. */
(function () {
    // Return to the same scroll position when coming back from another page.
    var KEY = "gentlebit-scroll:" + location.pathname;
    window.addEventListener("pagehide", function () {
        try { sessionStorage.setItem(KEY, String(window.scrollY)); } catch (e) {}
    });
    var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    if (nav && nav.type === "back_forward") {
        var y = null;
        try { y = sessionStorage.getItem(KEY); } catch (e) {}
        if (y !== null) {
            if ("scrollRestoration" in history) history.scrollRestoration = "manual";
            window.addEventListener("load", function () {
                document.documentElement.style.scrollBehavior = "auto";
                window.scrollTo(0, parseInt(y, 10));
                document.documentElement.style.scrollBehavior = "";
            });
        }
    }

    // The opening raises the page's brightness from 6% to 100% like Lumina; show the number.
    var lumo = document.getElementById("lumo");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!lumo || reduce) return;
    var DUR = 3400, t0 = performance.now();
    (function tick(now) {
        var p = Math.min(1, (now - t0) / DUR);
        var e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        lumo.textContent = "Lumina " + Math.round(6 + 94 * e) + "%";
        if (p < 1) requestAnimationFrame(tick);
    })(t0);
})();
