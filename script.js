// Scroll Fade Animations
function onScrollAnimate() {
  const revealElements = document.querySelectorAll('section, .room-card, .service-item, .review-card, .gallery-item');
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 70) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', onScrollAnimate);

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryItems.forEach((img, idx) => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
  document.body.style.overflow = '';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
});

// Booking engine UX/validation example (expand as needed)
document.getElementById('booking-search').addEventListener('click', () => {
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;
  if (!checkin || !checkout) {
    alert('Please select your check-in and check-out dates.');
    return;
  }
  if (checkout <= checkin) {
    alert('Check-out must be after check-in.');
    return;
  }
  // Demo: Show booking confirmation (replace with real engine or send data)
  alert(`Searching rooms for ${guests} from ${checkin} to ${checkout}...`);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetID = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetID);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
