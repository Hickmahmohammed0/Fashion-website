//menu icon for contact
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
const sectionTitle = document.querySelector('.section-title');
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === sectionTitle) {
                sectionTitle.classList.add('visible'); // Add the visible class to the title
            } else {
                const cardIndex = Array.from(cards).indexOf(entry.target);
                // Add a delay based on the card index
                setTimeout(() => {
                    entry.target.classList.add('visible'); // Add the visible class to the card
                }, cardIndex * 200); // Adjust the delay (200ms) as needed
            }
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
});

observer.observe(sectionTitle); // Start observing the section title
cards.forEach(card => observer.observe(card)); // Start observing each card
});
document.addEventListener("DOMContentLoaded", function() {
const sectionTitle1 = document.querySelector('.section-title1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionTitle1.classList.add('visible'); // Add the visible class to trigger fade-in
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
});

observer.observe(sectionTitle1); // Start observing the section title
});
const textArray = [
"Fashion Hub is your go-to destination for latest fashion trends, curated with love and creativity. Our mission is to make you look and feel better, every day."
];
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseDelay = 1000; // Pause between sentences

const typewriterElement = document.querySelector('.typewriter');
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
const currentText = textArray[arrayIndex];

if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex--);
} else {
    typewriterElement.textContent = currentText.substring(0, charIndex++);
}

// Typing or deleting complete
if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, pauseDelay); // Pause before deleting
} else if (isDeleting && charIndex === 0) {
  isDeleting = false;
    arrayIndex = (arrayIndex + 1) % textArray.length; // Move to next text
    setTimeout(typeText, typingSpeed); // Pause before typing next sentence
} else {
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}
}

typeText();
document.addEventListener("DOMContentLoaded", function() {
const typewriter = document.querySelector('.typewriter');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typewriter.classList.add('visible'); // Add the visible class
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
});

observer.observe(typewriter); // Start observing the typewriter element
});

