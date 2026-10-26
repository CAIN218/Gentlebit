/* Scroll reveal: blocks fade in as they enter the screen, screenshots drop in like pasted photos. */
(function () {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var groups = [
        ".sec > h2", ".news-row", ".about .lead", ".about p", ".about dl", ".sec form", "#contact p",
        ".app .t", ".app .shot", ".app .note",
        ".card-back-btn + h1, .app-side", ".app-lead", ".app-feat .app-feat-text", ".app-feat .feature-media",
        ".app-more > div", ".app-sec", ".legal-body h3", ".contact-card .subtitle, .contact-card form"
    ];
    var seen = [];
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    groups.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (n, i) {
            if (seen.indexOf(n) >= 0) return;
            seen.push(n);
            n.classList.add("rv");
            if (n.classList.contains("news-row") || n.matches(".app-more > div")) n.style.setProperty("--d", (i % 5) * 70 + "ms");
            io.observe(n);
        });
    });
})();
