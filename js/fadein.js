window.addEventListener('scroll', function() {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector('.humoto__inner--image');

  if (box) { // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll >  windowHeight ) {
      box.classList.add('is-active');
    }
  }
});

window.addEventListener('scroll', function() {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector('.humoto__inner--photo');

  if (box) { // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll > windowHeight*2.1) {
      box.classList.add('is-active');
    }
  }
});

window.addEventListener('scroll', function() {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector('.humoto__inner--picture');

  if (box) { // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll*1.1> windowHeight*3.3) {
      box.classList.add('is-active');
    }
  }
});

