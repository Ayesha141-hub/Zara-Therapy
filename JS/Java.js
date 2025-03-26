// Auto typing...
var typed = new Typed('#brand_name', {
    strings: ['<b>ZARA THERAPY CLINIC</b>'],
    typeSpeed: 200,    // Typing speed
    backSpeed: 50,     // Deleting speed
    backDelay: 2000,   // 2 sec tak text dikhne ke baad delete hoga
    fadeOut: true,     // Soft fade-out effect ke saath remove hoga
    loop: true,        // Loop enable karna
    showCursor: false  // Cursor hide karna
});


// Toggle button
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-linkss");

    toggleButton.addEventListener("click", function () {
        // Toggle the display of nav links
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block";
        }
    });
});

// Owl Carousel Initialization 
$(document).ready(function () {
    // Clinic View Carousel
    $(".clinic-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});


// Back to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        setTimeout(function () {
            backToTopButton.classList.add("show"); // Add class for smooth transition
        }, 10); // Small delay to trigger CSS transition
    } else {
        backToTopButton.classList.remove("show"); // Remove class for smooth transition
        setTimeout(function () {
            backToTopButton.style.display = "none";
        }, 500); // Wait for transition to complete before hiding
    }
}
document.getElementById("back-to-top").onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};


// AOS Animation
AOS.init({
    duration: 1000,  // Animation speed
    easing: "ease-in-out", // Smooth effect
    once: true,  // Repeats animation on scroll
});