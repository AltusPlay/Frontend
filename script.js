document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad para sliders (dots)
  document.querySelectorAll(".dots").forEach(dotContainer => {
    const sliderId = dotContainer.dataset.slider;
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll(".slide");
    const dots = dotContainer.querySelectorAll(".dot");

    let currentIndex = 0;
    let interval;

    function showSlide(index) {
      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      slides[index].classList.add("active");
      dots[index].classList.add("active");
      currentIndex = index;
    }

    function startAutoSlide() {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }, 5000);
    }

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        showSlide(index);
        clearInterval(interval);
        startAutoSlide();
      });
    });

    showSlide(0);
    startAutoSlide();
  });

  // Funcionalidad para menú hamburguesa
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  } else {
    console.warn("⚠️ Elementos del menú no encontrados.");
  }

  // Flip cards (por si usas más adelante)
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Selección de fechas (reservas)
  document.querySelectorAll(".fechas button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".fechas button").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
    });
  });
});
