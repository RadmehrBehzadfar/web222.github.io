// script.js

document.addEventListener("DOMContentLoaded", function () {
    const reasonRadio = document.querySelectorAll('input[name="reason"]');
    const hourlyRateInput = document.getElementById('hourly-rate');
    const contactForm = document.getElementById('contact-form');

    reasonRadio.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'Hiring') {
                hourlyRateInput.style.display = 'block';
                hourlyRateInput.setAttribute('required', 'required');
            } else {
                hourlyRateInput.style.display = 'none';
                hourlyRateInput.removeAttribute('required');
            }
        });
    });

    contactForm.addEventListener('submit', function (event) {
        // Prevent form submission if there are validation errors
        if (!this.checkValidity()) {
            event.preventDefault();
        }
    });

    
});
