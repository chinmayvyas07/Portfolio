$(document).ready(function () {
    $(window).scroll(function () {
        // Sticky Navbar
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // Scroll-Up Button
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // Slide-Up Script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    // Toggle Navbar
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // Typing Text Animation
    new Typed(".typing", {
        strings: ["Fullstack Developer", "Software Developer", "Python Developer", "Founder", "Author"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    new Typed(".typing-2", {
        strings: ["Fullstack Developer", "Software Developer", "Python Developer", "Founder", "Author"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Owl Carousel
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false },
        },
    });
});
