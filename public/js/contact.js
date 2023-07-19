const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  return (window.location.href = "/MuscleManiaGym/index.html");
});
