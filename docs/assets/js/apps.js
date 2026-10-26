/*
 * Apps shown on the home page (tabs + panel), English and Japanese.
 * To add an app, add one entry at the TOP of this list (newest first).
 * Also add its detail page (e.g. "myapp.html", "ja/myapp.html") and a News entry.
 *   id / name / icon / page : slug, display name, image in images/, detail page
 *   ver / os                : version text and platform label (ja: verJa for text that differs)
 *   shot                    : operation GIF in images/, or null
 *   download                : { url, en, ja } button, or null to show only "Details"
 *   en / ja                 : { tagline, desc, features: [..], requires }
 */
window.GENTLEBIT_APPS = [
    {
        id: "lumina", name: "Lumina", icon: "lumina-icon.svg", page: "lumina.html",
        ver: "v1.1.0", os: "Windows", shot: "lumina-panel.gif",
        download: { url: "https://github.com/CAIN218/Lumina/releases/latest", en: "Download", ja: "ダウンロード" },
        en: {
            tagline: "Monitor brightness, right from the taskbar",
            desc: "Click the tray icon and a panel opens with one slider per connected display. No more digging through Control Panel or pressing the buttons on each monitor.",
            features: ["One slider per monitor, or link them with a master slider", "Smooth dragging, even on slow monitors", "Checks GitHub for updates, one-click update", "English and Japanese"],
            requires: "Windows 10 / 11 (64-bit), monitor with DDC/CI"
        },
        ja: {
            tagline: "タスクトレイから、モニターの明るさを調整",
            desc: "トレイのアイコンを押すと、接続中のモニターごとのスライダーが開きます。コントロールパネルやモニターのボタンを探す必要はありません。",
            features: ["モニターごとのスライダー。まとめて動かす親スライダーも", "反応の遅いモニターでもなめらかに動く", "GitHubで更新を確認、ワンクリックで更新", "英語・日本語に対応"],
            requires: "Windows 10 / 11(64bit)、DDC/CI対応モニター"
        }
    },
    {
        id: "audioswitcher", name: "AudioSwitcher", icon: "audioswitcher-icon.svg", page: "audioswitcher.html",
        ver: "v1.7.2", os: "Windows", shot: "audioswitcher-hotkey.gif",
        download: { url: "https://github.com/CAIN218/audio-switcher/releases/latest", en: "Download", ja: "ダウンロード" },
        en: {
            tagline: "Switch your audio output with one hotkey",
            desc: "Runs quietly in the background and switches your sound between speakers, a headset or a DAC with a global hotkey. No more opening sound settings in the middle of a game or a call.",
            features: ["A/B switch, or pick from a list of devices", "A small notification shows the new device", "Tells apart devices with the same name", "Starts with Windows, built-in tutorial"],
            requires: "Windows 10 / 11 (64-bit)"
        },
        ja: {
            tagline: "音声の出力先を、ホットキー1つで切り替え",
            desc: "バックグラウンドで動き、スピーカー・ヘッドセット・DACなどをホットキーで切り替えます。ゲームや通話の最中に設定画面を開く必要はありません。",
            features: ["2つを交互に切替、またはリストから選択", "切替後に小さな通知で現在のデバイスを表示", "同じ名前のデバイスも正しく区別", "Windows起動時に自動で開始、チュートリアル付き"],
            requires: "Windows 10 / 11(64bit)"
        }
    },
    {
        id: "meatcam", name: "MeatCam", icon: "meatcam-icon.svg", page: "meatcam.html",
        ver: "In development", verJa: "開発中", os: "iOS", shot: null, download: null,
        en: {
            tagline: "See which parts are still raw, without relying on color",
            desc: "Point the camera at meat and raw-looking areas get diagonal stripes. Because the signal is a pattern, not a color, it helps people with red–green color blindness.",
            features: ["Stripes plus a tint mark undercooked areas", "Real-time analysis on the iPhone", "The detector can be swapped for a trained model later"],
            requires: "iOS 17+, iPhone with a camera"
        },
        ja: {
            tagline: "色に頼らず、生焼けの部分がわかる",
            desc: "カメラを肉に向けると、生に見える部分に斜めの縞模様がつきます。色ではなく模様で示すので、赤緑色覚の方にも使いやすい作りです。",
            features: ["縞と色味で生っぽい部分を表示", "iPhone上でリアルタイム解析", "検出部分は、のちに学習モデルへ差し替え可能"],
            requires: "iOS 17以降、カメラ付きiPhone"
        }
    }
];
