// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger menu (mobile)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  
  // Animasi X pada hamburger
  if (hamburger.classList.contains('active')) {
    hamburger.innerHTML = '<span style="transform:rotate(45deg) translate(5px,5px)"></span>' +
                          '<span style="opacity:0"></span>' +
                          '<span style="transform:rotate(-45deg) translate(7px,-6px)"></span>';
  } else {
    hamburger.innerHTML = '<span></span><span></span><span></span>';
  }
});

// Tutup menu saat klik link (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
  });
});

// Animasi saat scroll
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-up').forEach(el => {
  observer.observe(el);
});