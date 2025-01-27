document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const dotsContainer = document.querySelector(".carousel-dots");

  // Clone first and last slides for infinite effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = Array.from(track.children);
  let currentSlideIndex = 1; // Start at first real slide
  let autoSlideInterval;
  let isTransitioning = false;

  // Create dots only for original slides
  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      dot.dataset.index = index;
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => moveToSlide(index + 1)); // +1 for clone offset
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const realIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === realIndex);
    });
  }

  function moveToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    track.style.transition = "transform 0.5s ease-in-out";
    currentSlideIndex = index;
    updateSlidePosition();
    updateDots();
    resetAutoSlide();
  }

  function updateSlidePosition() {
    const slideWidth = allSlides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  }

  function handleTransitionEnd() {
    isTransitioning = false;

    // Seamlessly jump to clone's counterpart
    if (currentSlideIndex === allSlides.length - 1) {
      track.style.transition = "none";
      currentSlideIndex = 1;
      updateSlidePosition();
    } else if (currentSlideIndex === 0) {
      track.style.transition = "none";
      currentSlideIndex = allSlides.length - 2;
      updateSlidePosition();
    }
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      moveToSlide(currentSlideIndex + 1);
    }, 15000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Event listeners
  track.addEventListener("transitionend", handleTransitionEnd);

  // Initialize
  updateSlidePosition();
  createDots();
  startAutoSlide();
});
