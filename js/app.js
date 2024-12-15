const mobileMenu = document.getElementById ('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click' , () => {
    navLinks.classList.toggle('active')
})


document.addEventListener("DOMContentLoaded", function () {
    function initCarousel(carouselId, prevButtonId, nextButtonId) {
        const carousel = document.getElementById(carouselId);
        const images = carousel.querySelectorAll(".carousel-image");
        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle("active", i === index);
            });
        }

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        // Show the first image
        showImage(currentIndex);
    }

    // Initialize both carousels
    initCarousel("carousel-1", "prev-1", "next-1");
    initCarousel("carousel-2", "prev-2", "next-2");
});
function startCountdown() {
    const countdownElement = document.getElementById("countdown");

    // Set the target date for New Year's (January 1 of next year)
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

    // Update the countdown every second
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = newYearDate - currentTime;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.textContent = `${days} Dage, ${hours} Timer, ${minutes} Minutter, ${seconds} Sekunder`;

        // Stop the countdown when New Year's is reached
        if (timeDiff < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Godt nytår!";
        }
    }, 1000);
}

// Start the countdown
startCountdown();
