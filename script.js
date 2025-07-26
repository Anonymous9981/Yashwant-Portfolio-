// MODERN PORTFOLIO JS – Yashwant Mukati

// Contact form AJAX validation & submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  fetch(this.action, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(this)
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for your message!');
      this.reset();
    } else {
      alert('Oops! There was an error submitting the form. Please try again.');
    }
  })
  .catch(() => {
    alert('Oops! There was an error submitting the form. Please try again.');
  });
});

// Smooth in-page scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// (Optional) Fancy nav active link highlight
window.addEventListener("scroll", () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = [...links].map(link => document.querySelector(link.getAttribute('href')));
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  sections.forEach((section, i) => {
    if (section && section.offsetTop <= scrollPosition + 120) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
});
