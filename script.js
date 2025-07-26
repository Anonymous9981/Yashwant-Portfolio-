// Smooth scrolling & active link highlight
const links = document.querySelectorAll('nav ul li a');
function updateActive() {
  let pos = window.scrollY + 120;
  links.forEach(link => {
    const sec = document.querySelector(link.getAttribute('href'));
    if (sec && sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', updateActive);
window.addEventListener('load', () => {
  updateActive();
  // ensure navbar links have default semi-opaque color
  links.forEach(l => l.style.color = 'rgba(255,255,255,0.75)');
});

// Contact-form AJAX (unchanged)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const [n, e_, m] = [this.name.value, this.email.value, this.message.value];
  if (!n || !e_ || !m) return alert('Please fill in all fields.');
  fetch(this.action, {
    method: 'POST',
    headers: { 'Accept':'application/json' },
    body: new FormData(this)
  })
  .then(r => r.ok ? (alert('Thank you!'), this.reset()) : alert('Error sending.'))
  .catch(()=> alert('Error sending.'));
});
