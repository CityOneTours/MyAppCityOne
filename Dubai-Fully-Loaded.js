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