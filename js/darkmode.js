
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("darkModeToggle");
    button.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
});
  