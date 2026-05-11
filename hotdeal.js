function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// ── Back to top ──────────────────────────────────────────────
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Help dropdown (top bar) ───────────────────────────────────
const helpBtn = document.querySelector(".help-btn");
if (helpBtn) {
    helpBtn.addEventListener("click", function () {
        document.querySelector(".help-container").classList.toggle("active");
    });
}

// ── Hot-deals enquiry popup (showPopup / hidePopup) ──────────
function showPopup(packageName) {
    const overlay = document.getElementById('modalOverlay');
    const popup   = document.getElementById('enquiryPopup');
    const heading = document.getElementById('chosenPackage');
    const field   = document.getElementById('packageField');

    if (!overlay || !popup) return;
    heading.textContent = packageName;
    field.value         = packageName;

    overlay.classList.add('show');
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hidePopup() {
    const overlay = document.getElementById('modalOverlay');
    const popup   = document.getElementById('enquiryPopup');
    if (!overlay || !popup) return;

    overlay.classList.remove('show');
    popup.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ── "Enquire Now" used by budget cards (openModal) ───────────
function openModal() {
    const modal = document.getElementById('enquireModal');
    if (!modal) return;
    // Bootstrap 5 modal
    const bsModal = bootstrap.Modal.getOrCreateInstance(modal);
    bsModal.show();
}

// ── Top-bar enquiry box ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Only wire up if the trigger exists (some pages may not have it)
    const trigger  = document.getElementById('enquiryOpen');
    const modal    = document.getElementById('enquiryBox');
    const closeBtn = document.querySelector('.popup-close');

    if (trigger && modal) {
        trigger.addEventListener('click', () => modal.style.display = 'flex');
    }
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // ── Europe Group Trip popup (5-second delay) ──────────────
    const euOverlay = document.getElementById('eu-popup-overlay');
    if (euOverlay) {
        setTimeout(() => euOverlay.classList.add('active'), 5000);

        euOverlay.addEventListener('click', function (e) {
            if (e.target === this) euClosePopup();
        });
    }
});

function euClosePopup() {
    const o = document.getElementById('eu-popup-overlay');
    if (!o) return;
    o.style.opacity    = '0';
    o.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        o.classList.remove('active');
        o.style.opacity    = '';
        o.style.transition = '';
    }, 300);
}

// ── Escape key closes any open popup ─────────────────────────
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hidePopup();
        euClosePopup();
    }
});

// ── Breadcrumb ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbList = document.getElementById("dynamicBreadcrumb");
    if (!breadcrumbList) return;

    const pathArray = window.location.pathname.split("/").filter(Boolean);
    const baseURL   = window.location.origin;
    let   path      = "";

    breadcrumbList.innerHTML += `<li><a href="${baseURL}/">Home</a></li>`;

    pathArray.forEach((segment, i) => {
        path += "/" + segment;
        const name = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(".html", "")
            .replace(/\b\w/g, l => l.toUpperCase());

        if (i === pathArray.length - 1) {
            breadcrumbList.innerHTML += `<li class="active">${name}</li>`;
        } else {
            breadcrumbList.innerHTML += `<li><a href="${baseURL}${path}">${name}</a></li>`;
        }
    });
});