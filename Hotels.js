function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');

let selectedProperty = '';

function showInquiryPopup(hotelName) {
    selectedProperty = hotelName;
    document.getElementById('selectedHotel').textContent = hotelName;
    document.getElementById('popupBackdrop').style.display = 'flex';
    document.getElementById('confirmationAlert').style.display = 'none';

    // Reset form
    document.getElementById('ContactForm').reset();

    // Add animation
    setTimeout(() => {
        document.getElementById('inquiryPopup').classList.add('active');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function hideInquiryPopup() {
    document.getElementById('inquiryPopup').classList.remove('active');

    setTimeout(() => {
        document.getElementById('popupBackdrop').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close popup when clicking outside
document.getElementById('popupBackdrop').addEventListener('click', function (e) {
    if (e.target === this) {
        hideInquiryPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('popupBackdrop').style.display === 'flex') {
        hideInquiryPopup();
    }
});

// Form submission
document.getElementById('ContactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const customerName = formData.get('customerName');
    const customerEmail = formData.get('customerEmail');
    const customerPhone = formData.get('customerPhone');

    // Basic validation
    if (!customerName || !customerEmail || !customerPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Mobile validation (basic)
    const mobileRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!mobileRegex.test(customerPhone.replace(/\s/g, ''))) {
        alert('Please enter a valid mobile number.');
        return;
    }

    // Simulate form submission
    console.log('Enquiry submitted:', {
        hotel: selectedProperty,
        name: customerName,
        email: customerEmail,
        mobile: customerPhone
    });

    // Show success message
    document.getElementById('confirmationAlert').style.display = 'block';
    this.style.display = 'none';

    // Close popup after 3 seconds
    setTimeout(() => {
        hideInquiryPopup();
        this.style.display = 'block';
    }, 3000);
});

// Add smooth scrolling for better UX
document.querySelectorAll('.inquiry-button').forEach(button => {
    button.addEventListener('click', function () {
        // Add a subtle click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add loading animation to form submission
document.getElementById('ContactForm').addEventListener('submit', function () {
    const submitBtn = this.querySelector('.submit-request');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});


const modal = document.getElementById('enquiryModal');
const btn = document.getElementById('enquiryBtn');
const close = document.querySelector('.close');

btn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };