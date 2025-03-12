document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("learnMoreBtn")
    .addEventListener("click", function () {
      const aboutSection = document.getElementById("about-me");
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
});

