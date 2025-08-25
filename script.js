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
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    },
    {
      title: "Georgia",
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    },
    {
      title: "Dubai",
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    },
    {
      title: "Georgia",
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    }
  ],
  luxury: [
    {
      title: "Bali",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    },
    {
      title: "Bali",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    }
  ],
  honeymoon: [
    {
      title: "Paris",
      rating: "4.95",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "3 days 3 nights | <i class='fas fa-hotel'></i> Romantic Hotels",
      price: "AED 180"
    },
    {
      title: "Bali",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    }
  ],
  family: [
    {
      title: "Orlando",
      rating: "4.89",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "3 nights | <i class='fas fa-hotel'></i> Theme Park Package",
      price: "AED 220"
    },
    {
      title: "Bali",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    },
    {
      title: "Maldives",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    }
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
              <button class="know-more">Know More</button>
            </div>
          </div>`;

    container.appendChild(cardEl);
  });
}

window.onload = () => filterCards('adventure');

// Find Your Perfect Trip Style Section END

const monthData = {
  Jan: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg', country: 'Dubai' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg', country: 'Egypt' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/9b7361b0dfbd5ffaf4f92928a2f554ed.jpg', country: 'Bali' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/9b7361b0dfbd5ffaf4f92928a2f554ed.jpg', country: 'Bali' },

  ],
  Feb: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Thailand' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'UAE' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Sri Lanka' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Sri Lanka' },

  ],
  Mar: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg', country: 'Turkey' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Italy' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/cdc1afa876c0a873aa296eb68be18e2c.jpg', country: 'Kenya' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/cdc1afa876c0a873aa296eb68be18e2c.jpg', country: 'Kenya' },

  ],
  Apr: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Japan' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Vietnam' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'France' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'France' },

  ],
  May: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Maldives' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'Switzerland' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'Indonesia' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'Indonesia' },

  ],
  Jun: [
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Singapore' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Malaysia' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'UK' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'UK' },

  ],
  Jul: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/a073d98cebc37f5c1ba94388cde4bc42.jpg', country: 'Dubai' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Sri Lanka' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Holy-Trinity-Cathedral-Tbilisi-shutterstock_2126337365.jpg.jpg', country: 'Dubai' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/11753a282bbfc8e8e9283294e3a2dae2.jpg', country: 'Sri Lanka' },
  ],
  Aug: [
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Greece' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Jordan' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'USA' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'USA' },

  ],
  Sep: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Canada' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Mexico' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Brazil' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Brazil' },

  ],
  Oct: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'New Zealand' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Australia' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Chile' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Chile' },

  ],
  Nov: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Spain' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Portugal' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Morocco' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Morocco' },

  ],
  Dec: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Finland' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Russia' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'South Africa' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'South Africa' },

  ]
};

const monthButtons = document.getElementById('monthButtons');
const cardContainer = document.getElementById('cardContainer');

const months = Object.keys(monthData);

months.forEach((month, index) => {
  const btn = document.createElement('button');
  btn.innerText = month;
  if (index === 6) btn.classList.add('active'); // Jul default
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
          <img src="${card.image}" alt="${card.country}" />
          <div class="country-name">${card.country}</div>
        `;
    cardContainer.appendChild(cardEl);
  });
}

// Initial load for July
loadCards('Jul');

const visaData = {
  Dubai: [
    { title: 'AZERBAIJAN STAMPED VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' },
    { title: 'AZERBAIJAN E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' },
    { title: 'AZERBAIJAN E-VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' }

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

const countries = Object.keys(visaData);

countries.forEach((country, index) => {
  const button = document.createElement('button');
  button.className = 'visa-tab-button';
  button.textContent = country;
  if (index === 0) button.classList.add('active');

  button.addEventListener('click', () => {
    document.querySelectorAll('.visa-tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    loadVisaCards(country);
  });

  tabsContainer.appendChild(button);
});

function loadVisaCards(country) {
  cardsContainer.innerHTML = '';
  visaData[country].forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'visa-card';
    cardEl.innerHTML = `
          <img class="visa-card-img" src="${card.image}" alt="${card.title}">
          <div class="visa-card-body">
            <div class="visa-card-title">${card.title}</div>
            <div class="visa-card-footer">
              <div class="visa-price">${card.price}</div>
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
