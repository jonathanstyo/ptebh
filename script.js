// Add this in your script.js

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '<i class="ion-navicon"></i>'; // You can use any icon here

    toggleBtn.classList.add('toggle-btn'); // Add a class for styling

    toggleBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.getElementById('header').appendChild(toggleBtn);

    function toggleNavbar() {
        if (window.innerWidth <= 1450) {
            navbar.classList.remove('active');
            toggleBtn.style.display = 'block';
        } else {
            navbar.classList.remove('active');
            toggleBtn.style.display = 'none';
        }
    }

    toggleNavbar(); // Call the function initially

    window.addEventListener('resize', toggleNavbar); // Call the function on window resize
});

// animasi
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Specific JavaScript for the about.html page
const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bullet');

let currentSlide = 0;

function setActiveSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            bullets[i].classList.add('active');
        } else {
            slide.classList.remove('active');
            bullets[i].classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    setActiveSlide(currentSlide);
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentSlide = index;
        setActiveSlide(currentSlide);
    });
});

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the close button
var closeButton = document.querySelector(".close");

// Show the modal
modal.classList.add("show");
document.body.classList.add("modal-open");

// Close the modal and enable scrolling
function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

// Close the modal when clicking the close button
closeButton.addEventListener("click", function() {
    closeModal();
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Enable scrolling when the modal is closed
modal.addEventListener("transitionend", function() {
    if (!modal.classList.contains("show")) {
        document.body.classList.remove("modal-open");
    }
});
