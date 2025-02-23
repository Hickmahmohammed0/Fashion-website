  // Dropdown menu contacts
  function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}
// ScrollReveal animations
ScrollReveal().reveal('header', { origin: 'top', distance: '50px', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#news', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#trends', { origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#interviews', { origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.card', { scale: 0.8, duration: 1000, interval: 200 });
// ScrollReveal for Trends Section
ScrollReveal().reveal('.trend-card', { 
origin: 'bottom', 
distance: '50px', 
duration: 1000, 
interval: 200 
});
// Scroll images when the button is clicked
document.getElementById("scrollButton").addEventListener("click", function () {
const gallery = document.getElementById("scrollGallery");
gallery.scrollBy({ left: 300, behavior: "smooth" }); // Scroll by 300px to the right
});

function subscribe() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thank you for subscribing! We'll keep you updated at ${email}`);
    document.getElementById('email').value = ''; // Clear input field
  } else {
    alert('Please enter a valid email address!');
  }
}