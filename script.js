// ===========================================
// ALTUSPLAY - script.js con comentarios
// ===========================================

// Esperar a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {

  // =======================================
  // FUNCIONALIDAD DE SLIDERS AUTOMÁTICOS
  // =======================================
  document.querySelectorAll(".dots").forEach(dotContainer => {
    const sliderId = dotContainer.dataset.slider; // Obtiene el ID del slider relacionado
    const slider = document.getElementById(sliderId); // Encuentra el contenedor de slides
    const slides = slider.querySelectorAll(".slide"); // Todos los elementos con clase 'slide'
    const dots = dotContainer.querySelectorAll(".dot"); // Los indicadores (dots)

    let currentIndex = 0; // Índice actual
    let interval; // Control del intervalo automático

    function showSlide(index) {
      slides.forEach(s => s.classList.remove("active")); // Oculta todas las slides
      dots.forEach(d => d.classList.remove("active")); // Desactiva todos los dots
      slides[index].classList.add("active"); // Muestra la slide deseada
      dots[index].classList.add("active"); // Activa el dot correspondiente
      currentIndex = index;
    }

    function startAutoSlide() {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length; // Va a la siguiente slide
        showSlide(nextIndex);
      }, 5000); // Cada 5 segundos
    }

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index); // Obtener índice del dot
        showSlide(index); // Mostrar la slide correspondiente
        clearInterval(interval); // Reiniciar temporizador
        startAutoSlide(); // Comenzar de nuevo el intervalo
      });
    });

    showSlide(0); // Muestra la primera slide al cargar
    startAutoSlide(); // Inicia el ciclo automático
  });

  // =======================================
  // MENÚ HAMBURGUESA - ACTIVACIÓN
  // =======================================
  const toggleBtn = document.querySelector(".menu-toggle"); // Botón ☰
  const nav = document.querySelector(".nav-links"); // Menú de navegación

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("active"); // Alterna visibilidad del menú
      console.log("✅ Menú hamburguesa activado");
    });
  } else {
    console.warn("⚠️ Elementos del menú no encontrados.");
  }
});

// =======================================
// CIERRE AUTOMÁTICO DEL MENÚ AL CLIC
// =======================================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active"); // Cierra el menú móvil
  });
});
