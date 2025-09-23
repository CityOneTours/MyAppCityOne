function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const scrollContainer = document.getElementById('scrollContainer');

function scrollRight() {
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
}

function scrollLeft() {
  scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
}    
    
    
    function openPopup() {
      document.getElementById("formPopup").style.display = "flex";
    }

    function closePopup() {
      document.getElementById("formPopup").style.display = "none";
    }

    function openImagePopup() {
      document.getElementById("imagePopup").style.display = "flex";
    }

    function closeImagePopup() {
      document.getElementById("imagePopup").style.display = "none";
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