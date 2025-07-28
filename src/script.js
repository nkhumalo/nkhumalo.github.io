// Placeholder script
console.log("Welcome to Thando Khumalo’s site!");


window.addEventListener("load", function () {
  const popup = document.getElementById("newsletter-popup");
  const closeBtn = document.querySelector(".close-btn");

  // Show popup after delay (e.g., 5 seconds)
  setTimeout(() => {
    popup.style.display = "block";
  }, 5000);

  // Close popup on X click
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Optional: Close popup when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
