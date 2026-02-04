function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

function animateCounters() {
  if (hasCounted) return;
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 600; // control speed
    const update = () => {
      if (count < target) {
        count += Math.ceil(speed);
        counter.textContent = count.toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    update();
  });
  hasCounted = true;
}

// Trigger animation on scroll into view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function checkScroll() {
  const section = document.getElementById('statsSection');
  if (isInViewport(section)) {
    animateCounters();
    window.removeEventListener('scroll', checkScroll);
  }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);




const track = document.getElementById('testimonialTrack');
const dots = document.querySelectorAll('.testimonial-dot');
const totalSlides = 3; // 9 reviews / 3 per view
let index = 0;

function updateSlider() {
  const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
  track.style.transform = `translateX(-${index * cardWidth * 3}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  index = (index + 1) % totalSlides;
  updateSlider();
}

setInterval(autoSlide, 4000);

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    index = idx;
    updateSlider();
  });
});



const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



document.querySelector(".help-btn").addEventListener("click", function () {
  document.querySelector(".help-container").classList.toggle("active");
});




const modal = document.getElementById('enquiryModal');
const btn = document.getElementById('enquiryBtn');
const close = document.querySelector('.close');

btn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
