window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector(".breakfast__inner");

  if (box) {
    // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll > windowHeight / 1.2) {
      box.classList.add("is-active");
    }
  }
});

window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector(".breakfast__pork");

  if (box) {
    // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll > windowHeight * 2.1) {
      box.classList.add("is-active");
    }
  }
});

window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector(".breakfast__in");

  if (box) {
    // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll > windowHeight * 3) {
      box.classList.add("is-active");
    }
  }
});

window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // 単一の .humoto__inner--image 要素を取得
  const box = document.querySelector(".breakfast__out--image");
  if (box) {
    // boxが存在する場合にのみ処理を実行
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll > windowHeight) {
      box.classList.add("is-active");
    }
  }
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const box = document.querySelector(".breakfast__pork");
  const content = document.querySelector(".breakfast__out--pork");

  if (box) {
    if (windowWidth <= 800) {
      if (scroll * 1.2 > windowHeight * 1.9) {
        box.classList.add("is-active");
      }
    } else {
      if (scroll / 4 > windowHeight * 5) {
        box.classList.add("is-active");
      }
    }
  }
  if (content) {
    if (windowWidth <= 800) {
      if (scroll * 1.2 > windowHeight * 1.95) {
        content.classList.add("is-active");
      }
    } else {
      if (scroll / 1.6 > windowHeight * 2) {
        content.classList.add("is-active");
      }
    }
  }
});

window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const box = document.querySelector(".breakfast__fish");
  const content = document.querySelector(".breakfast__out--fish");

  if (box) {
    const distanceToBox = box.offsetTop;
    if (windowWidth <= 800) {
      if (scroll * 1.3 > windowHeight * 2.5) {
        box.classList.add("is-active");
      }
    } else {
      if (scroll / 4.2 > windowHeight + distanceToBox ) {
        box.classList.add("is-active");
      }
    }
  };
  if (content) {
    const distanceToBox = content.offsetTop;
    if (windowWidth <= 800) {
      if (scroll * 1.3 > windowHeight * 2.55) {
        content.classList.add("is-active");
      }
    } else {
      if (scroll / 3 > windowHeight + distanceToBox ) {
        content.classList.add("is-active");
      }
    }
  }
});
