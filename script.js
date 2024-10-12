// Scroll Event for Navbar Background Change
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i');

window.onscroll = function () {
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
};

// Toggle Hamburger Icon and Navbar Menu
hamburger.addEventListener('click', () => {
   navbar.classList.toggle('active');
   if (hamburgerIcon.classList.contains('fa-bars')) {
      hamburgerIcon.classList.remove('fa-bars');
      hamburgerIcon.classList.add('fa-times'); // Change to X (times) icon
   } else {
      hamburgerIcon.classList.remove('fa-times');
      hamburgerIcon.classList.add('fa-bars'); // Revert to hamburger icon
   }
});
