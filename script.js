// Trending destinations rightside button
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');

function scrollRight() {
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollLeft() {
  scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
}
// Trending destinations rightside button End


// Find Your Perfect Trip Style Section
const cardData = {
  adventure: [
    {
      title: "Dubai",
      rating: "4.9",
      img: "images/Home image/dubai-3720069_1920.webp",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: 4499,   // <— pure number, no "AED"
      link: "dubai-packages/dubai-city-tour-package.html"
    },
    {
      title: "Georgia",
      rating: "4.2",
      img: "images/Home image/9.webp",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "1685",
      link: "georgia-packages-list/tbilisi-kazbegi-tour.html"

    },
    {
      title: "Maldives",
      rating: "4.4",
      img: "images/Home image/Depositphotos_4474251_L (2).webp",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "7680",
      link: "maldives-tour-Packages-list/maldives-all-inclusive-package.html"

    },
    {
      title: "Armenia",
      rating: "4.3",
      img: "images/Home image/armenia-3716853_1920.webp",
      info: "7 days 6 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "2500",
      link: "armenia-tour-packages-list/yerevan-dilijan-lake-sevan-tsaghkadzor-tour.html"
    }
  ],
  luxury: [
    {
      title: "vietnam",
      rating: "4.8",
      img: "images/Home image/Depositphotos_37768795_L.webp",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 5* Resort",
      priceAED: "2699",
      link: "vietnam-tour-Packages-List/hanoi-halong-bay-da-nang-ho-chi-minh-tour.html"

    },
    {
      title: "Kyrgyzstan",
      rating: "4.0",
      img: "images/Home image/20250428082756_KyrgyzstannewItinerary8 (1).webp",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      priceAED: "2070",
      link: "kyrgyzstan-tour-packages-list/Kyrgyzstan-one.html"

    },
    {
      title: "Thailand",
      rating: "4.98",
      img: "images/Home image/Depositphotos_12420435_L.webp",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 5* Resort",
      priceAED: "2699",
      link: "thailand-tour-packages-list/bangkok-pattaya-tour-package.html"

    },
    {
      title: "Dubai",
      rating: "4.9",
      img: "images/Home image/dubai-2057583_1920.webp",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "4499",
      link: "dubai-packages/dubai-city-tour-package.html"
    },
  ],
  honeymoon: [
    {
      title: "Maldives",
      rating: "4.4",
      img: "images/Home image/Depositphotos_4474251_L (2).webp",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "7680",
      link: "maldives-tour-Packages-list/maldives-all-inclusive-package.html"

    },
    {
      title: "Bali",
      rating: "4.9",
      img: "images/Home image/Depositphotos_3587328_L.webp",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> 5* Resort",
      priceAED: "1250",
      link: "bali-tour-packages-list/bali-honeymoon-package.html"

    },
    {
      title: "vietnam",
      rating: "4.8",
      img: "images/Home image/Depositphotos_37768795_L.webp",
      info: " days  nights | <i class='fas fa-hotel'></i> 5* Resort",
      priceAED: "2699",
      link: "vietnam-tour-Packages-List/hanoi-halong-bay-da-nang-ho-chi-minh-tour.html"

    },
    {
      title: "switzerland",
      rating: "4.4",
      img: "images/Home image/Depositphotos_58674555_XL.webp",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> Water Villas",
      priceAED: "3420",
      link: "switzerland-packages-list/zurich-mount-titlis-interlaken-tour.html"

    }
  ],
  family: [
    {
      title: "Dubai",
      rating: "4.9",
      img: "images/Home image/dubai-2057583_1920.webp",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "4499",
      link: "dubai-packages/dubai-city-tour-package.html"
    },
    {
      title: "Turkey ",
      rating: "4.8",
      img: "images/Home image/Depositphotos_94663096_L.webp",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 5* Resort",
      priceAED: "2350",
      link: "turkey-tour-packages-list/istanbul-cappadocia-tour-package.html"

    },
    {
      title: "saudi arabia",
      rating: "5.0",
      img: "images/Home image/20230107052216_Pb_SaudiRiyadhIti5.webp",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      priceAED: "3130",
      link: "Saudi-tour-packages-list/riyadh-jeddah-tour.html"

    },
    {
      title: "Maldives",
      rating: "4.4",
      img: "images/Home image/Depositphotos_4474251_L (2).webp",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      priceAED: "7680",
      link: "maldives-tour-Packages-list/maldives-all-inclusive-package.html"

    },
  ]
};

function filterCards(type, event) {
  const buttons = document.querySelectorAll('.category-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');

  const container = document.getElementById('cardGrid');
  container.innerHTML = '';

  cardData[type].forEach(card => {
    const price = Number(card.priceAED); // make sure it's a number
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <div style="position: relative;">
        <img src="${card.img}" alt="${card.title}" />
      </div>
      <div class="card-body">
        <div class="card-header">
          <div class="card-title">${card.title}</div>
          <div class="rating"><i class="fas fa-star"></i> ${card.rating}</div>
        </div>
        <div class="info"><i class="fas fa-clock"></i> ${card.info}</div>
        <div class="price-row">
          <div class="price">AED ${price}</div>
          <a href="${card.link}" class="know-more">Know More</a>
        </div>
      </div>`;
    container.appendChild(cardEl);
  });
}


window.onload = () => filterCards('adventure');

// Find Your Perfect Trip Style Section END

const monthData = {
  Jan: [
    { image: 'images/Home image/dubai-2057583_1920.webp', country: 'Dubai', link: 'dubai-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_4474251_L (2).webp', country: 'Maldives', link: 'maldives-tours-packages.html' },
    { image: 'images/Home image/Depositphotos_7932088_L.webp', country: 'India', link: 'india-packages.html' },
    { image: 'images/Home image/Depositphotos_12420435_L.webp', country: 'Thailand', link: 'thailand-tour-packages.html' },

  ],
  Feb: [
    { image: 'images/Home image/Depositphotos_3587328_L.webp', country: 'Bali', link: 'bali-tour-packages' },
    { image: 'images/Home image/Depositphotos_37768795_L.webp', country: 'Vietnam', link: 'vietnam-packages.html' },
    { image: 'images/Home image/armenia-3716853_1920.webp', country: 'Armenia', link: 'armenia-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_3964728_L.webp', country: 'Kenya', link: 'kenya-tours-packages.html' },

  ],
  Mar: [
    { image: 'images/Home image/Depositphotos_3587328_L.webp', country: 'Bali', link: 'bali-tour-packages' },
    { image: 'images/Home image/BKU_510_aspect16x9.webp', country: 'Azerbaijan', link: 'Azerbaijan-packages.html' },
    { image: 'images/Home image/Depositphotos_94663096_L.webp', country: 'Turkey', link: 'turkey-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_25885511_L.webp', country: 'Morocco', link: 'morocco-packages.html' },

  ],
  Apr: [
    { image: 'images/Home image/20241104124630_4.webp', country: 'Kazakhstan', link: 'Kazakhstan-packages.html' },
    { image: 'images/Home image/20241104124630_4.webp', country: 'Uzbekistan', link: 'uzbekistan-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_23268152_L.webp', country: 'Egypt', link: 'egypt-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_5477401_L.webp', country: 'Malaysia', link: 'malaysia-tour-packages.html' },

  ],
  May: [
    { image: 'images/Home image/Depositphotos_312559308_L.webp', country: 'Singapore', link: 'singapore-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_8607019_L.webp', country: 'japan', link: 'japan-packages.html' },
    { image: 'images/Home image/Depositphotos_7932088_L.webp', country: 'India', link: 'india-packages.html' },
    { image: 'images/Home image/20220619084845_Px_CroatiaListing.webp', country: 'croatia', link: 'croatia-packages.html' },

  ],
  Jun: [
    { image: 'images/Home image/Depositphotos_47797237_L.webp', country: 'prague', link: 'prague-packages.html' },
    { image: 'images/Home image/Depositphotos_58674555_XL.webp', country: 'switzerland', link: 'switzerland-packages.html' },
    { image: 'images/Home image/20220919115721_Us_ScandinaviListing.webp', country: 'scandinavia', link: 'scandinavia-packages.html' },
    { image: 'images/Home image/20241114082544_Seychellesitineraries3.webp', country: 'seychelles', link: 'seychelles-packages.html' },

  ],
  Jul: [
    { image: 'images/Home image/Depositphotos_13890331_L.webp', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'images/Home image/dambulla-2516649_1920.webp', country: 'Sri Lanka', link: 'srilanka-tour-packages.html' },
    { image: 'images/Home image/20230107052216_Pb_SaudiRiyadhIti5.webp', country: 'saudi arabia', link: 'saudiarabia-tour-packages.html' },
    { image: 'images/Home image/Depositphotos_58674555_XL.webp', country: 'switzerland', link: 'switzerland-packages.html' },
  ],
  Aug: [
    { image: 'images/Home image/Depositphotos_47797237_L.webp', country: 'prague', link: 'prague-packages.html' },
    { image: 'images/Home image/20240302100402_Jordaniti2.webp', country: 'Jordan', link: 'jordan-tour-packages.html' },
    { image: 'images/Home image/20241114082544_Seychellesitineraries3.webp', country: 'seychelles', link: 'seychelles-packages.html' },
    { image: 'images/Home image/20220620045024_Pb_GreeceGallery.webp', country: 'greece', link: 'greece-packages.html' },

  ],
  Sep: [
    { image: 'images/Home image/20250428082756_KyrgyzstannewItinerary8 (1).webp', country: 'Kyrgyzstan', link: 'Kyrgyzstan-packages.html' },
    { image: 'images/Home image/20240302100402_Jordaniti2.webp', country: 'Jordan', link: 'jordan-tour-packages.html' },
    { image: 'images/Home image/20250428082756_KyrgyzstannewItinerary8 (1).webp', country: 'Kazakhstan', link: 'Kazakhstan-packages.html' },
    { image: 'images/Home image/Depositphotos_5477401_L.webp', country: 'Malaysia', link: 'malaysia-tour-packages.html' },

  ],
  Oct: [
    { image: 'images/Home image/Depositphotos_47797237_L.webp', country: 'prague', link: 'prague-packages.html' },
    { image: 'images/Home image/20220919115721_Us_ScandinaviListing.webp', country: 'scandinavia', link: 'scandinavia-packages.html' },
    { image: 'images/Home image/Depositphotos_13890331_L.webp', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'images/Home image/20220620045024_Pb_GreeceGallery.webp', country: 'greece', link: 'greece-packages.html' },

  ],
  Nov: [
    { image: 'images/Home image/dubai-2057583_1920.webp', country: 'Dubai', link: 'dubai-tour-packages.html' },

    { image: 'images/Home image/Depositphotos_3964728_L.webp', country: 'Kenya', link: 'kenya-tours-packages.html' },
    { image: 'images/Home image/Depositphotos_4474251_L (2).webp', country: 'Maldives', link: 'maldives-tours-packages.html' },
    { image: 'images/Home image/Depositphotos_25885511_L.webp', country: 'Morocco', link: 'morocco-packages.html' },

  ],
  Dec: [
    { image: 'images/Home image/Depositphotos_3587328_L.webp', country: 'Bali', link: 'bali-tour-packages' },
    { image: 'images/Home image/BKU_510_aspect16x9.webp', country: 'Azerbaijan', link: 'Azerbaijan-packages.html' },
    { image: 'images/Home image/Depositphotos_13890331_L.webp', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'images/Home image/Depositphotos_94663096_L.webp', country: 'Turkey', link: 'turkey-tour-packages.html' },

  ]
};

const monthButtons = document.getElementById('monthButtons');
const cardContainer = document.getElementById('cardContainer');

const months = Object.keys(monthData);

months.forEach((month, index) => {
  const btn = document.createElement('button');
  btn.innerText = month;
  if (index === 8) btn.classList.add('active'); // Jul default
  btn.addEventListener('click', () => {
    document.querySelectorAll('.month-buttons button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadCards(month);
  });
  monthButtons.appendChild(btn);
});

function loadCards(month) {
  cardContainer.innerHTML = '';
  monthData[month].forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'carddd';
    cardEl.innerHTML = `
      <a href="${card.link}" class="card-link">
        <img src="${card.image}" alt="${card.country}" />
        <div class="country-name">${card.country}</div>
      </a>
    `;
    cardContainer.appendChild(cardEl);
  });
}


// Initial load for July
loadCards('Sep');

const visaData = {
  Dubai: [
    { title: 'Georgia', image: 'Georgia-images/9.webp', link: 'visa-countries-list/georgia-visa.html' },
    { title: 'Armenia', image: 'Armenia-images/1.webp', link: 'visa-countries-list/armenia-visa.html' },
    { title: 'Azerbaijan', image: 'Azerbaijan-images/BKU_510_aspect16x9.webp', link: 'visa-countries-list/azerbaijan-visa.html' },
    { title: 'Vietnam', image: 'Vietnam-images/Depositphotos_66882175_L.webp', link: 'visa-countries-list/vietnam-visa.html' }


  ],
  Vietnam: [
    { title: 'VIETNAM STAMPED VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', price: 'AED 320.00' },
    { title: 'VIETNAM E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', price: 'AED 280.00' },
    { title: 'VIETNAM E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', price: 'AED 280.00' }

  ],
  Qatar: [
    { title: 'QATAR TOURIST VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/a073d98cebc37f5c1ba94388cde4bc42.jpg', price: 'AED 250.00' },
    { title: 'QATAR BUSINESS VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/a073d98cebc37f5c1ba94388cde4bc42.jpg', price: 'AED 400.00' },
    { title: 'QATAR BUSINESS VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/a073d98cebc37f5c1ba94388cde4bc42.jpg', price: 'AED 400.00' },

  ],
  Egypt: [
    { title: 'EGYPT E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg', price: 'AED 200.00' },
    { title: 'EGYPT E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg', price: 'AED 200.00' },
    { title: 'EGYPT E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg', price: 'AED 200.00' },


  ],
  Seychelles: [
    { title: 'SEYCHELLES TOURIST VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', price: 'AED 350.00' },
    { title: 'SEYCHELLES TOURIST VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', price: 'AED 350.00' },

    { title: 'SEYCHELLES TOURIST VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', price: 'AED 350.00' },

  ]
};

const tabsContainer = document.getElementById('visaTabs');
const cardsContainer = document.getElementById('visaCards');



function loadVisaCards(country) {
  cardsContainer.innerHTML = '';
  visaData[country].forEach(card => {
    const cardEl = document.createElement('a');
    cardEl.href = card.link || "#";
    cardEl.className = 'visa-card';
    cardEl.innerHTML = `
          <img class="visa-card-img" src="${card.image}" alt="${card.title} "loading="lazy">
          <div class="visa-card-body">
            <div class="visa-card-footer">
              <div class="visa-card-title">${card.title}</div>
              <div class="visa-arrow">&#8594;</div>
            </div>
          </div>
        `;
    cardsContainer.appendChild(cardEl);
  });
}

function formatPrice(aedPrice) {
  if (userCurrency === 'AED') return `AED ${aedPrice}`;
  if (userCurrency === 'INR') return `₹ ${(aedPrice * exchangeRates.AED_TO_INR).toFixed(0)}`;
  return `$ ${(aedPrice * exchangeRates.AED_TO_USD).toFixed(0)}`;
}

// Load default country
loadVisaCards('Dubai');

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
const cardCount = 9;
const visibleCards = 3;
let index = 0;

function slideCards() {
  const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
  index = (index + 1) % (Math.ceil(cardCount / visibleCards));
  track.style.transform = `translateX(-${index * cardWidth * visibleCards}px)`;
}

setInterval(slideCards, 4000);

(function () {
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
})();

// Search bar
function handleSearch() {
  const destination = document.getElementById("destinationInput").value.trim();
  const theme = document.getElementById("themeSelect").value;
  const date = document.getElementById("dateInput").value;

  if (!destination || !theme || !date) {
    alert("Please fill all fields before searching.");
    return;
  }

  const url = `themes.html?destination=${encodeURIComponent(destination)}&theme=${theme}&date=${date}`;
  window.location.href = url;
}




const countries = [
  "Dubai",

];

const destinationInput = document.getElementById("destinationInput");
const countryList = document.getElementById("countryList");

function showList() {
  countryList.style.display = "block";
  countryList.innerHTML = "";
  countries.forEach(c => {
    const div = document.createElement("div");
    div.innerText = c;
    div.onclick = () => {
      destinationInput.value = c;
      countryList.style.display = "none";
    };
    countryList.appendChild(div);
  });
}

function filterCountries() {
  const filter = destinationInput.value.toLowerCase();
  countryList.innerHTML = "";
  const filtered = countries.filter(c => c.toLowerCase().includes(filter));

  filtered.forEach(c => {
    const div = document.createElement("div");
    div.innerText = c;
    div.onclick = () => {
      destinationInput.value = c;
      countryList.style.display = "none";
    };
    countryList.appendChild(div);
  });

  countryList.style.display = filtered.length ? "block" : "none";
}

function handleSearch() {
  const destination = destinationInput.value.trim();
  const theme = document.getElementById("themeSelect").value;
  const date = document.getElementById("dateInput").value;

  if (!destination || !theme || !date) {
    alert("Please select destination, theme, and date!");
    return;
  }

  // Capitalize First Letter
  const formattedDestination =
    destination.charAt(0).toUpperCase() + destination.slice(1);

  const url =
    "/" + formattedDestination.replace(/\s+/g, '-') + "-Packages.html";

  window.location.href = url;
}





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




(() => {
  // Grab all the slides inside the carousel
  const slides = document.querySelectorAll < HTMLDivElement > ('.carousel .slide');
  let currentSlide = 0;

  // Change slides every 4 seconds
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
})();



// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play carousel
function startCarousel() {
  setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// Start the carousel when page loads
document.addEventListener('DOMContentLoaded', function () {
  startCarousel();
});



const exchangeRates = {
  AED_TO_INR: 24.02,
  AED_TO_USD: 0.2712
};

let userCurrency = 'AED';

function formatPrice(aedPrice) {
  if (userCurrency === 'AED') return `AED ${aedPrice}`;
  if (userCurrency === 'INR') return `₹ ${(aedPrice * exchangeRates.AED_TO_INR).toFixed(0)}`;
  return `$ ${(aedPrice * exchangeRates.AED_TO_USD).toFixed(0)}`;
}

function filterCards(type, event) {
  const buttons = document.querySelectorAll('.category-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');

  const container = document.getElementById('cardGrid');
  container.innerHTML = '';

  cardData[type].forEach(card => {
    const aed = Number(card.priceAED);
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
          <div style="position: relative;">
            <img src="${card.img}" alt="${card.title}" />
          </div>
          <div class="card-body">
            <div class="card-header">
              <div class="card-title">${card.title}</div>
              <div class="rating"><i class="fas fa-star"></i> ${card.rating}</div>
            </div>
            <div class="info"><i class="fas fa-clock"></i> ${card.info}</div>
            <div class="price-row">
              <div class="price">${formatPrice(aed)}</div>
              <a href="${card.link}" class="know-more">Know More</a>
            </div>
          </div>`;
    container.appendChild(cardEl);
  });
}

window.onload = () => {
  filterCards('adventure');

  const currencySelect = document.getElementById('currencySelect');
  currencySelect.addEventListener('change', e => {
    userCurrency = e.target.value;
    const activeBtn = document.querySelector('.category-buttons button.active');
    const currentType = activeBtn ? activeBtn.dataset.type : 'adventure';
    filterCards(currentType);
  });
};



document.querySelector(".help-btn").addEventListener("click", function () {
  document.querySelector(".help-container").classList.toggle("active");
});


const modal = document.getElementById('enquiryModal');
const btn = document.getElementById('enquiryBtn');
const close = document.querySelector('.close');

btn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };




