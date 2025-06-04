// Form Validation Example
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from submitting and page refresh

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Send the form data to Formspree via AJAX (fetch)
        fetch('https://formspree.io/f/mnnvnqbr', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: new FormData(document.getElementById('contact-form'))
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message!');
                document.getElementById('contact-form').reset(); // Reset form after submission
            } else {
                alert('Oops! There was an error submitting the form. Please try again.');
            }
        })
        .catch(error => {
            alert('Oops! There was an error submitting the form. Please try again.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
