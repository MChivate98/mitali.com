// $(document).ready(function() {
//     $(window).scroll(function() {
//         // Sticky navbar on scroll
//         if ($(this).scrollTop() > 20) {
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }

//         // Scroll-up button show/hide
//         if ($(this).scrollTop() > 500) {
//             $('.scroll-up-btn').addClass("show");
//         } else {
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // Scroll-up script
//     $('.scroll-up-btn').click(function() {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 'slow');
//         // Removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     // Smooth scroll on menu items click
//     $('.navbar .menu li a').click(function() {
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // Toggle menu/navbar script
//     $('.menu-btn').click(function() {
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // Typed.js animation for typing text
//     var typed1 = new Typed(".typing", {
//         strings: ["Full-Stack Developer", "Back End Developer", "Java Developer", "Front End Developer", "Web Developer", "Software Engineer", "Software Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed2 = new Typed(".typing-3", {
//         strings: ["Connect with me on :)"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed3 = new Typed(".typing-2", {
//         strings: ["Full-Stack Developer", "Back End Developer", "Java Developer", "Front End Developer", "Web Developer", "Software Engineer", "Software Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // Smooth scroll and active link switching on scroll
//     const sections = document.querySelectorAll('.page');
//     const navLi = document.querySelectorAll('#navi ul li a');

//     window.onscroll = () => {
//         let current = '';

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLi.forEach(li => {
//             li.classList.remove('active');
//             if (li.getAttribute('href').substring(1) === current) {
//                 li.classList.add('active');
//             }
//         });
//     };

//     // Waypoint to animate elements on scroll
//     const elements = document.querySelectorAll('.ftco-animate');

//     const animateOnScroll = () => {
//         elements.forEach(element => {
//             const rect = element.getBoundingClientRect();
//             if (rect.top < window.innerHeight - 100) {
//                 element.classList.add('active');
//             }
//         });
//     };

//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Animate elements on load

//     // Owl Carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false
//             },
//             600: {
//                 items: 2,
//                 nav: false
//             },
//             1000: {
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });
