let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Position the current slide to the left, outside the view
    slides[slideIndex - 1].style.left = "100%";

    // Animate the current slide to the center
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "slideIn 1s forwards";

    // Remove the active class from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add the active class to the current dot
    dots[slideIndex - 1].className += " active";

    // Animate the previous slide to the right, outside the view
    if (slideIndex > 1) {
        slides[slideIndex - 2].style.animation = "slideOut 1s forwards";
    }

    setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
}
