/* Renders the Apps tabs on the home page from window.GENTLEBIT_APPS (see apps.js). */
(function () {
    var root = document.getElementById('home-apps');
    var apps = window.GENTLEBIT_APPS;
    if (!root || !apps || !apps.length) return;
    var lang = root.getAttribute('data-lang') === 'ja' ? 'ja' : 'en';
    var base = root.getAttribute('data-base') || '';
    var T = {
        en: { ver: 'Version', req: 'Requires', details: 'Details', src: 'Details', warn: 'Not code-signed, so Windows SmartScreen may warn on first run. The source is on GitHub.' },
        ja: { ver: 'バージョン', req: '動作環境', details: '詳細', src: '詳細', warn: '署名がないため、初回起動時にWindows SmartScreenの警告が出ることがあります。ソースはGitHubで確認できます。' }
    }[lang];
    var tabs = root.querySelector('.app-tabs');
    var pane = root.querySelector('.app-pane');
    var current = 0;

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    function showPane(i) {
        var a = apps[i], t = a[lang];
        current = i;
        Array.prototype.forEach.call(tabs.children, function (b, k) { b.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
        pane.innerHTML = '';
        pane.setAttribute('aria-labelledby', 'app-tab-' + a.id);
        var left = el('div', 'app-pane-main');
        var head = el('div', 'app-pane-head');
        var img = el('img'); img.src = base + 'images/' + a.icon; img.alt = ''; img.width = 120; img.height = 60;
        head.appendChild(img); head.appendChild(el('h3', null, a.name));
        left.appendChild(head);
        left.appendChild(el('p', 'app-pane-tagline', t.tagline));
        left.appendChild(el('p', 'app-pane-desc', t.desc));
        var ul = el('ul', 'app-pane-features');
        t.features.forEach(function (f) { ul.appendChild(el('li', null, f)); });
        left.appendChild(ul);
        var facts = el('p', 'app-pane-facts');
        var v = el('span', null, T.ver + ' '); v.appendChild(el('b', null, lang === 'ja' && a.verJa ? a.verJa : a.ver));
        var r = el('span', null, T.req + ' '); r.appendChild(el('b', null, t.requires));
        facts.appendChild(v); facts.appendChild(r);
        left.appendChild(facts);
        var acts = el('div', 'app-pane-actions');
        if (a.download) {
            var dl = el('a', 'action-btn', a.download[lang]);
            dl.href = a.download.url; dl.target = '_blank'; dl.rel = 'noopener noreferrer';
            acts.appendChild(dl);
        }
        var more = el('a', a.download ? 'ghost-btn' : 'action-btn', T.details);
        more.href = base + a.page;
        acts.appendChild(more);
        left.appendChild(acts);
        if (a.download) left.appendChild(el('p', 'app-pane-note', T.warn));
        pane.appendChild(left);
        if (a.shot) {
            var shot = el('img', 'app-pane-shot'); shot.src = base + 'images/' + a.shot; shot.alt = a.name + ' screenshot'; shot.loading = 'lazy';
            pane.appendChild(shot);
        }
    }

    apps.forEach(function (a, i) {
        var b = el('button', 'app-tab', a.name);
        b.type = 'button'; b.id = 'app-tab-' + a.id; b.setAttribute('role', 'tab');
        b.addEventListener('click', function () { showPane(i); });
        b.addEventListener('keydown', function (e) {
            var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
            if (!k) return;
            var n = (current + k + apps.length) % apps.length;
            showPane(n); tabs.children[n].focus();
        });
        tabs.appendChild(b);
    });
    root.classList.add('is-ready');
    showPane(0);
})();
