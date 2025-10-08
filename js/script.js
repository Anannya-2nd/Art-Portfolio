function toggleNav() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// Optional: close mobile nav when clicking outside
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.nav-toggle');
  if (window.innerWidth <= 900 && nav.classList.contains('show')) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('show');
    }
  }
});
