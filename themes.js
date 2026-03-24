function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

const packages = [




  // { title: 'Dubai', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  // { title: 'Bali', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg', },
  // { title: 'Switzerland', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg', link: 'dubai-packages/dubai-4-days-itinerary.html' },
  // { title: 'Greece', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  // { title: 'Thailand', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  // { title: 'Maldives', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  // { title: 'Japan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  // { title: 'Turkey', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },



  { title: 'Dubai city tour', themes: ['Luxury', 'Honey Moon', 'Family With Kids'], price: 4499, duration: 8, country: 'Dubai', img: 'Dubai Images/dubai-2057583_1920.webp', link: 'dubai-packages/dubai-city-tour-package.html' },
  { title: 'Museum of the Future', themes: ['Adventure', 'Family With Kids'], price: 4279, duration: 5, country: 'Dubai', img: 'Dubai Images/the-palm-962785_1920.webp', link: 'dubai-packages/dubai-desert-safari-city-tour.html' },
  { title: 'Vietnam At Glimpse', themes: ['Honey Moon', 'Adventure', 'Family With Kids'], price: 2699, country: 'Vietnam', duration: 6, country: 'Vietnam', img: 'Vietnam-images/Depositphotos_66882175_L.webp', link: 'Vietnam-Packages-List/Vietnam-one.html' },
  { title: 'Armenia', themes: ['Honey Moon', 'Luxury'], price: 1682, country: 'Armenia', duration: 5, img: 'Armenia-images/1.webp', link: 'armenia-packages-list/yerevan-garni-geghard-tour.html' },
  { title: 'Armenia', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 2500, country: 'Armenia', duration: 7, img: 'Armenia-images/armenia 1.webp', link: 'armenia-packages-list/yerevan-dilijan-lake-sevan-tsaghkadzor-tour.html' },
  { title: 'kenya - Mara Safari', themes: ['Adventure', 'Family With Kids'], price: 2830, duration: 4, country: 'Kenya', img: 'Kenya-images/Depositphotos_294059094_L.webp', link: 'kenya-tour-Packages-list/masai-mara-safari-tour.html' },
  { title: 'Maldives-Package', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 7680, duration: 5, country: 'Maldives', img: 'Maldives-images/maldives-1991877_1920.webp', link: 'maldives-tour-Packages-list/maldives-all-inclusive-package.html' },

  { title: 'Explore Georgia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 920, duration: 6, country: ' Georgia', img: 'Georgia-images/giorgi-gvilava-ZTTjG9CS0c0-unsplash.webp', link: 'georgia-packages-list/tbilisi-gudauri-tour.html' },
  { title: 'Georgia - Tbilisi With Bakuriani', themes: ['Adventure', 'Honey Moon',], price: 1685, duration: 6, country: 'Georgia', img: 'Georgia-images/georgia-3706946_1920.webp', link: 'georgia-packages-list/tbilisi-kazbegi-tour.html' },
  { title: 'Romantic Bali', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 1250, country: 'Bali', duration: 4, country: 'Bali', img: 'Bali-images/BALI 1.webp', link: 'bali-tour-packages-list/bali-honeymoon-package.html' },
  { title: 'Exotic Bali - Villa Stay', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 1730, country: 'Bali', duration: 5, country: 'Bali', img: 'Bali-images/Depositphotos_48098009_L.webp', link: 'bali-tour-packages-list/bali-family-tour.html' },
  { title: 'Explore Azerbaijan', themes: ['Adventure', 'Luxury', 'Family With Kids'], price: 3350, duration: 5, country: 'Azerbaijan', img: 'Azerbaijan-images/Baku-Boulevar-Caspian-1024x509.webp', link: 'azerbaijan-tour-packages-list/baku-city-tour.html' },
  { title: 'Baku', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1260, duration: 5, country: 'Azerbaijan', img: 'Azerbaijan-images/xan satayi.webp', link: 'azerbaijan-tour-packages-list/baku-shahdag-tour.html' },




  { title: 'Turkey', themes: ['Family With Kids', 'Luxury', 'Honey Moon'], price: 1500, duration: 4, country: 'Turkey', img: 'Turkey-images/Depositphotos_198370150_L.webp',  link: 'Turkey-packages-list/Turkey-three.html' },
  { title: 'Turkey', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3499, duration: 6, country: 'Turkey', img: 'Turkey-images/Depositphotos_94671008_L.webp', link: 'Turkey-packages-list/Turkey-four.html' },
  { title: 'Discovery Of Morocco', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 4980, duration: 5, country: 'Morocco', img: 'Morocco-images/Depositphotos_25885511_L.webp', link: 'morocco-packages-list/casablanca-fes-marrakech-tour.html' },
  { title: 'Kazakhstan Packages', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 2499, duration: 5, country: 'Kazakhstan', img: 'kazakhstan-tour-packages-list/Kazakhstan-images/20241104122907_5.webp', link: 'kazakhstan-tour-packages-list/almaty-city-tour.html' },
  // { title: 'Kazakhstan- Budget Friendly', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1260, duration: 5, country: 'Azerbaijan', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg', link: 'azerbaijan-tour-packages-list/Azerbaijan-packages-four.html' },
  { title: 'Jordan Treasures', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1500, duration: 5, country: 'Jordan', img: 'jordan-tour-packages-list/Jordan-images/20240302102151_JordanGal1 (4).webp', link: 'jordan-tour-packages-list/petra-dead-sea-tour.html' },
  { title: 'Vibrant Thailand', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 2699, duration: 5, country: 'Thailand', img: 'Thailand-images/Depositphotos_175352566_L.webp', link: 'Thailand-packages-list/Thailand-one.html' },
  { title: 'Thailand', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1450, duration: 4, country: 'Thailand', img: 'Thailand-images/Depositphotos_125593530_L.webp', link: 'Thailand-packages-list/Thailand-four.html' },
  { title: 'Amazing Sri Lanka', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 4020, duration: 14, country: 'Sri Lanka', img: 'Srilanka-images/stairs-3215722_1920.webp', link: 'Srilanka-packages-list/Srilanka-three.html' },
  { title: 'Wonders of Sri Lanka', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 2250, duration: 8, country: 'Sri Lanka', img: 'Srilanka-images/sri-lanka-289803_1920.webp', link: 'Srilanka-packages-list/Srilanka-two.html' },
  { title: 'Sri Lanka', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1985, duration: 6, country: 'Sri Lanka', img: 'Srilanka-images/dambulla-1024350_1920.webp', link: 'Srilanka-packages-list/Srilanka-four.html' },
  { title: 'kyrgyzstan', themes: ['Adventure', 'Family with kids', 'Honey Moon'], price: 2070, duration: 4, country: 'Kyrgyzstan', img: 'kyrgyzstan-tour-packages-list/Kyrgyzstan-images/20250428082734_KyrgyzstannewItinerary7.webp', link: 'kyrgyzstan-tour-packages-list/Kyrgyzstan-one.html' },
  { title: 'Kyrgystan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3195, duration: 7, country: 'Kyrgystan', img: 'kyrgyzstan-tour-packages-list/Kyrgyzstan-images/20250428163923_Kyrgyzstannewgallery3.webp', link: 'kyrgyzstan-tour-packages-list/Kyrgyzstan-three.html' },
  { title: 'Uzbekistan Budget Friendly', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1599, duration: 5, country: 'Uzbekistan ', img: 'Uzbekistan-packages-list/Uzbekistan-images/20241104111907_Uzbekistan Itineraries 1.webp', link: 'Uzbekistan-packages-list/Uzbekistan-one.html' },
  { title: 'Uzbekistan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3340, duration: 7, country: 'Uzbekistan', img: 'Uzbekistan-packages-list/Uzbekistan-images/20250429181921_Uzbakistannewgallery5.webp', link: 'Uzbekistan-packages-list/Uzbekistan-four.html' },
  { title: 'Egypt-Exclusive Cairo', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1530, duration: 4, country: 'Egypt-Exclusive Cairo', img: 'egypt-tour-packages-list/Egypt-images/Depositphotos_2446172_L.webp', link: 'egypt-tour-packages-list/cairo-pyramids-tour.html' },
  { title: 'Cairo with Nile Cruise', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 3799, duration: 7, country: 'Egypt', img: 'egypt-tour-packages-list/Egypt-images/Depositphotos_23268152_L.webp', link: 'egypt-tour-packages-list/cairo-luxor-aswan-tour.html' },
  { title: 'Malaysia', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1200, duration: 5, country: 'Malaysia', img: 'malaysia-packages-list/Malaysia-images/Depositphotos_5477401_L.webp', link: 'malaysia-packages-list/kuala-lumpur-langkawi-tour.html' },
  { title: 'Malaysia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1196, duration: 6, country: 'Malaysia', img: 'malaysia-packages-list/Malaysia-images/Depositphotos_62769361_L.webp', link: 'malaysia-packages-list/kuala-lumpur-langkawi-genting-tour.html' },
  { title: 'Best of Singapore', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 2100, duration: 5, country: 'Singapore', img: '../Singapore-packages-list/Singapore-images/sc4.webp', link: 'Singapore-packages-list/Singapore-one.html' },
  { title: 'Marvellous Japan Tour', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1599, duration: 6, country: 'Japan', img: 'Japan-images/Depositphotos_8607019_L.webp', link: 'japan-packages-list/tokyo-osaka-kyoto-tour.html' },
  { title: 'India-Eastern Delight', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1720, duration: 8, country: 'India', img: 'india-tour-packages-list/India-images/Depositphotos_1940059_L.webp', link: 'india-tour-packages-list/delhi-agra-tour.html' },
  { title: 'Gods Own Kerala', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1620, duration: 9, country: 'India', img: 'india-tour-packages-list/India-images/Depositphotos_45916055_L.webp', link: 'india-tour-packages-list/delhi-agra-jaipur-tour.html' },
  { title: 'Croatia_Adventure', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 7260, duration: 8, country: 'Croatia', img: 'croatia-packages-list/Croatia-images/20220619095455_Px_CroatiaGallery4.webp', link: 'croatia-packages-list/dubrovnik-split-tour.html' },
  { title: 'Croatia_Zagreb – Split', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 5650, duration: 7, country: 'Croatia', img: 'croatia-packages-list/Croatia-images/20220620021437_Pb_CroatiaListing3.webp', link: 'croatia-packages-list/dubrovnik-split-hvar-tour.html' },
  { title: 'Greece_Athens ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 1840, duration: 4, country: 'Greece', img: 'greece-tour-packages-list/Greece-images/20220620074110_Pb_GreeceIti5.webp', link: 'greece-tour-packages-list/athens-santorini-tour.html' },

  { title: 'Greece_Athens – Mykonos ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 5190, duration: 7, country: 'Greece', img: 'greece-tour-packages-list/Greece-images/20220620062310_Pb_GreeceIti3.webp', link: 'greece-tour-packages-list/athens-mykonos-santorini-tour.html' },
  { title: 'Prague ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 3460, duration: 4, country: 'Prague', img: 'prague-tour-packages-list/Prague-images/Depositphotos_147890251_L.webp', link: 'prague-tour-packages-list/Prague-one.html' },
  { title: 'Swiss Capitals ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 3420, duration: 5, country: 'switzerland', img: 'switzerland-packages-list/Switzerland-images/Depositphotos_58674555_XL.webp', link: 'switzerland-packages-list/switzerland-one.html' },
  { title: 'Swiss Escape ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 4630, duration: 8, country: 'switzerland', img: 'switzerland-packages-list/Switzerland-images/Depositphotos_186726252_L.webp', link: 'switzerland-packages-list/switzerland-two.html' },
  { title: 'Jewels of Scandinavia ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3000, duration: 5, country: 'Scandinavia', img: 'scandinavia-packages-list/Scandinavia-images/20220921142647_Pb_Scandinaviaiti5.webp', link: 'scandinavia-packages-list/scandinavia-one.html' },
  { title: 'Scandinavia ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 9049, duration: 7, country: 'Scandinavia', img: 'scandinavia-packages-list/Scandinavia-images/20220925084428_Px_LaplandGallery3.webp', link: 'scandinavia-packages-list/scandinavia-three.html' },

  { title: 'seychelles ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3140, duration: 4, country: 'seychelles', img: 'seychelles-packages-list/Seychelles-images/20241114082753_Seychellesitineraries4.webp', link: 'seychelles-packages-list/seychelles-one.html' },
  { title: 'South African Wonders ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 6990, duration: 11, country: 'South african', img: 'Southafrica-packages-list/Southafrica-images/Depositphotos_7343452_L.webp', link: 'Southafrica-packages-list/Southafrica-one.html' },
  { title: 'Highlights of South Africa ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 4480, duration: 6, country: 'South african', img: 'Southafrica-packages-list/Southafrica-images/Depositphotos_440541168_L.webp', link: 'Southafrica-packages-list/Southafrica-two.html' },
  { title: 'Jeddah - Bride of the Red Sea ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3130, duration: 4, country: 'saudi arabia', img: 'Saudi-arabia-packages-list/Saudiarabia-images/20230106040705_Pb_SaudiIti2.webp', link: 'Saudi-arabia-packages-list/saudiarabia-one.html' },
  { title: 'Tale of Two cities ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 5550, duration: 6, country: 'saudi arabia', img: 'Saudi-arabia-packages-list/Saudiarabia-images/20230107051803_Pb_SaudiRiyadhIti4.webp', link: 'Saudi-arabia-packages-list/saudiarabia-three.html' },




];

const container = document.getElementById('packageContainer');

function renderCards(data) {
  container.innerHTML = '';
  data.forEach(pkg => {
    container.innerHTML += `
      <a href="${pkg.link}" class="card-link" style="text-decoration: none; color: inherit;">
        <div class="card">
          <img src="${pkg.img}" alt="${pkg.title}" loading="lazy"/>
          <div class="card-body">
            <h3>${pkg.title}</h3>
            <div class="tags">
              ${pkg.themes.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 10px 0;">
              <span>🏨 3*/4*/5* Hotels</span>
              <span>🍳 Breakfast</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 8px 0;">
              <p><strong>Duration:</strong> ${pkg.duration} Days</p>
              <p><strong>Price:</strong>
                 <span class="price-amount" data-aed="${pkg.price}">AED ${pkg.price}</span>
              </p>
            </div>
          </div>
          <div class="card-actions">
            <button class="enquire" onclick="event.preventDefault(); openPopup()">Enquire Now</button>
            <button onclick="event.preventDefault(); window.location.href='${pkg.link}'">View Details</button>
          </div>
        </div>
      </a>
    `;
  });

  // After creating the cards, immediately format them in the saved currency
  if (typeof updateAllPrices === 'function') updateAllPrices();
}




renderCards(packages);

function filterTheme(theme) {
  const filtered = packages.filter(p => p.themes.includes(theme));
  renderCards(filtered);
}

function filterSearch() {
  const val = document.getElementById('searchBox').value.toLowerCase();
  const sorted = [...packages].sort((a, b) => {
    const aMatch = a.country.toLowerCase().startsWith(val) ? -1 : 1;
    const bMatch = b.country.toLowerCase().startsWith(val) ? -1 : 1;
    return aMatch - bMatch;
  });
  renderCards(sorted);
}

function filterPrice(val) {
  if (!val) return renderCards(packages);
  const filtered = packages.filter(p => p.price <= parseInt(val));
  renderCards(filtered);
}

function filterDuration(val) {
  if (!val) return renderCards(packages);
  const filtered = packages.filter(p => p.duration == parseInt(val));
  renderCards(filtered);
}

function openPopup() {
  document.getElementById('popupForm').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupForm').style.display = 'none';
}


function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you! We'll Contact you shortly.");
  closePopup();
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



document.querySelector(".help-btn").addEventListener("click", function () {
  document.querySelector(".help-container").classList.toggle("active");
});




const modal = document.getElementById('enquiryModal');
const btn = document.getElementById('enquiryBtn');
const close = document.querySelector('.close');

btn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
