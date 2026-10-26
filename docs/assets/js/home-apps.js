/* Renders the Apps rows on the home page from window.GENTLEBIT_APPS (see apps.js). */
(function () {
    var root = document.getElementById('home-apps');
    var apps = window.GENTLEBIT_APPS;
    if (!root || !apps || !apps.length) return;
    var lang = root.getAttribute('data-lang') === 'ja' ? 'ja' : 'en';
    var base = root.getAttribute('data-base') || '';

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    root.textContent = '';
    apps.forEach(function (a, i) {
        var t = a[lang];
        var row = el('div', 'app' + (a.shot ? (i % 2 ? ' rev' : '') : ' mc'));
        row.id = 'app-' + a.id;

        var text = el('div', 't');
        var h = el('h3');
        var icon = el('img', 'ic'); icon.src = base + 'images/' + a.icon; icon.alt = '';
        h.appendChild(icon); h.appendChild(document.createTextNode(a.name));
        text.appendChild(h);
        text.appendChild(el('p', null, t.desc));
        var meta = el('div', 'meta');
        (t.meta || a.meta || []).forEach(function (m) { meta.appendChild(el('span', null, m)); });
        text.appendChild(meta);
        var acts = el('div', 'acts');
        if (a.download) {
            var dl = el('a', 'dl', 'Download (GitHub)');
            dl.href = a.download; dl.target = '_blank'; dl.rel = 'noopener noreferrer';
            acts.appendChild(dl);
        }
        var more = el('a', null, 'Details'); more.href = base + a.page;
        acts.appendChild(more);
        text.appendChild(acts);
        row.appendChild(text);

        if (a.shot) {
            var shot = el('img', 'shot'); shot.src = base + 'images/' + a.shot; shot.alt = t.alt || a.name;
            shot.loading = 'lazy'; shot.width = 640; shot.height = 400;
            row.appendChild(shot);
            if (t.note) row.appendChild(el('span', 'note', t.note));
        }
        root.appendChild(row);
    });
})();
