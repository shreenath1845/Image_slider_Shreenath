let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let interval;

// Function to move to the next slide
function nextSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Function to move to the previous slide
function prevSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Event listeners for next and previous buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Automatic slideshow function
function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Stop automatic slideshow when user interacts with the slider
function stopAutoSlide() {
    clearInterval(interval);
}

// Start automatic slideshow when the page loads
startAutoSlide();

// Stop automatic slideshow when the user clicks on next or previous buttons
next.addEventListener('click', stopAutoSlide);
prev.addEventListener('click', stopAutoSlide);

// Restart automatic slideshow after 5 seconds of inactivity
document.querySelector('.container').addEventListener('mouseleave', () => {
    setTimeout(startAutoSlide, 5000);
});
