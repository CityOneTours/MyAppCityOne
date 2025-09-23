function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

// const destinations = [
//     { name: "Dubai", rating: "5.0", image: "https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg , " },
//     { name: "Vietnam", rating: "4.8", image: "https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg" },
//     { name: "Yerevan", rating: "4.9", image: "https://wallpapercave.com/wp/wp2292388.jpg" },
//     { name: "Kenya", rating: "4.6", image: "https://wallpapercave.com/wp/wp1918916.jpg" },
//     { name: "Maldives", rating: "4.2", image: "http://wallpapercave.com/wp/L4YaX6Y.jpg" },
//     { name: "Austria", rating: "4.3", image: "https://images.alphacoders.com/742/742584.jpg" },
//     { name: "Georgia", rating: "4.8", image: "https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg" },
//     { name: "Bali", rating: "4.4", image: "https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-1920x1080.jpg" },
//     { name: "Austria", rating: "4.3", image: "https://images.alphacoders.com/742/742584.jpg" },
//     { name: "Georgia", rating: "4.8", image: "https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg" },
//     { name: "Bali", rating: "4.4", image: "https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-1920x1080.jpg" },
//     { name: "Austria", rating: "4.3", image: "https://images.alphacoders.com/742/742584.jpg" },
//     { name: "Georgia", rating: "4.8", image: "https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg" },
//     { name: "Bali", rating: "4.4", image: "https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-1920x1080.jpg" },
//     { name: "Austria", rating: "4.3", image: "https://images.alphacoders.com/742/742584.jpg" },
//     { name: "Georgia", rating: "4.8", image: "https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg" },
//     { name: "Bali", rating: "4.4", image: "https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-1920x1080.jpg" },
//     { name: "Austria", rating: "4.3", image: "https://images.alphacoders.com/742/742584.jpg" },
//     { name: "Georgia", rating: "4.8", image: "https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg" },
//     { name: "Bali", rating: "4.4", image: "https://www.hdwallpapers.in/download/temple_in_water_with_reflection_bali_indonesia_pura_ulun_danu_bratan_during_sunset_hd_travel-1920x1080.jpg" },


// ];