// imageloading


document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px' // Start loading 50px before image appears
    });

    images.forEach(img => imageObserver.observe(img));
  }
});

   // Tab Navigation
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        console.log('Selected tab:', this.textContent);
      });
    });

    // Destination Cards
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const destination = this.querySelector('.destination-label').textContent;
        const destinationInput = document.getElementById('destinationInput');
        destinationInput.value = destination.replace('Trip To ', '');
        console.log('Selected destination:', destination);
      });
    });

    // Search Handler
    function handleSearch(event) {
  event.preventDefault();

  const destination = document.getElementById("destinationInput").value.trim();
  const theme = document.getElementById("themeSelect").value;
  const date = document.getElementById("dateInput").value;

  if (!destination || !theme || !date) {
    alert("Please select destination, theme, and date!");
    return;
  }

  // Format destination (First Letter Capital)
  const formattedDestination =
    destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();

  // Create page URL
  const url = formattedDestination.replace(/\s+/g, '-') + "-Packages.html";

  // Navigate
  window.location.href = url;
}
    // Set minimum date to today
    const dateInput = document.getElementById('dateInput');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);


    let mobileCurrentIndex = 0;
const mobileSlides = document.querySelectorAll('.mobile-slide');
const mobileDots = document.querySelectorAll('.mobile-dot');
const mobileTotal = mobileSlides.length;

