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
      img: "Dubai Images/burj-al-arab-2624317_1920 - Copy.jpg",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 4499",
      link: "Dubai-packagess/Dubai-packages-one.html"
    },
    {
      title: "Georgia",
      rating: "4.2",
      img: "Georgia-images/9.jpg",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 1685",
      link: "Georgia-packages-list/Georgia-four.html"

    },
    {
      title: "Maldives",
      rating: "4.4",
      img: "Maldives-images/Depositphotos_4474251_L (2).jpg",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 7680",
      link: "Maldives-Packages-list/Maldives-two.html"

    },
    {
      title: "Armenia",
      rating: "4.3",
      img: "Armenia-images/1.jpeg",
      info: "7 days 6 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 2500",
      link: "Armenia-packages-list/Armenia-four.html"
    }
  ],
  luxury: [
    {
      title: "vietnam",
      rating: "4.8",
      img: "Vietnam-images/Depositphotos_66882175_L.jpg",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 2699",
      link: "vietnam-packages-list/vietnam-one.html"

    },
    {
      title: "Kyrgyzstan",
      rating: "4.0",
      img: "Kyrgyzstan-packages-list/Kyrgyzstan-images/20230523151501_Pb_KyrgyzstanGallery2.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 2070",
      link: "Kyrgyzstan-packages-list/Kyrgyzstan-one.html"

    },
    {
      title: "Thailand",
      rating: "4.98",
      img: "Thailand-images/Depositphotos_12420435_L.jpg",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 2699",
      link: "Thailand-packages-list/Thailand-one.html"

    },
    {
      title: "Dubai",
      rating: "4.9",
      img: "Dubai Images/burj-al-arab-2624317_1920 - Copy.jpg",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 4499",
      link: "Dubai-packagess/Dubai-packages-one.html"
    },
  ],
  honeymoon: [
    {
      title: "Maldives",
      rating: "4.4",
      img: "Maldives-images/Depositphotos_4474251_L (2).jpg",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 7680",
      link: "Maldives-Packages-list/Maldives-two.html"

    },
    {
      title: "Bali",
      rating: "4.9",
      img: "Bali-images/Depositphotos_8364139_L.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 1250",
      link: "Bali-Packages-list/Bali-one.html"

    },
    {
      title: "vietnam",
      rating: "4.8",
      img: "Vietnam-images/Depositphotos_66882175_L.jpg",
      info: " days  nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 2699",
      link: "vietnam-packages-list/vietnam-one.html"

    },
    {
      title: "switzerland",
      rating: "4.4",
      img: "switzerland-packages-list/Switzerland-images/Depositphotos_26387041_L.jpg",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 3420",
      link: "switzerland-packages-list/switzerland-one.html"

    }
  ],
  family: [
    {
      title: "Dubai",
      rating: "4.9",
      img: "Dubai Images/burj-al-arab-2624317_1920 - Copy.jpg",
      info: "8 days 7 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 4499",
      link: "Dubai-packagess/Dubai-packages-one.html"
    },
    {
      title: "Turkey ",
      rating: "4.8",
      img: "Turkey-images/Depositphotos_94663096_L.jpg",
      info: "6 days 5 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 2350",
      link: "Turkey-packages-list/Turkey-one.html"

    },
    {
      title: "saudi arabia",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 3130",
      link: "Saudi-arabia-packages-list/saudiarabia-one.html"

    },
    {
      title: "Maldives",
      rating: "4.4",
      img: "Maldives-images/Depositphotos_4474251_L (2).jpg",
      info: "5 days 4 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 7680",
      link: "Maldives-Packages-list/Maldives-two.html"

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
            <div class="price">${card.price}</div>
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
    { image: 'Dubai Images/burj-al-arab-2624317_1920 - Copy.jpg', country: 'Dubai', link: 'Dubai-packages.html' },
    { image: 'Maldives-images/Depositphotos_4474251_L (2).jpg', country: 'Maldives', link: 'Maldives-packages.html' },
    { image: 'India-packages-list/India-images/Depositphotos_7932088_L.jpg', country: 'India', link: 'India-packages.html' },
    { image: 'Thailand-images/Depositphotos_12420435_L.jpg', country: 'Thailand', link: 'Thailand-packages.html' },

  ],
  Feb: [
    { image: 'Bali-images/Depositphotos_3587328_L.jpg', country: 'Bali', link: 'Bali-packages.html' },
    { image: 'Vietnam-images/Depositphotos_66882175_L.jpg', country: 'Vietnam', link: 'Vietnam-packages.html' },
    { image: 'Armenia-images/1.jpeg', country: 'Armenia', link: 'Armenia-packages.html' },
    { image: 'Kenya-images/Depositphotos_17643137_L.jpg', country: 'Kenya', link: 'Kenya-packages.html' },

  ],
  Mar: [
    { image: 'Bali-images/Depositphotos_3587328_L.jpg', country: 'Bali', link: 'Bali-packages.html' },
    { image: 'Azerbaijan-images/BKU_510_aspect16x9.jpg', country: 'Azerbaijan', link: 'Azerbaijan-packages.html' },
    { image: 'Turkey-images/Depositphotos_94663096_L.jpg', country: 'Turkey', link: 'Turkey-packages.html' },
    { image: 'Morocco-images/Depositphotos_23937101_L.jpg', country: 'Morocco', link: 'Morocco-packages.html' },

  ],
  Apr: [
    { image: 'Kazakhstan-packages-list/Kazakhstan-images/20241104123324_5.jpg', country: 'Kazakhstan', link: 'Kazakhstan-packages.html' },
    { image: 'Uzbekistan-packages-list/Uzbekistan-images/20220919115721_Us_ScandinaviListing.jpg', country: 'Uzbekistan', link: 'Uzbekistan-packages.html' },
    { image: 'Egypt-packages-list/Egypt-images/Depositphotos_1656452_L.jpg', country: 'Egypt', link: 'Egypt-packages.html' },
    { image: 'Malaysia-packages-list/Malaysia-images/Depositphotos_5477401_L.jpg', country: 'Malaysia', link: 'Malaysia-packages.html' },

  ],
  May: [
    { image: 'Singapore-packages-list/Singapore-images/Depositphotos_312559308_L.jpg', country: 'Singapore', link: 'Singapore-packages.html' },
    { image: 'Japan-images/Depositphotos_8607019_L.jpg', country: 'japan', link: 'Japan-packages.html' },
    { image: 'India-packages-list/India-images/Depositphotos_7932088_L.jpg', country: 'India', link: 'India-packages.html' },
    { image: 'croatia-packages-list/Croatia-images/20220619095511_Px_CroatiaGallery5.jpg', country: 'croatia', link: 'croatia-packages.html' },

  ],
  Jun: [
    { image: 'Prague-packages-list/Prague-images/Depositphotos_47797195_L.jpg', country: 'prague', link: 'prague-packages.html' },
    { image: 'switzerland-packages-list/Switzerland-images/Depositphotos_181378152_L.jpg', country: 'switzerland', link: 'switzerland-packages.html' },
    { image: 'scandinavia-packages-list/Scandinavia-images/20220919115721_Us_ScandinaviListing.jpg', country: 'scandinavia', link: 'scandinavia-packages.html' },
    { image: 'seychelles-packages-list/Seychelles-images/20241114082355_SeychellesItineraries 1.jpg', country: 'seychelles', link: 'seychelles-packages.html' },

  ],
  Jul: [
    { image: 'Southafrica-packages-list/Southafrica-images/Depositphotos_13890331_L.jpg', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'Srilanka-images/dambulla-2516649_1920.jpg', country: 'Sri Lanka', link: 'Srilanka-packages.html' },
    { image: 'Saudi-arabia-packages-list/Saudiarabia-images/20230107055235_Pb_SaudiRiyadhGallery5.jpg', country: 'saudi arabia', link: 'saudiarabia-packages.html' },
    { image: 'switzerland-packages-list/Switzerland-images/Depositphotos_181378152_L.jpg', country: 'switzerland', link: 'switzerland-packages.html' },
  ],
  Aug: [
    { image: 'Prague-packages-list/Prague-images/Depositphotos_47797195_L.jpg', country: 'prague', link: 'prague-packages.html' },
    { image: 'Jordan-packages-list/Jordan-images/20240302100402_Jordaniti2.jpg', country: 'Jordan', link: 'Jordan-packages.html' },
    { image: 'seychelles-packages-list/Seychelles-images/20241114082355_SeychellesItineraries 1.jpg', country: 'seychelles', link: 'seychelles-packages.html' },
    { image: 'Greece-packages-list/Greece-images/20220620045024_Pb_GreeceGallery.jpg', country: 'greece', link: 'greece-packages.html' },

  ],
  Sep: [
    { image: 'Kyrgyzstan-packages-list/Kyrgyzstan-images/20230523151501_Pb_KyrgyzstanGallery2.jpg', country: 'Kyrgyzstan', link: 'Kyrgyzstan-packages.html' },
    { image: 'Jordan-packages-list/Jordan-images/20240302100402_Jordaniti2.jpg', country: 'Jordan', link: 'Jordan-packages.html' },
    { image: 'Kazakhstan-packages-list/Kazakhstan-images/20241104123324_5.jpg', country: 'Kazakhstan', link: 'Kazakhstan-packages.html' },
    { image: 'Malaysia-packages-list/Malaysia-images/Depositphotos_5477401_L.jpg', country: 'Malaysia', link: 'Malaysia-packages.html' },

  ],
  Oct: [
    { image: 'Prague-packages-list/Prague-images/Depositphotos_47797195_L.jpg', country: 'prague', link: 'prague-packages.html' },
    { image: 'scandinavia-packages-list/Scandinavia-images/20220919115721_Us_ScandinaviListing.jpg', country: 'scandinavia', link: 'scandinavia-packages.html' },
    { image: 'Southafrica-packages-list/Southafrica-images/Depositphotos_13890331_L.jpg', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'Greece-packages-list/Greece-images/20220620045024_Pb_GreeceGallery.jpg', country: 'greece', link: 'greece-packages.html' },

  ],
  Nov: [
    { image: 'Dubai Images/burj-al-arab-2624317_1920 - Copy.jpg', country: 'Dubai', link: 'Dubai-packages.html' },

    { image: 'Kenya-images/Depositphotos_17643137_L.jpg', country: 'Kenya', link: 'Kenya-packages.html' },
    { image: 'Maldives-images/Depositphotos_4474251_L (2).jpg', country: 'Maldives', link: 'Maldives-packages.html' },
    { image: 'Morocco-images/Depositphotos_23937101_L.jpg', country: 'Morocco', link: 'Morocco-packages.html' },

  ],
  Dec: [
    { image: 'Bali-images/Depositphotos_3587328_L.jpg', country: 'Bali', link: 'Bali-packages.html' },
    { image: 'Azerbaijan-images/BKU_510_aspect16x9.jpg', country: 'Azerbaijan', link: 'Azerbaijan-packages.html' },
    { image: 'Southafrica-packages-list/Southafrica-images/Depositphotos_13890331_L.jpg', country: 'south africa', link: 'southafrica-packages.html' },
    { image: 'Turkey-images/Depositphotos_94663096_L.jpg', country: 'Turkey', link: 'Turkey-packages.html' },

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
    { title: 'Georgia', image: 'Georgia-images/9.jpg',link: 'visa-countries-list/Georgia-visa.html'  },
    { title: 'Armenia', image: 'Armenia-images/1.jpeg', link: 'visa-countries-list/Armenia-visa.html'},
    { title: 'Azerbaijan', image: 'Azerbaijan-images/BKU_510_aspect16x9.jpg',link: 'visa-countries-list/Azerbaijan-visa.html' },
    { title: 'Vietnam', image: 'Vietnam-images/Depositphotos_66882175_L.jpg',link: 'visa-countries-list/Vietnam-visa.html' }


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

// const countries = Object.keys(visaData);

// countries.forEach((country, index) => {
//   const button = document.createElement('button');
//   button.className = 'visa-tab-button';
//   button.textContent = country;
//   if (index === 0) button.classList.add('active');

//   button.addEventListener('click', () => {
//     document.querySelectorAll('.visa-tab-button').forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');
//     loadVisaCards(country);
//   });

//   tabsContainer.appendChild(button);
// });

function loadVisaCards(country) {
  cardsContainer.innerHTML = '';
  visaData[country].forEach(card => {
    const cardEl = document.createElement('a');
    cardEl.href = card.link || "#";
    cardEl.className = 'visa-card';
    cardEl.innerHTML = `
          <img class="visa-card-img" src="${card.image}" alt="${card.title}">
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

  // Example redirect to themes.html with query params
  const url = `themes.html?destination=${encodeURIComponent(destination)}&theme=${theme}&date=${date}`;
  window.location.href = url;
}
// Search bar End 




  // Declare only ONCE
  const countries = [
    "Dubai",
    // "Thailand",
    // "Malaysia",
    // "Georgia",
    // "Armenia",
    // "Uzbekistan",
    // "Vietnam",
    // "South Africa"
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

    // Navigate to that country's packages page
    const url = destination.toLowerCase().replace(/\s+/g, '-') + "-packages.html";
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
  const slides = document.querySelectorAll<HTMLDivElement>('.carousel .slide');
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
        document.addEventListener('DOMContentLoaded', function() {
            startCarousel();
        });