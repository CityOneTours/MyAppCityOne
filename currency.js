const exchangeRates = {
  AED_TO_INR: 24.02,
  AED_TO_USD: 0.2712
};

let userCurrency = 'AED';   // default

// Format the price based on the current userCurrency
function formatPrice(aed) {
  if (userCurrency === 'AED') return `AED ${aed}`;
  if (userCurrency === 'INR') return `₹ ${(aed * exchangeRates.AED_TO_INR).toFixed(0)}`;
  if (userCurrency === 'USD') return `$ ${(aed * exchangeRates.AED_TO_USD).toFixed(0)}`;
}

// Update every element that has class="price-amount"
function updateAllPrices() {
  document.querySelectorAll('.price-amount').forEach(el => {
    const aed = parseFloat(el.dataset.aed);
    el.textContent = formatPrice(aed);
  });
}

// Change currency and remember the choice
function setCurrency(currency) {
  userCurrency = currency;
  localStorage.setItem('selectedCurrency', currency); // 🔑 persists across pages
  updateAllPrices();
}

document.addEventListener('DOMContentLoaded', () => {
  // Restore saved currency when any page loads
  const saved = localStorage.getItem('selectedCurrency');
  if (saved) {
    userCurrency = saved;
    const select = document.getElementById('currencySelect');
    if (select) select.value = saved; // keep dropdown in sync
  }

  updateAllPrices();

  // Listen for dropdown changes in the navbar
  const select = document.getElementById('currencySelect');
  if (select) {
    select.addEventListener('change', e => setCurrency(e.target.value));
  }
});