function mobileShowSlide(index) {
  mobileSlides.forEach(slide => slide.classList.remove('active'));
  mobileDots.forEach(dot => dot.classList.remove('active'));

  mobileSlides[index].classList.add('active');
  mobileDots[index].classList.add('active');
}


function mobileNextSlide() {
  mobileCurrentIndex = (mobileCurrentIndex + 1) % mobileTotal;
  mobileShowSlide(mobileCurrentIndex);
}

function mobileGoToSlide(index) {
  mobileCurrentIndex = index;
  mobileShowSlide(mobileCurrentIndex);
}

setInterval(mobileNextSlide, 4000);





   function scrollCarousel(direction) {
            const offerScrollWrapper = document.getElementById('offerScrollWrapper');
            // Responsive scroll amount
            const cardWidth = window.innerWidth <= 480 ? 240 : (window.innerWidth <= 768 ? 280 : 350);
            const gapWidth = window.innerWidth <= 480 ? 16 : 24;
            const scrollAmount = cardWidth + gapWidth;
            
            if (direction === 'left') {
                offerScrollWrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                offerScrollWrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }

        // Optional: Auto-hide arrows at scroll boundaries
        const promoScrollElement = document.getElementById('offerScrollWrapper');
        const prevArrowBtn = document.querySelector('.nav-prev-button');
        const nextArrowBtn = document.querySelector('.nav-next-button');

        promoScrollElement.addEventListener('scroll', function() {
            // Hide/show prev button
            if (promoScrollElement.scrollLeft <= 0) {
                prevArrowBtn.style.opacity = '0.5';
                prevArrowBtn.style.cursor = 'not-allowed';
            } else {
                prevArrowBtn.style.opacity = '1';
                prevArrowBtn.style.cursor = 'pointer';
            }

            // Hide/show next button
            if (promoScrollElement.scrollLeft >= promoScrollElement.scrollWidth - promoScrollElement.clientWidth - 10) {
                nextArrowBtn.style.opacity = '0.5';
                nextArrowBtn.style.cursor = 'not-allowed';
            } else {
                nextArrowBtn.style.opacity = '1';
                nextArrowBtn.style.cursor = 'pointer';
            }
        });

        // Initial check
        promoScrollElement.dispatchEvent(new Event('scroll'));



        (function () {
  const scroller = document.getElementById("scrollContainer");
  if (!scroller) return;

  let speed = 1.5; // lower = slower & smoother
  let animationId;
  let isPaused = false;

  function smoothScroll() {
    if (!isPaused) {
      scroller.scrollLeft += speed;

      if (
        scroller.scrollLeft + scroller.clientWidth >=
        scroller.scrollWidth
      ) {
        scroller.scrollLeft = 0;
      }
    }

    animationId = requestAnimationFrame(smoothScroll);
  }

  // Start animation
  smoothScroll();

  // Pause on hover
  scroller.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  // Resume on leave
  scroller.addEventListener("mouseleave", () => {
    isPaused = false;
  });
})();
