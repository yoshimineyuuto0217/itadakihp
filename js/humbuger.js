const btn = document.querySelector('#hum');
const rap = document.querySelector('#sn');
const black = document.querySelector('#kuro');

btn.addEventListener('click', function () {
    // ハンバーガーメニューのアクティブ状態を切り替え
    btn.classList.toggle('active');

    // メニューの表示切り替え
    rap.classList.toggle('active');

    // ダーク背景の表示切り替え
    black.classList.toggle('active');
});
