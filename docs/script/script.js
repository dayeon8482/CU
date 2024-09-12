console.clear();
//탑바 픽스
function PcScrollTopBar__init() {
  $(window).scroll(function () {
    // console.log($(window).scrollTop());

    if ($(window).scrollTop() > 0) {
      $(".top-bar").addClass("fixed");
    } else {
      $(".top-bar").removeClass("fixed");
    }
  });
}

PcScrollTopBar__init();
//모바일 탑바 픽스
function MobileScrollTopBar__init() {
  $(window).scroll(function () {
    // console.log($(window).scrollTop());

    if ($(window).scrollTop() > 0) {
      $(".bottom-wrap").addClass("fixed");
    } else {
      $(".bottom-wrap").removeClass("fixed");
    }
  });
}

MobileScrollTopBar__init();

//반응형 사이드바
function sidebarResponsive() {
  let $windowSize = $(window).width();
  let pcSidebar = ".pc-side-bar";
  let mobileSidebar = ".mobile-side-bar";
  // 화면 너비가 768px 이상일 떄 pc 사이드바 노출
  // 화면 너비가 768px 미만일 때 mobile 사이드바 노출
  if ($windowSize > 768) {
    console.log("실행1");
    sidebar__init(pcSidebar);
  } else {
    console.log("실행2");
    sidebar__init(mobileSidebar);
  }
}
// 페이지 로드 시 한 번 실행하여 초기 상태 설정
// 그래야만 pc, mobile에 맞게 사이즈를 다시 인식 할 수 있음
sidebarResponsive();

// 창 크기 조정 시마다 이벤트 적용
$(window).resize(function () {
  sidebarResponsive();
});

// 사이드바
function sidebar__init(sidebar__ver) {
  $(".menu-btn").click(function () {
    sidebar__show(sidebar__ver);
  });

  $(".clear-btn").click(function () {
    sidebar__hide(sidebar__ver);
  });
}

// 사이드바 노출
function sidebar__show(sidebar__ver) {
  $(sidebar__ver).addClass("active");
  $("html").addClass("side-bar-active");
}

// 사이드바 숨김
function sidebar__hide(sidebar__ver) {
  $(sidebar__ver).removeClass("active");
  $("html").removeClass("side-bar-active");
}

// 2차메뉴 구현(hover)
function topMenuHover__init() {
  $(".top-bar__menu-box>ul>li").mouseenter(function () {
    let $this = $(this);
    $this.addClass("active");
  });
  $(".top-bar__menu-box>ul>li").mouseleave(function () {
    let $this = $(this);
    $this.removeClass("active");
  });
}

topMenuHover__init();
/*메뉴 lang click 구현*/
function menuLangClick__init() {
  $(".menu-lang").click(function () {
    let has = $(".menu-lang__menu-box").hasClass("active");
    // console.log(`has : ${has}`);

    if (has) {
      $(".menu-lang__menu-box").removeClass("active");
    } else {
      $(".menu-lang__menu-box").addClass("active");
    }
  });
}
menuLangClick__init();

/*메뉴 lang hover 구현*/
function menuLangHover__init() {
  $(".menu-lang__menu-box>li>a").mouseenter(function () {
    let $this = $(this);
    $this.addClass("active");
  });
  $(".menu-lang__menu-box>li>a").mouseleave(function () {
    let $this = $(this);
    $this.removeClass("active");
  });
}
menuLangHover__init();
console.clear();
/* 이벤트 배너 스와이프*/
function eventBannerSwiper() {
  const swiper = new Swiper(".event-banner-swiper .swiper", {
    // Optional parameters
    loop: true, // 슬라이드 반복여부
    centeredSlides: true,
    speed: 300, // 슬라이드 넘어가는 속도
    slidesPerView: 1, // 한 화면에서 보여질 슬라이드 개수
    slidesPerGroup: 1, // 슬라이시 넘길 슬라이드 개수
    spaceBetween: 30, // 슬라이드 사이의 여백
    breakpoints: {
      1280: {
        slidesPerView: 2.8,
      },
    },
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      type: "bullets",
      el: ".event-banner-swiper .swiper-pagination",
      clickable: true, // 페이지네이션 버튼 클릭
    },

    // Navigation arrows
    navigation: {
      nextEl: ".event-banner-swiper .swiper-button__next",
      prevEl: ".event-banner-swiper .swiper-button__prev",
    },
  });
}
eventBannerSwiper();

// 핫이슈 배너 스와이프
function hotIssueBannerSwiper() {
  const swiper = new Swiper(".hot-issue-banner-swiper .swiper", {
    // Optional parameters
    loop: true, // 슬라이드 반복여부
    speed: 300, // 슬라이드 넘어가는 속도
    slidesPerView: 2, // 한 화면에서 보여질 슬라이드 개수
    slidesPerGroup: 2, // 슬라이시 넘길 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이의 여백
    loopFillGroupWithBlank: true, //슬라이드 공백
    breakpoints: {
      768: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30, // 슬라이드 사이의 여백
      },
    },
    autoplay: {
      delay: 3700,
    },
    // If we need pagination
    pagination: {
      type: "bullets",
      el: ".hot-issue-banner-swiper .swiper-pagination",
      clickable: true, // 페이지네이션 버튼 클릭
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hot-issue-banner-swiper .swiper-button-next",
      prevEl: ".hot-issue-banner-swiper .swiper-button-prev",
    },
  });
}
hotIssueBannerSwiper();

// +1 배너 스와이프
function plusOneBannerSwiper() {
  const swiper = new Swiper(".plus-one-banner-swiper .swiper", {
    loop: false, // 슬라이드 반복여부
    speed: 300, // 슬라이드 넘어가는 속도
    slidesPerGroup: 2,
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
    spaceBetween: 10,
    autoplay: {
      delay: 3700,
    },
    // If we need pagination
    pagination: {
      el: ".plus-one-banner-swiper .swiper-pagination",
      type: "bullets",
      el: ".plus-one-banner-swiper .swiper-pagination",
      clickable: true, // 페이지네이션 버튼 클릭
    },
    breakpoints: {
      768: {
        slidesPerView: 5.5, // 한 화면에서 보여질 슬라이드 개수
        slidesPerGroup: 5, // 슬라이시 넘길 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이의 여백
        // Navigation arrows
        navigation: {
          nextEl: ".plus-one-banner-swiper .swiper-button-next",
          prevEl: ".plus-one-banner-swiper .swiper-button-prev",
        },
        grid: "none",
      },
    },
  });
}

plusOneBannerSwiper();
/* cu 스토어 배너 스와이프*/
function cuStoreBannerSwiper() {
  const swiper = new Swiper(".cu-store-banner .swiper", {
    // Optional parameters
    loop: true, // 슬라이드 반복여부
    centeredSlides: true,
    speed: 300, // 슬라이드 넘어가는 속도
    slidesPerView: 1, // 한 화면에서 보여질 슬라이드 개수
    slidesPerGroup: 1, // 슬라이시 넘길 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이의 여백
    // If we need pagination
    pagination: {
      el: ".cu-store-banner .swiper-pagination",
      clickable: true, // 페이지네이션 버튼 클릭
    },
  });
}
cuStoreBannerSwiper();