const destinations = [
  {
    name: "Dubai",
    rating: "5.0",
    image: "Dubai Images/city-3161105_1920.jpg",
    url: "Dubai-Packages.html"
  },
  {
    name: "Vietnam",
    rating: "4.8",
    image: "Vietnam-images/Depositphotos_97029492_L.jpg",
    url: "vietnam-Packages.html"
  },
  {
    name: "Armenia",
    rating: "4.9",
    image: "Armenia-images/armenia 1.jpg",
    url: "Armenia-packages.html"
  },

  {
    name: "Kenya",
    rating: "4.2",
    image: "Kenya-images/Depositphotos_17643137_L.jpg",
    url: "kenya-packages.html"
  },
  {
    name: "Maldives",
    rating: "4.8",
    image: "Maldives-images/Depositphotos_10094269_L (1).jpg",
    url: "Maldives-packages.html"
  },
  {
    name: "Georgia",
    rating: "4.7",
    image: "Georgia-images/mostafa-meraji-b0GGTup0Ar4-unsplash.jpg",
    url: "Georgia-packages.html"
  },

  {
    name: "Bali",
    rating: "5.0",
    image: "Bali-images/Depositphotos_3587328_L.jpg",
    url: "Bali-packages.html"
  },
  {
    name: "Azerbaijan",
    rating: "4.8",
    image: "Azerbaijan-images/architectural-design-architectural-detail-architecture-2716795.jpg",
    url: "Azerbaijan-packages.html"
  },
  {
    name: "Turkey",
    rating: "4.4",
    image: "Turkey-images/Depositphotos_116860468_L.jpg",
    url: "Turkey-packages.html"
  },



  {
    name: "Morocco",
    rating: "4.3",
    image: "Morocco-images/Depositphotos_23937101_L.jpg",
    url: "morocco-packages.html"
  },
  {
    name: "Kazakhstan",
    rating: "4.9",
    image: "Kazakhstan-packages-list/Kazakhstan-images/20241104123103_2.jpg",
    url: "Kazakhstan-packages.html"
  },
  {
    name: "Jordan",
    rating: "4.7",
    image: "Jordan-packages-list/Jordan-images/20240302100402_Jordaniti2.jpg",
    url: "Jordan-packages.html"
  },
  {
    name: "Thailand",
    rating: "4.9",
    image: "Thailand-images/Depositphotos_22781274_L.jpg",
    url: "Thailand-packages.html"
  },
  {
    name: "Sri Lanka ",
    rating: "4.2",
    image: "Srilanka-images/dambulla-2516649_1920.jpg",
    url: "Srilanka-packages.html"
  },
  {
    name: "Kyrgyzstan",
    rating: "4.9",
    image: "Kyrgyzstan-packages-list/Kyrgyzstan-images/20250428082756_KyrgyzstannewItinerary8 (1).jpg",
    url: "Kyrgyzstan-packages.html"
  },
  {
    name: "Uzbekistan",
    rating: "4.8",
    image: "Uzbekistan-packages-list/Uzbekistan-images/20220921142611_Pb_Scandinaviaiti4.jpg",
    url: "Uzbekistan-packages.html"
  },
  {
    name: "Egypt",
    rating: "4.3",
    image: "Egypt-packages-list/Egypt-images/Depositphotos_86960092_L.jpg",
    url: "Egypt-packages.html"
  },
  {
    name: "Malaysia",
    rating: "4.5",
    image: "Malaysia-packages-list/Malaysia-images/Depositphotos_4749897_L.jpg",
    url: "Malaysia-packages.html"
  },
  {
    name: "Singapore ",
    rating: "4.7",
    image: "Singapore-packages-list/Singapore-images/Depositphotos_312559308_L.jpg",
    url: "Singapore-packages.html"
  },
  //     {
  //   name: "Georgia",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "Georgia-packages.html"
  // },
  //     {
  //   name: "kenya",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "kenya-packages.html"
  // },
  //     {
  //   name: "Armenia",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "Armenia-packages.html"
  // },
  {
    name: "japan",
    rating: "4.9",
    image: "Japan-images/Depositphotos_8607019_L.jpg",
    url: "japan-packages.html"
  },
  //     {
  //   name: "Indonesia",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "Indonesia-packages.html"
  // },
  {
    name: "India",
    rating: "4.9",
    image: "India-packages-list/India-images/Depositphotos_7932088_L.jpg",
    url: "india-packages.html"
  },
  //     {
  //   name: "Azerbaijan",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "Azerbaijan-packages.html"
  // },
  {
    name: "croatia",
    rating: "4.7",
    image: "croatia-packages-list/Croatia-images/20220620022236_Pb_CroatiaIti11.jpg",
    url: "croatia-packages.html"
  },
  {
    name: "greece",
    rating: "4.6",
    image: "Greece-packages-list/Greece-images/20220620074417_Pb_GreeceIti8.jpg",
    url: "greece-packages.html"
  },
  {
    name: "prague",
    rating: "4.1",
    image: "Prague-packages-list/Prague-images/Depositphotos_47797195_L.jpg",
    url: "prague-packages.html"
  },
  //       {
  //   name: "moroco",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "morocco-packages.html"
  // },
  {
    name: "united arab emirates",
    rating: "4.9",
    image: "Dubai Images/city-3161105_1920.jpg",
    url: "uae-packages.html"
  },
  {
    name: "switzerland",
    rating: "4.7",
    image: "switzerland-packages-list/Switzerland-images/Depositphotos_213220710_L.jpg",
    url: "switzerland-packages.html"
  },
  {
    name: "scandinavia",
    rating: "4.5",
    image: "scandinavia-packages-list/Scandinavia-images/20220921142249_Us_Scandinaviaiti.jpg",
    url: "scandinavia-packages.html"
  },
  {
    name: "seychelles",
    rating: "4.6",
    image: "seychelles-packages-list/Seychelles-images/20241114083248_SEYCHELLESgalary3.jpg",
    url: "seychelles-packages.html"
  },
  {
    name: "south africa",
    rating: "4.1",
    image: "Southafrica-packages-list/Southafrica-images/Depositphotos_13890331_L.jpg",
    url: "southafrica-packages.html"
  },
  {
    name: "saudi arabia",
    rating: "4.9",
    image: "Saudi-arabia-packages-list/Saudiarabia-images/20230107051803_Pb_SaudiRiyadhIti4.jpg",
    url: "saudiarabia-packages.html"
  },

  // ... add url for each
];


function renderDestinations(data) {
  const container = document.getElementById("destinationGrid");
  container.innerHTML = "";

  data.forEach(dest => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" />
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