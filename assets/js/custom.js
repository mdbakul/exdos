$(document).ready(function () {


    // header move to offcanvus-area
    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }

    // Sidebar Js
    $(".tp-menu-bar").on("click", function () {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }


    /*====after click sub menu open in mobile =====*/
    $("ul>li>ul").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.header__menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (screen.width < 1200) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    })

    //banner end here

    //client start here
    $('.client_slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // brand slider 
    var swiper = new Swiper(".partner__top", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,

        },
        breakpoints: {
            1200: {
                slidesPerView: 7,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });

    // brand slider 
    var swiper = new Swiper(".partner__bottom", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 3000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,

        },
        breakpoints: {
            1200: {
                slidesPerView: 7,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });

    // team slider start here
    $('.team__slider').slick({
        initialSlide: 3,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Odometer
    $(".odometer").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0; i < document.querySelectorAll(".odometer").length; i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });

});