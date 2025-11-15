// SCRIPT.JS 
document.addEventListener("DOMContentLoaded", () => {

  // Display Current Date on Homepage 
  const dateEl = document.getElementById("current-date");
  if (dateEl) {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    dateEl.textContent = "Date: " + today.toLocaleDateString("en-GB", options);
  }

  //  Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Animate feature cards on hover 
  const features = document.querySelectorAll(".feature-item");
  features.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    });
  });

  // Parallax effect for hero background 
  const heroImage = document.querySelector(".hero-section");
  if (heroImage) {
    heroImage.addEventListener("mousemove", (e) => {
      heroImage.style.backgroundPositionX =
        50 + (e.pageX / window.innerWidth) * 10 + "%";
    });
  }

  // Form thank-you message (Contact Page)
  const form = document.getElementById("orderForm");
  const thankYou = document.getElementById("thankYou");

  if (form && thankYou) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Hide the form to make room for thank-you message
      form.style.display = 'none';

      // Show thank-you message smoothly
      thankYou.classList.remove("hidden");
      thankYou.classList.add("visible");
      thankYou.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Fade-in sections when scrolling 
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach((el) => observer.observe(el));

  // Navbar shadow on scroll 
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // JS ENLARGE one image on hover
  const firstZoomImg = document.querySelector('.zoom-img') || document.querySelector('.rounded-img');
  if (firstZoomImg) {
    firstZoomImg.addEventListener('mouseenter', () => {
      firstZoomImg.style.transition = 'transform 0.25s ease';
      firstZoomImg.style.transform = 'scale(1.12)';
    });
    firstZoomImg.addEventListener('mouseleave', () => {
      firstZoomImg.style.transform = 'scale(1)';
    });
  }

});
