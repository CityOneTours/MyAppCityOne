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
      title: "Maldives",
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    },
    {
      title: "Armenia",
      rating: "4.96",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg",
      info: "2 days 3 nights | <i class='fas fa-hotel'></i> 3*/4*/5* Hotels",
      price: "AED 60"
    }
  ],
  luxury: [
    {
      title: "Azerbaijan",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "Kyrgyzstan",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    },
    {
      title: "Armenia",
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
      title: "Vietnam",
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
      title: "Singapore",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    },
    {
      title: "switzerland",
      rating: "5.0",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "4 days 3 nights | <i class='fas fa-hotel'></i> Water Villas",
      price: "AED 350"
    }
  ],
  family: [
    {
      title: "Dubai",
      rating: "4.89",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg",
      info: "3 nights | <i class='fas fa-hotel'></i> Theme Park Package",
      price: "AED 220"
    },
    {
      title: "Malaysia",
      rating: "4.98",
      img: "https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg",
      info: "3 days 2 nights | <i class='fas fa-hotel'></i> 5* Resort",
      price: "AED 200"
    },
    {
      title: "saudi arabia",
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
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg', country: 'Dubai',link: 'Dubai-packagess/Dubai-packages-two.html'  },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Golden_Bridge_(Vietnam).jpg', country: 'Maldives',link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/9b7361b0dfbd5ffaf4f92928a2f554ed.jpg', country: 'India' ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/9b7361b0dfbd5ffaf4f92928a2f554ed.jpg', country: 'Thailand' ,link: 'Dubai-packagess/Dubai-packages-two.html'},

  ],
  Feb: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Bali' ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Vietnam' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Armenia' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Kenya' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Mar: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/6dddf165fec7167b45a3e1a7c66f8bca.jpg', country: 'Bali' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Azerbaijan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/cdc1afa876c0a873aa296eb68be18e2c.jpg', country: 'Turkey' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/cdc1afa876c0a873aa296eb68be18e2c.jpg', country: 'Morocco' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Apr: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Kazakhstan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Uzbekistan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Egypt' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Malaysia'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},

  ],
  May: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Singapore'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'japan'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'India'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/d7ad5de12f9d20db09bd9eb86e39a70d.jpg', country: 'croatia' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Jun: [
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'prague' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'switzerland'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'scandinavia'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'seychelles' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Jul: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/a073d98cebc37f5c1ba94388cde4bc42.jpg', country: 'south africa' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TL0750-cover.jpg.jpg', country: 'Sri Lanka' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/Holy-Trinity-Cathedral-Tbilisi-shutterstock_2126337365.jpg.jpg', country: 'saudi arabia'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/11753a282bbfc8e8e9283294e3a2dae2.jpg', country: 'switzerland'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
  ],
  Aug: [
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Greece'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Jordan'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'seychelles'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'greece' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Sep: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Kyrgyzstan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Jordan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Kazakhstan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Malaysia' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Oct: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'prague' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'scandinavia'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'south africa'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'greece'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},

  ],
  Nov: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Dubai' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Kenya' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Maldives' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Morocco' ,link: 'Dubai-packagess/Dubai-packages-two.html' },

  ],
  Dec: [
    { image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/TAL-bali-lead-image-BALITG1223-101f43c88c044081a4558b737afbd094.jpg', country: 'Bali' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Azerbaijan' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'South Africa' ,link: 'Dubai-packagess/Dubai-packages-two.html' },
    { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Turkey'  ,link: 'Dubai-packagess/Dubai-packages-two.html'},

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
      <a href="${card.link}" class="card-link">
        <img src="${card.image}" alt="${card.country}" />
        <div class="country-name">${card.country}</div>
      </a>
    `;
    cardContainer.appendChild(cardEl);
  });
}


// Initial load for July
loadCards('Jul');

const visaData = {
  Dubai: [
    { title: 'Dubai VISA', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' },
    { title: 'Georgia', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' },
    { title: 'Kazakhstan', image: 'https://sys.cityonetours.com/UploadFiles/CityImages/CityImageOriginal/tdyerevan004.jpg', price: 'AED 300.00' }

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
