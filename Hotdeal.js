function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;


function openModal(destination) {
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = `Book Your ${destination} Experience Now`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('bookingModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Form submission handler
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted! Our travel specialist will Contact you soon.');
    closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbList = document.getElementById("dynamicBreadcrumb");
    const pathArray = window.location.pathname.split("/").filter(Boolean);

    const baseURL = window.location.origin;
    let path = "";
    const homeItem = `<li><a href="${baseURL}//">Home</a></li>`;
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


















// const exchangeRates = {
//   AED_TO_INR: 24.02,
//   AED_TO_USD: 0.2712
// };

// let userCurrency = 'AED';

// function formatPrice(aed) {
//   if (userCurrency === 'AED') return `AED ${aed}`;
//   if (userCurrency === 'INR') return `₹ ${(aed * exchangeRates.AED_TO_INR).toFixed(0)}`;
//   if (userCurrency === 'USD') return `$ ${(aed * exchangeRates.AED_TO_USD).toFixed(0)}`;
// }

// function updateAllPrices() {
//   document.querySelectorAll('.price-amount').forEach(el => {
//     const aed = parseFloat(el.dataset.aed);
//     el.textContent = formatPrice(aed);
//   });
// }

// document.getElementById('currencySelect').addEventListener('change', e => {
//   userCurrency = e.target.value;
//   updateAllPrices();
// });

// updateAllPrices(); 


document.querySelector(".help-btn").addEventListener("click", function () {
  document.querySelector(".help-container").classList.toggle("active");
});



document.addEventListener('DOMContentLoaded', () => {
  const modal   = document.getElementById('enquiryBox');    // popup container
  const trigger = document.getElementById('enquiryOpen');   // button to open
  const closeBtn = document.querySelector('.popup-close');  // X icon

  // Open modal
  trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Close modal when clicking the X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

