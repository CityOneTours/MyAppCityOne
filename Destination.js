function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;



const destinations = [
  {
    name: "Dubai",
    rating: "5.0",
    image: "images/Home image/dubai-2057583_1920.jpg",
    url: "Dubai-Packages.html"
  },
  {
    name: "Vietnam",
    rating: "4.8",
    image: "images/Home image/Depositphotos_37768795_L.jpg",
    url: "vietnam-Packages.html"
  },
  {
    name: "Armenia",
    rating: "4.9",
    image: "images/Home image/armenia-3716853_1920.jpg",
    url: "Armenia-packages.html"
  },

  {
    name: "Kenya",
    rating: "4.2",
    image: "images/Home image/Depositphotos_3964728_L.jpg",
    url: "kenya-packages.html"
  },
  {
    name: "Maldives",
    rating: "4.8",
    image: "images/Home image/Depositphotos_4474251_L (2).jpg",
    url: "Maldives-packages.html"
  },
  {
    name: "Georgia",
    rating: "4.7",
    image: "images/Home image/9.jpg",
    url: "Georgia-packages.html"
  },

  {
    name: "Bali",
    rating: "5.0",
    image: "images/Home image/Depositphotos_3587328_L.jpg",
    url: "Bali-packages.html"
  },
  {
    name: "Azerbaijan",
    rating: "4.8",
    image: "images/Home image/BKU_510_aspect16x9.jpg",
    url: "Azerbaijan-packages.html"
  },
  {
    name: "Turkey",
    rating: "4.4",
    image: "images/Home image/Depositphotos_94663096_L.jpg",
    url: "Turkey-packages.html"
  },



  {
    name: "Morocco",
    rating: "4.3",
    image: "images/Home image/Depositphotos_25885511_L.jpg",
    url: "morocco-packages.html"
  },
  {
    name: "Kazakhstan",
    rating: "4.9",
    image: "images/Home image/20241104124630_4.jpg",
    url: "Kazakhstan-packages.html"
  },
  {
    name: "Jordan",
    rating: "4.7",
    image: "images/Home image/20240302100402_Jordaniti2.jpg",
    url: "Jordan-packages.html"
  },
  {
    name: "Thailand",
    rating: "4.9",
    image: "images/Home image/Depositphotos_12420435_L.jpg",
    url: "Thailand-packages.html"
  },
  {
    name: "Sri Lanka ",
    rating: "4.2",
    image: "images/Home image/dambulla-2516649_1920.jpg",
    url: "Srilanka-packages.html"
  },
  {
    name: "Kyrgyzstan",
    rating: "4.9",
    image: "images/Home image/20250428082756_KyrgyzstannewItinerary8 (1).jpg",
    url: "Kyrgyzstan-packages.html"
  },
  {
    name: "Uzbekistan",
    rating: "4.8",
    image: "images/Home image/20241104124630_4.jpg",
    url: "Uzbekistan-packages.html"
  },
  {
    name: "Egypt",
    rating: "4.3",
    image: "images/Home image/Depositphotos_23268152_L.jpg",
    url: "Egypt-packages.html"
  },
  {
    name: "Malaysia",
    rating: "4.5",
    image: "images/Home image/Depositphotos_5477401_L.jpg",
    url: "Malaysia-packages.html"
  },
  {
    name: "Singapore ",
    rating: "4.7",
    image: "images/Home image/Depositphotos_312559308_L.jpg",
    url: "Singapore-packages.html"
  },

  {
    name: "Japan",
    rating: "4.9",
    image: "images/Home image/Depositphotos_8607019_L.jpg",
    url: "japan-packages.html"
  },

  {
    name: "India",
    rating: "4.9",
    image: "images/Home image/Depositphotos_7932088_L.jpg",
    url: "india-packages.html"
  },

  {
    name: "Croatia",
    rating: "4.7",
    image: "images/Home image/20220619084845_Px_CroatiaListing.jpg",
    url: "croatia-packages.html"
  },
  {
    name: "Greece",
    rating: "4.6",
    image: "images/Home image/20220620045024_Pb_GreeceGallery.jpg",
    url: "greece-packages.html"
  },
  {
    name: "Prague",
    rating: "4.1",
    image: "images/Home image/Depositphotos_47797237_L.jpg",
    url: "prague-packages.html"
  },

  {
    name: "Switzerland",
    rating: "4.7",
    image: "images/Home image/Depositphotos_58674555_XL.jpg",
    url: "switzerland-packages.html"
  },
  {
    name: "Scandinavia",
    rating: "4.5",
    image: "images/Home image/20220919115721_Us_ScandinaviListing.jpg",
    url: "scandinavia-packages.html"
  },
  {
    name: "Seychelles",
    rating: "4.6",
    image: "images/Home image/20241114082544_Seychellesitineraries3.jpg",
    url: "seychelles-packages.html"
  },
  {
    name: "South africa",
    rating: "4.1",
    image: "images/Home image/Depositphotos_13890331_L.jpg",
    url: "southafrica-packages.html"
  },
  {
    name: "Saudi arabia",
    rating: "4.9",
    image: "images/Home image/20230107052216_Pb_SaudiRiyadhIti5.jpg",
    url: "saudiarabia-packages.html"
  },

];


function renderDestinations(data) {
  const container = document.getElementById("destinationGrid");
  container.innerHTML = "";

  data.forEach(dest => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}"loading="lazy" />
      <div class="rating-badge">${dest.rating}</div>
      <div class="overlay">${dest.name}</div>
    `;

    card.addEventListener("click", () => {
      if (dest.url) {
        window.location.href = dest.url;
      }
    });

    container.appendChild(card);
  });
}


function filterDestinations() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = destinations
    .filter(d => d.name.toLowerCase().includes(value))
    .concat(destinations.filter(d => !d.name.toLowerCase().includes(value)));
  renderDestinations(filtered);
}

window.onload = () => {
  renderDestinations(destinations);
};

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

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