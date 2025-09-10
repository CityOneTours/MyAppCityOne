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
  // { title: 'Switzerland', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg', link: 'Dubai-packagess/Dubai-packages-two.html' },
  // { title: 'Greece', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  // { title: 'Thailand', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  // { title: 'Maldives', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  // { title: 'Japan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  // { title: 'Turkey', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },



  { title: 'Dubai city tour', themes: ['Luxury', 'Honey Moon', 'Family With Kids'], price: 4499, duration: 8, country: 'Dubai', img: 'Dubai Images/dubai-2057583_1920.jpg', link: 'Dubai-packagess/Dubai-packages-one.html' },
  { title: 'Museum of the Future', themes: ['Adventure', 'Family With Kids'], price: 4279, duration: 5, country: 'Dubai', img: 'Dubai Images/the-palm-962785_1920.jpg', link: 'Dubai-packagess/Dubai-packages-three.html' },
  { title: 'Vietnam At Glimpse', themes: ['Honey Moon', 'Adventure', 'Family With Kids'], price: 2699, country: 'Vietnam', duration: 6, country: 'Vietnam', img: 'Vietnam-images/Depositphotos_66882175_L.jpg', link: 'Vietnam-packages-list/Vietnam-one.html' },
  { title: 'Armenia', themes: ['Honey Moon', 'Luxury'], price: 1682, country: 'Armenia', duration: 5, img: 'Armenia-images/1.jpeg', link: 'Armenia-packages-list/Armenia-one.html' },
  { title: 'Armenia', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 2500, country: 'Armenia', duration: 7, img: 'Armenia-images/armenia 1.jpg', link: 'Armenia-packages-list/Armenia-Four.html' },
  { title: 'kenya - Mara Safari', themes: ['Adventure', 'Family With Kids'], price: 2830, duration: 4, country: 'Kenya', img: 'Kenya-images/Depositphotos_294059094_L.jpg', link: 'Kenya-packages-list/Kenya-one.html' },
  { title: 'Maldives-Package', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 7680, duration: 5, country: 'Maldives', img: 'Maldives-images/maldives-1991877_1920.jpg', link: 'Maldives-packages-list/Maldives-two.html' },

  { title: 'Explore Georgia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1625, duration: 6, country: ' Georgia', img: 'Georgia-images/giorgi-gvilava-ZTTjG9CS0c0-unsplash.jpg', link: 'Georgia-packages-list/Georgia-two.html' },
  { title: 'Georgia - Tbilisi With Bakuriani', themes: ['Adventure', 'Honey Moon',], price: 1685, duration: 6, country: 'Georgia', img: 'Georgia-images/georgia-3706946_1920.jpg', link: 'Georgia-packages-list/Georgia-four.html' },
  { title: 'Romantic Bali', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 1250, country: 'Bali', duration: 4, country: 'Bali', img: 'Bali-images/BALI 1.jpeg', link: 'Bali-packages-list/Bali-one.html' },
  { title: 'Exotic Bali - Villa Stay', themes: ['Honey Moon', 'Luxury', 'Family With Kids'], price: 1730, country: 'Bali', duration: 5, country: 'Bali', img: 'Bali-images/Depositphotos_48098009_L.jpg', link: 'Bali-packages-list/Bali-three.html' },
  { title: 'Explore Azerbaijan', themes: ['Adventure', 'Luxury', 'Family With Kids'], price: 3350, duration: 5, country: 'Azerbaijan', img: 'Azerbaijan-images/Baku-Boulevar-Caspian-1024x509.jpg', link: 'Azerbaijan-packages-list/Azerbaijan-one.html' },
  { title: 'Baku', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1260, duration: 5, country: 'Azerbaijan', img: 'Azerbaijan-images/xan satayi.jpg', link: 'Azerbaijan-packages-list/Azerbaijan-four.html' },




  { title: 'Turkey', themes: ['Family With Kids', 'Luxury', 'Honey Moon'], price: 1500, duration: 4, country: 'Turkey', img: 'Turkey-images/Depositphotos_198370150_L.jpg',  link: 'Turkey-packages-list/Turkey-three.html' },
  { title: 'Turkey', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3499, duration: 6, country: 'Turkey', img: 'Turkey-images/Depositphotos_94671008_L.jpg', link: 'Turkey-packages-list/Turkey-four.html' },
  { title: 'Discovery Of Morocco', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 4980, duration: 5, country: 'Morocco', img: 'Morocco-images/Depositphotos_25885511_L.jpg', link: 'Morocco-packages-list/Morocco-two.html' },
  { title: 'Kazakhstan Packages', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 2499, duration: 5, country: 'Kazakhstan', img: 'Kazakhstan-packages-list/Kazakhstan-images/20241104122907_5.jpg', link: 'Kazakhstan-packages-list/Kazakhstan-one.html' },
  // { title: 'Kazakhstan- Budget Friendly', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1260, duration: 5, country: 'Azerbaijan', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg', link: 'Azerbaijan-packages-list/Azerbaijan-packages-four.html' },
  { title: 'Jordan Treasures', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1500, duration: 5, country: 'Jordan', img: 'Jordan-packages-list/Jordan-images/20240302102151_JordanGal1 (4).jpg', link: 'Jordan-packages-list/Jordan-one.html' },
  { title: 'Vibrant Thailand', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 2699, duration: 5, country: 'Thailand', img: 'Thailand-images/Depositphotos_175352566_L.jpg', link: 'Thailand-packages-list/Thailand-packages-one.html' },
  { title: 'Thailand', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1450, duration: 4, country: 'Thailand', img: 'Thailand-images/Depositphotos_125593530_L.jpg', link: 'Thailand-packages-list/Thailand-four.html' },
  { title: 'Amazing Sri Lanka', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 4020, duration: 14, country: 'Sri Lanka', img: 'Srilanka-images/stairs-3215722_1920.jpg', link: 'Srilanka-packages-list/Srilanka-four.html' },
  { title: 'Wonders of Sri Lanka', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 2250, duration: 8, country: 'Sri Lanka', img: 'Srilanka-images/sri-lanka-289803_1920.jpg', link: 'Srilanka-packages-list/Srilanka-two.html' },
  { title: 'Sri Lanka', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1985, duration: 6, country: 'Sri Lanka', img: 'Srilanka-images/dambulla-1024350_1920.jpg', link: 'Srilanka-packages-list/Srilanka-one.html' },
  { title: 'kyrgyzstan', themes: ['Adventure', 'Family with kids', 'Honey Moon'], price: 2070, duration: 4, country: 'Kyrgyzstan', img: 'Kyrgyzstan-packages-list/Kyrgyzstan-images/20250428082734_KyrgyzstannewItinerary7.jpg', link: 'kyrgyzstan-packages-list/kyrgyzstan-one.html' },
  { title: 'Kyrgystan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3195, duration: 7, country: 'Kyrgystan', img: 'Kyrgyzstan-packages-list/Kyrgyzstan-images/20250428163923_Kyrgyzstannewgallery3.jpg', link: 'Kyrgystan-packages-list/Kyrgystan-tthree.html' },
  { title: 'Uzbekistan Budget Friendly', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1599, duration: 5, country: 'Uzbekistan ', img: 'Uzbekistan-packages-list/Uzbekistan-images/20241104111907_Uzbekistan Itineraries 1.jpg', link: 'Uzbekistan -packages-list/Uzbekistan-one.html' },
  { title: 'Uzbekistan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 3340, duration: 7, country: 'Uzbekistan', img: 'Uzbekistan-packages-list/Uzbekistan-images/20250429181921_Uzbakistannewgallery5.jpg', link: 'Uzbekistan-packages-list/Uzbekistan-four.html' },
  { title: 'Egypt-Exclusive Cairo', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1530, duration: 4, country: 'Egypt-Exclusive Cairo', img: 'Egypt-packages-list/Egypt-images/Depositphotos_2446172_L.jpg', link: 'Egypt-packages-list/Egypt-one.html' },
  { title: 'Cairo with Nile Cruise', themes: ['Family with kids', 'Luxury', 'Honey Moon'], price: 3799, duration: 7, country: 'Egypt', img: 'Egypt-packages-list/Egypt-images/Depositphotos_23268152_L.jpg', link: 'Egypt-packages-list/Egypt-three.html' },
  { title: 'Malaysia', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1200, duration: 5, country: 'Malaysia', img: 'Malaysia-packages-list/Malaysia-images/Depositphotos_5477401_L.jpg', link: 'Malaysia-packages-list/Malaysia-one.html' },
  { title: 'Malaysia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1196, duration: 6, country: 'Malaysia', img: 'Malaysia-packages-list/Malaysia-images/Depositphotos_62769361_L.jpg', link: 'Malaysia-packages-list/Malaysia-three.html' },
  { title: 'Best of Singapore', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 2100, duration: 5, country: 'Singapore', img: 'Singapore-packages-list/Singapore-images/sc1.jpg', link: 'Singapore-packages-list/Singapore-four.html' },
  { title: 'Marvellous Japan Tour', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 1599, duration: 6, country: 'Japan', img: 'Japan-images/Depositphotos_8607019_L.jpg', link: 'Japan-packages-list/Japan-one.html' },
  { title: 'India-Eastern Delight', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1720, duration: 8, country: 'India', img: 'India-packages-list/India-images/Depositphotos_1940059_L.jpg', link: 'India-packages-list/India-one.html' },
  { title: 'Gods Own Kerala', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 1620, duration: 9, country: 'India', img: 'India-packages-list/India-images/Depositphotos_45916055_L.jpg', link: 'India-packages-list/India-three.html' },
  { title: 'Croatia_Adventure', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 7260, duration: 8, country: 'Croatia', img: 'croatia-packages-list/Croatia-images/20220619095455_Px_CroatiaGallery4.jpg', link: 'Croatia-packages-list/Croatia-one.html' },
  { title: 'Croatia_Zagreb – Split', themes: ['Adventure', 'Luxury', 'Family with kids'], price: 5650, duration: 7, country: 'Croatia', img: 'croatia-packages-list/Croatia-images/20220620021437_Pb_CroatiaListing3.jpg', link: 'Croatia-packages-list/Croatia-three.html' },
  { title: 'Greece_Athens ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 1840, duration: 4, country: 'Greece', img: 'Greece-packages-list/Greece-images/20220620074110_Pb_GreeceIti5.jpg', link: 'Greece-packages-list/Greece-one.html' },

  { title: 'Greece_Athens – Mykonos ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 5190, duration: 7, country: 'Greece', img: 'Greece-packages-list/Greece-images/20220620062310_Pb_GreeceIti3.jpg', link: 'Greece-packages-list/Greece-two.html' },
  { title: 'Prague ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 3460, duration: 4, country: 'Prague', img: 'Prague-packages-list/Prague-images/Depositphotos_147890251_L.jpg', link: 'Prague-packages-list/Prague-two.html' },
  { title: 'Swiss Capitals ', themes: ['Adventure', 'Honey Moon', 'Family with kids'], price: 3420, duration: 5, country: 'switzerland', img: 'switzerland-packages-list/Switzerland-images/Depositphotos_58674555_XL.jpg', link: 'switzerland-packages-list/switzerland-one.html' },
  { title: 'Swiss Escape ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 4630, duration: 8, country: 'switzerland', img: 'switzerland-packages-list/Switzerland-images/Depositphotos_186726252_L.jpg', link: 'switzerland-packages-list/switzerland-two.html' },
  { title: 'Jewels of Scandinavia ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3000, duration: 5, country: 'Scandinavia', img: 'scandinavia-packages-list/Scandinavia-images/20220921142647_Pb_Scandinaviaiti5.jpg', link: 'Scandinavia-packages-list/Scandinavia-one.html' },
  { title: 'Scandinavia ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 9049, duration: 7, country: 'Scandinavia', img: 'scandinavia-packages-list/Scandinavia-images/20220925084428_Px_LaplandGallery3.jpg', link: 'Scandinavia-packages-list/Scandinavia-three.html' },

  { title: 'seychelles ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3140, duration: 4, country: 'seychelles', img: 'seychelles-packages-list/Seychelles-images/20241114082753_Seychellesitineraries4.jpg', link: 'seychelles-packages-list/seychelles-one.html' },
  { title: 'South African Wonders ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 6990, duration: 11, country: 'South african', img: 'Southafrica-packages-list/Southafrica-images/Depositphotos_7343452_L.jpg', link: 'Southafrican-packages-list/seychelles-one.html' },
  { title: 'Highlights of South Africa ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 4480, duration: 6, country: 'South african', img: 'Southafrica-packages-list/Southafrica-images/Depositphotos_440541168_L.jpg', link: 'Southafrican-packages-list/seychelles-two.html' },
  { title: 'Jeddah - Bride of the Red Sea ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 3130, duration: 4, country: 'saudi arabia', img: 'Saudi-arabia-packages-list/Saudiarabia-images/20230106040705_Pb_SaudiIti2.jpg', link: 'saudiarabia-packages-list/saudiarabia-one.html' },
  { title: 'Tale of Two cities ', themes: ['Luxury', 'Honey Moon', 'Family with kids'], price: 5550, duration: 6, country: 'saudi arabia', img: 'Saudi-arabia-packages-list/Saudiarabia-images/20230107051803_Pb_SaudiRiyadhIti4.jpg', link: 'saudiarabia-packages-list/saudiarabia-three.html' },




];

const container = document.getElementById('packageContainer');

function renderCards(data) {
  container.innerHTML = '';
  data.forEach(pkg => {
    container.innerHTML += `
      <a href="${pkg.link}" class="card-link" style="text-decoration: none; color: inherit;">
        <div class="card">
          <img src="${pkg.img}" alt="${pkg.title}" />
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
              <p><strong>Price:</strong> <span class="price">AED ${pkg.price}</span></p>
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
  alert("Thank you! We'll contact you shortly.");
  closePopup();
}
