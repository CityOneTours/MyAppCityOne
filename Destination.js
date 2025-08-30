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
    image: "https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg",
    url: "Dubai-Packages.html"
  },
  {
    name: "Vietnam",
    rating: "4.8",
    image: "https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg",
    url: "vietnam-Packages.html"
  },
  {
    name: "Armenia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Armenia-packages.html"
  },

    {
    name: "Kenya",
    rating: "5.0",
    image: "https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg",
    url: "kenya-packages.html"
  },
  {
    name: "Maldives",
    rating: "4.8",
    image: "https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg",
    url: "Maldives-packages.html"
  },
  {
    name: "Georgia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Georgia-packages.html"
  },

    {
    name: "Bali",
    rating: "5.0",
    image: "https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg",
    url: "Bali-packages.html"
  },
  {
    name: "Azerbaijan",
    rating: "4.8", 
    image: "https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg",
    url: "Azerbaijan-packages.html"
  },
  {
    name: "Turkey",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Turkey-packages.html"
  },



    {
    name: "Morocco",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "morocco-packages.html"
  },
    {
    name: "Kazakhstan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Kazakhstan-packages.html"
  },
    {
    name: "Jordan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Jordan-packages.html"
  },
    {
    name: "Thailand",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Thailand-packages.html"
  },
    {
    name: "Sri Lanka ",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Srilanka-packages.html"
  },
    {
    name: "Kyrgystan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Kyrgystan-packages.html"
  },
    {
    name: "Uzbekistan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Uzbekistan-packages.html"
  },
    {
    name: "Egypt",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Egypt-packages.html"
  },
    {
    name: "Malaysia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Malaysia-packages.html"
  },
      {
    name: "Singapore ",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Singapore-packages.html"
  },
      {
    name: "Georgia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Georgia-packages.html"
  },
      {
    name: "kenya",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "kenya-packages.html"
  },
  //     {
  //   name: "Armenia",
  //   rating: "4.9",
  //   image: "https://wallpapercave.com/wp/wp2292388.jpg",
  //   url: "Armenia-packages.html"
  // },
      {
    name: "japan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
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
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "india-packages.html"
  },
      {
    name: "Azerbaijan",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "Azerbaijan-packages.html"
  },
      {
    name: "croatia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "croatia-packages.html"
  },
        {
    name: "greece",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "greece-packages.html"
  },
        {
    name: "prague",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "prague-packages.html"
  },
        {
    name: "moroco",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "morocco-packages.html"
  },
        {
    name: "united arab emirates",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "uae-packages.html"
  },
        {
    name: "switzerland",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "switzerland-packages.html"
  },
        {
    name: "scandinavia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "scandinavia-packages.html"
  },
        {
    name: "seychelles",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "seychelles-packages.html"
  },
        {
    name: "south africa",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "southafrica-packages.html"
  },
        {
    name: "saudi arabia",
    rating: "4.9",
    image: "https://wallpapercave.com/wp/wp2292388.jpg",
    url: "saudiarabia-packages.html"
  },
     
  // ... add `url` for each
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



const monthData = {
    Jan: [
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Dubai' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Egypt' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Bali' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Bali' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Bali' },

        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Bali' },

        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Bali' },

    ],
    Feb: [
        { image: 'https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg', country: 'Thailand' },
        { image: 'https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg', country: 'UAE' },
        { image: 'https://www.baltana.com/files/wallpapers-29/Georgia-Country-Skyline-Wallpaper-95759.jpg', country: 'Sri Lanka' },
    ],
    Mar: [
        { image: 'https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg', country: 'Turkey' },
        { image: 'https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg', country: 'Italy' },
        { image: 'https://discoveryourvietnam.com/wp-content/uploads/2022/10/Trang_An_Boat_Trip.jpg', country: 'Kenya' },
    ],
    Apr: [
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Japan' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'Vietnam' },
        { image: 'https://www.setaswall.com/wp-content/uploads/2017/03/Burj-Al-Arab-Dubai-UAE-Wallpaper-1600x1200.jpg', country: 'France' },
    ],
    May: [
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'Maldives' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Switzerland' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Indonesia' },
    ],
    Jun: [
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Singapore' },
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'Malaysia' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'UK' },
    ],
    Jul: [
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Dubai' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Sri Lanka' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Dubai' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Sri Lanka' },
    ],
    Aug: [
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Greece' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Jordan' },
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'USA' },
    ],
    Sep: [
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'Canada' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Mexico' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Brazil' },
    ],
    Oct: [
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'New Zealand' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Australia' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Chile' },
    ],
    Nov: [
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'Spain' },
        { image: 'https://i.imgur.com/6oKfFvY.jpeg', country: 'Portugal' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Morocco' },
    ],
    Dec: [
        { image: 'https://i.imgur.com/NOW5n9Y.jpeg', country: 'Finland' },
        { image: 'https://i.imgur.com/8R8hKHQ.jpeg', country: 'Russia' },
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
        cardEl.className = 'card';
        cardEl.innerHTML = `
          <img src="${card.image}" alt="${card.country}" />
          <div class="country-name">${card.country}</div>
        `;
        cardContainer.appendChild(cardEl);
    });
}

// Initial load for July
loadCards('Jul');



document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbList = document.getElementById("dynamicBreadcrumb");
    const pathArray = window.location.pathname.split("/").filter(Boolean);

    const baseURL = window.location.origin;
    let path = "";
    const homeItem = `<li><a href="${baseURL}/index.html">Home</a></li>`;
    breadcrumbList.innerHTML += homeItem;

    for (let i = 0; i < pathArray.length; i++) {
      path += "/" + pathArray[i];
      const name = decodeURIComponent(pathArray[i])
        .replace(/-/g, " ")
        .replace(".html", "")
        .replace(/\b\w/g, l => l.toUpperCase());

      if (i === pathArray.length - 1) {
        breadcrumbList.innerHTML += `<li class="active">${name}</li>`;
      } else {
        breadcrumbList.innerHTML += `<li><a href="${baseURL}${path}">${name}</a></li>`;
      }
    }
  });