function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
    'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
    'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'Dubai', 'UAE', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
    'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
    'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
    'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
    'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const searchInput = document.getElementById('countrySearch');
const dropdown = document.getElementById('dropdown');
const searchButton = document.getElementById('searchButton');

// Function to populate dropdown
function populateDropdown(filteredCountries) {
    dropdown.innerHTML = '';
    filteredCountries.forEach(country => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = country;
        item.addEventListener('click', () => navigateToVisaPage(country));
        dropdown.appendChild(item);
    });
}

// Function to navigate to visa page
function navigateToVisaPage(country) {
    const countrySlug = country.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    window.location.href = `${countrySlug}-visa.html`;
    dropdown.classList.remove('active');
    searchInput.value = '';
}


// Event listeners
searchInput.addEventListener('focus', () => {
    populateDropdown(countries);
    dropdown.classList.add('active');
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query) {
        const filtered = countries.filter(country =>
            country.toLowerCase().includes(query)
        );
        populateDropdown(filtered);
        dropdown.classList.add('active');
    } else {
        populateDropdown(countries);
        dropdown.classList.add('active');
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        dropdown.classList.remove('active');
    }
});

// Search button functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        const matchedCountry = countries.find(country =>
            country.toLowerCase() === query.toLowerCase()
        );
        if (matchedCountry) {
            navigateToVisaPage(matchedCountry);
        } else {
            alert('Country not found. Please select from the dropdown.');
        }
    }
});

// Enter key functionality
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Popular destination clicks
document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const country = item.getAttribute('data-country') || item.textContent.split('/')[0];
        navigateToVisaPage(country);
    });
});

// Voice search functionality (basic implementation)
document.querySelector('.voice-btn').addEventListener('click', () => {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            searchInput.dispatchEvent(new Event('input'));
        };

        recognition.onerror = () => {
            alert('Speech recognition error. Please try again.');
        };

        recognition.start();
    } else {
        alert('Speech recognition not supported in this browser.');
    }
});


// Not required for static cards, only for dynamic rendering
const visaData = [
    { country: 'Dubai', flag: 'ae', price: 240 },
    { country: 'China', flag: 'cn', price: 210 },
    { country: 'Bulgaria', flag: 'bg', price: 200 },
    { country: 'Thailand', flag: 'th', price: 210 },
    { country: 'Australia', flag: 'au', price: 220 }
];






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