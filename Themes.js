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



  { title: 'Dubai city tour', themes: ['Adventure', 'Luxury', 'Honey Moon'], price:  4499, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  { title: 'Vietnam', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg', },
  { title: 'Armenia', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg', link: 'Dubai-packagess/Dubai-packages-two.html' },
  { title: 'Bali Escape', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Kenya', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Maldives', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  { title: 'Georgia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },

    { title: 'Azerbaijan', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },
  { title: 'Turkey', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg', },
  { title: 'Morocco', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg', link: 'Dubai-packagess/Dubai-packages-two.html' },
  { title: 'Bali Escape', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Kenya', themes: ['Honey Moon', 'Luxury'], price: 160, country: 'Bali', duration: 6, country: 'Bali', img: 'http://dalinfotour.ru/uploads/26-Pura-Besakih.jpg' },
  { title: 'Maldives', themes: ['Adventure', 'Nature', 'Safari'], price: 140, duration: 7, country: 'Vietnam', img: 'http://makesmarttrips.com/wp-content/uploads/2023/03/Vietnam-Is-Becoming-More-Popular-Among-American-Tourists-Heres-Why.jpg' },
  { title: 'Georgia', themes: ['Adventure', 'Luxury', 'Honey Moon'], price: 140, duration: 5, country: 'Dubai', img: 'https://4.bp.blogspot.com/-XAAQT_6hDbQ/WYwHsXaYj_I/AAAAAAAAAY8/BPvO6ppggr8sLtyzUtx2Gz8mTy4dRT0nACLcBGAs/s1600/Atlantis-the-palm-best-5-places-to-visit-in-Dubai-ammartours.jpg' },

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
