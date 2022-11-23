
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {

        // 배지 숨기기 
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0
        } )


    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block' 
        });


        gsap.to(toTopEl, .2, {
            x: 100 // 오른쪽으로 숨도록 x축으로 이동
        })
    }
}, 300));

// _.throttle(function() {}, time) 
// 함수를 최대한 적게 실행하기 위해서


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {  // 요소로 추가할 객체는 윈도우 객체 화면 자체를 애니메이션 처리
        scrollTo: 0 // 스크롤의 위치, 화면의 위치를 0픽셀 지점으로 .7초 동안 옮겨 주겠다.
    });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * .7
    });
});



// 스와이퍼 new Swiper(선택자, 옵션)


new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.notice .promotion .swiper', {
    // direction: 'horizontal', //default
    slidesPerView: 3, //default = 1
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 속성 추가: 요소를 페이지 번호로 사용, 페이지 번호 선택자
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }    
});


new Swiper('.awards .swiper', {
    slidesPerView: 5,
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});








const promotionEl = document.querySelector('.promotion');
const promotionToogleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToogleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide'); //css에서 'hide' class가 있는 경우 숨김 처리
    }
    else {
        promotionEl.classList.remove('hide');
    }
    });






    // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
// gsap.to(요소, 시간, 옵션);


function floatingObject (selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });

}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {


    //new ScrollMagic.Scene().setClassToggle().addTo();

    // 자바스크립트 라이브러리를 통해 특정 요소 감시하는 옵션을 지정하는 메소드, 
    // 제어하려는 특정 섹션들이 화면에 보이는지 보이지 않는지를 감시,

    // html 클래스 속성을 넣었다 뺐다 토글로 제어,

    // 컨트롤러 추가 

    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정,
            triggerHook: .8, // 뷰포트의 시작 위치가 0, 끝 위치가 1, 
            // 감시하고 있는 요소가 뷰포트의 이 지점에 걸리면 감시되었다고 판단,
            // 감시되면 setClassToggle 메소드가 실행,
        })
        .setClassToggle(spyEl, 'show') 
        
        // 인수 1. 클래스를 토글할 요소, 2. 토글할 클래스의 이름 

        .addTo(new ScrollMagic.Controller());

        // 
    
});
