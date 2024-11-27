// 헤더 내비
const navMenu = $(".navMenu ul li");
navMenu.on("click", function () {
    navMenu.removeClass("on");
    $(this).addClass("on");
});

// 비주얼 슬라이드
var swiper = new Swiper(".visualSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    // effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 카드 슬라이드
var swiper = new Swiper(".cardSwiper", {
    slidesPerView: 4, // 한 번에 표시할 슬라이드 수
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// 지도 탭
const tabMenu = $(".tabMenu ul li");
tabMenu.on("click", function () {
    tabMenu.removeClass("on");
    $(this).addClass("on");
});

// 카카오맵 API
var container = document.getElementById('map'),
    options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(35.8136215, 128.5463397), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