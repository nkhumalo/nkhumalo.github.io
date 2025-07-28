// Placeholder script
console.log("Welcome to Thando Khumalo’s site!");


function openPopup() {
    document.getElementById("newsletter-popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("newsletter-popup").style.display = "none";
  }

  // Optional: clicking outside the popup-content closes it
  window.onclick = function(event) {
    const popup = document.getElementById("newsletter-popup");
    const content = document.querySelector(".popup-content");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };