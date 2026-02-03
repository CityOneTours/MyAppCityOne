const exchangeRates = {
  AED_TO_INR: 24.62,
  AED_TO_USD: 0.2723
};

let userCurrency = 'AED';

// Format numbers with commas
function numberFormat(num) {
  return num.toLocaleString('en-IN', {
    maximumFractionDigits: 2
  });
}

// Format price
function formatPrice(aed) {
  if (userCurrency === 'AED') {
    return `AED ${numberFormat(aed)}`;
  }

  if (userCurrency === 'INR') {
    const inr = aed * exchangeRates.AED_TO_INR;
    return `₹ ${numberFormat(inr)}`;
  }

  if (userCurrency === 'USD') {
    const usd = aed * exchangeRates.AED_TO_USD;
    return `$ ${numberFormat(usd)}`;
  }
}

// Update prices
function updateAllPrices() {
  document.querySelectorAll('.price-amount').forEach(el => {
    const aed = parseFloat(el.dataset.aed);
    el.textContent = formatPrice(aed);
  });
}

// Change currency
function setCurrency(currency) {
  userCurrency = currency;
  localStorage.setItem('selectedCurrency', currency);
  updateAllPrices();
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('selectedCurrency');
  if (saved) {
    userCurrency = saved;
    const select = document.getElementById('currencySelect');
    if (select) select.value = saved;
  }

  updateAllPrices();

  const select = document.getElementById('currencySelect');
  if (select) {
    select.addEventListener('change', e => setCurrency(e.target.value));
  }
});
