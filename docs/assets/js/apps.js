/*
 * Apps shown on the home page, English and Japanese.
 * To add an app, add one entry at the TOP of this list (newest first).
 * Also add its detail page (e.g. "myapp.html", "ja/myapp.html") and a News entry.
 *   id / name / icon / page : slug, display name, image in images/, detail page
 *   meta     : lines under the description (kept in English on both pages), or put `meta` inside en / ja
 *   download : GitHub releases URL, or null to show only "Details"
 *   shot     : operation GIF in images/, or null
 *   en / ja  : { desc: short description, note: handwritten caption under the GIF }
 */
window.GENTLEBIT_APPS = [
    {
        id: "lumina", name: "Lumina", icon: "lumina-icon.svg", page: "lumina.html",
        meta: ["Version 1.1.0", "Windows 10 and 11 (64-bit)", "Needs a monitor that supports DDC/CI"],
        download: "https://github.com/CAIN218/Lumina/releases/latest", shot: "lumina-panel.gif",
        en: {
            desc: "Adjust the brightness of every monitor from a slider in the taskbar, without reaching for each monitor's buttons.",
            note: "This is how it looks. Move the slider to change brightness.",
            alt: "Changing brightness with Lumina's slider"
        },
        ja: {
            desc: "複数のモニターの明るさを、タスクバーのスライダーで変えられます。モニター本体のボタンを押して回る必要がなくなります。",
            note: "実物はこんな感じ。スライダーで明るさが変わります。",
            alt: "Luminaのスライダーで明るさを変える様子"
        }
    },
    {
        id: "audioswitcher", name: "AudioSwitcher", icon: "audioswitcher-icon.svg", page: "audioswitcher.html",
        meta: ["Version 1.7.2", "Windows 10 and 11 (64-bit)"],
        download: "https://github.com/CAIN218/audio-switcher/releases/latest", shot: "audioswitcher-hotkey.gif",
        en: {
            desc: "Switch the audio output, such as speakers and a headset, with one shortcut key. No need to open settings in the middle of a game or a call.",
            note: "Pick the output from this list with a shortcut key.",
            alt: "Switching the audio output with a hotkey in AudioSwitcher"
        },
        ja: {
            desc: "スピーカーとヘッドセットなど、音の出力先をショートカットキー1つで切り替えます。ゲームや通話の途中で設定画面を開かずに済みます。",
            note: "ショートカットキーで、この一覧から出力先を選べます。",
            alt: "AudioSwitcherでホットキーを押して出力先を切り替える様子"
        }
    },
    {
        id: "meatcam", name: "MeatCam", icon: "meatcam-icon.svg", page: "meatcam.html",
        download: null, shot: null,
        en: {
            desc: "Point the camera at meat and raw-looking areas get diagonal stripes. Because the signal is a pattern, not a color, it helps people with red–green color blindness.",
            meta: ["In development. Not released yet.", "iOS 17 or later, iPhone with a camera"]
        },
        ja: {
            desc: "カメラを肉に向けると、生に見える部分に斜めの縞模様がつきます。色ではなく模様で示すので、赤緑色覚の方にも使いやすい作りです。",
            meta: ["開発中です。まだ公開していません。", "iOS 17以降、カメラ付きのiPhone"]
        }
    }
];
