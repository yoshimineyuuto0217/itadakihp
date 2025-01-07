$(function() {
    $('#cuisine').vegas({
        slides: [
            { src: '../assets/images/shabu.jpeg'} ,
            { src: '../assets/images/fish.jpeg' },
            { src: '../assets/images/sashimi.jpeg' }
        ],
        // overlay: '../vegas/overlays/桜島.jpeg', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 10000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間
    });
});