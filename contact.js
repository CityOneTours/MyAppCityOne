function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');


function initMap() {
  const companyLocation = { lat: 25.122319, lng: 55.377324 }; // Palace Tower TI

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: companyLocation,
  });

  const marker = new google.maps.Marker({
    position: companyLocation,
    map: map,
    title: "1904, Palace Tower TI, Dubai Silicon Oasis, Dubai"
  });
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