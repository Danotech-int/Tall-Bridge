document.addEventListener('DOMContentLoaded', () => {
  initResponsiveNavigationEngine();
});

/**
 * Initializes and orchestrates responsive interaction configurations for the Nav Menu layer.
 */
function initResponsiveNavigationEngine() {
  const navElement = document.querySelector('nav');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navContainer = document.getElementById('navContainer');
  
  if (!navElement || !toggleBtn || !navContainer) return;

  // Click action toggle
  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents instant closure triggers from document tracking bounds
    navElement.classList.toggle('open');
  });

  // Closes menu cleanly when clicking outside the navbar panel mask context bounds
  document.addEventListener('click', (event) => {
    if (navElement.classList.contains('open')) {
      const isClickInsideMenu = navContainer.contains(event.target);
      const isClickOnToggle = toggleBtn.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle) {
        navElement.classList.remove('open');
      }
    }
  });
}

/**
 * Manages operational tab routing allocations inside the DOM interface architecture.
 * @param {string} id - Selected section content container node string signature
 */
function showPage(id) {
  // Ensure the responsive menu wrapper slides out of view on page route navigation shifts
  const navElement = document.querySelector('nav');
  if (navElement) {
    navElement.classList.remove('open');
  }

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  
  const selectedPage = document.getElementById("page-" + id);
  if (selectedPage) {
    selectedPage.classList.add("active");
  }
  
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
  
  const activeMenuLink = document.getElementById("nav-" + id);
  if (activeMenuLink) {
    activeMenuLink.classList.add("active");
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Extends accordion list states (FAQ tracking lines and inside Course Selection lists).
 * @param {string} id - Explicit node identifier reference map key
 */
function toggleCard(id) {
  const cardElement = document.getElementById("card-" + id);
  if (cardElement) {
    cardElement.classList.toggle("open");
  }
}

/**
 * Helper structural pipeline linking courses catalog grids safely to inside view details pages.
 * @param {string} courseId - Structural parameter route target string
 */
function showCourse(courseId) {
  showPage('detail-' + courseId);
}
