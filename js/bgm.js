let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.textContent= "OF";
    } else {
        mySong.pause();
        icon.textContent = "ON";
    }
}

window.onload = function() {
    const mySong = document.getElementById('mySong');

    // ページ遷移時に保存した再生位置を確認
    const savedTime = sessionStorage.getItem('currentTime');
    if (savedTime) {
        mySong.currentTime = savedTime;  // 保存された位置にジャンプ
        mySong.play();  // 再生を再開
    }

    // 音楽の再生位置を変更するたびに保存
    mySong.addEventListener('timeupdate', function() {
        sessionStorage.setItem('currentTime', mySong.currentTime);
    });

    // 音楽の再生/一時停止時に状態を保存
    mySong.addEventListener('play', function() {
        sessionStorage.setItem('isPlaying', 'true');
    });

    mySong.addEventListener('pause', function() {
        sessionStorage.setItem('isPlaying', 'false');
    });
};
