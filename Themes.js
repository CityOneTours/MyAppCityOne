function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

const packages = [
  { title: 'Dubai Fully Loaded', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  { title: 'Vietnam', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  { title: 'Bali Escape', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Bali Escape', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Bali Escape', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Vietnam', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  { title: 'Dubai Fully Loaded', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },




];

const container = document.getElementById('packageContainer');

function renderCards(data) {
  container.innerHTML = '';
  data.forEach(pkg => {
    // Create a URL-friendly page name
    const pageUrl = pkg.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') + '.html';

    container.innerHTML += `
      <a href="${pageUrl}" class="card-link" style="text-decoration: none; color: inherit;">
        <div class="card">
          <img src="${pkg.img}" alt="${pkg.title}" />
          <div class="card-body">
            <h3>${pkg.title}</h3>
            <div class="tags">
              ${pkg.themes.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 10px 0;">
              <span style="display: flex; align-items: center; gap: 6px; font-size: 14px;">
                🏨 3*/4*/5* Hotels
              </span>
              <span style="display: flex; align-items: center; gap: 6px; font-size: 14px;">
                🍳 Breakfast
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 8px 0;">
              <p style="margin: 0;"><strong>Duration:</strong> ${pkg.duration} Days</p>
              <p style="margin: 0;"><strong>Price:</strong> <span class="price">AED ${pkg.price}</span></p>
            </div>
          </div>
          <div class="card-actions">
            <button class="enquire" onclick="event.preventDefault(); openPopup()">Enquire Now</button>
            <button onclick="event.preventDefault(); window.location.href='${pageUrl}'">View Details</button>
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
