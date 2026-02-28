```javascript
// scripts.js

// --- Navbar Toggle and Smooth Scrolling ---

// Function to add/remove active class from nav links and smoothly scroll to sections
function setupNavInteractivity() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('section');

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Remove 'active' class from all nav links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Check if the target section exists before scrolling
            if (targetSection) {
                // Smoothly scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener to highlight active nav link
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            // Check if the section is within the viewport
            if (section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().bottom >= 0) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update the active class on navigation links based on the current section
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

// --- Contact Form Validation ---

function setupContactFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return; // Exit if the form doesn't exist on the page

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject'); // Added subject input
    const messageInput = document.getElementById('message');
    const errorMessageDiv = document.getElementById('form-error-message');
    const successMessageDiv = document.getElementById('form-success-message');

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s'-]+$/; // Allows letters, spaces, hyphens, apostrophes

    // Function to display an error message
    function displayError(message) {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.display = 'block';
        }
        if (successMessageDiv) {
            successMessageDiv.textContent = '';
            successMessageDiv.style.display = 'none';
        }
    }

    // Function to clear error messages
    function clearErrors() {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
        }
        if (successMessageDiv) {
            successMessageDiv.textContent = '';
            successMessageDiv.style.display = 'none';
        }
    }

    // Function to display a success message
    function displaySuccess(message) {
        if (successMessageDiv) {
            successMessageDiv.textContent = message;
            successMessageDiv.style.display = 'block';
        }
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
        }
    }

    // Function to validate the entire form
    function validateForm() {
        clearErrors();
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value.trim())) {
            displayError('Please enter a valid name (only letters, spaces, hyphens, apostrophes).');
            isValid = false;
        }

        // Email validation
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
            displayError('Please enter a valid email address.');
            isValid = false;
        }

        // Subject validation
        if (subjectInput.value.trim() === '') {
            displayError('Please enter a subject for your message.');
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            displayError('Please enter your message.');
            isValid = false;
        }

        return isValid;
    }

    // Add event listener for form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Simulate form submission (in a real app, you'd send data to a server)
            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Subject:', subjectInput.value);
            console.log('Message:', messageInput.value);

            // Display success message
            displaySuccess('Thank you for your message! I will get back to you soon.');

            // Optionally clear the form after successful submission
            contactForm.reset();
        }
    });

    // Add input event listeners for real-time feedback (optional but good UX)
    nameInput.addEventListener('input', clearErrors);
    emailInput.addEventListener('input', clearErrors);
    subjectInput.addEventListener('input', clearErrors);
    messageInput.addEventListener('input', clearErrors);
}


// --- Initialize on DOMContentLoaded ---

document.addEventListener('DOMContentLoaded', () => {
    // Set primary and secondary colors from blueprint for dynamic styling if needed (e.g., for buttons)
    const root = document.documentElement;
    const colorScheme = {
        primary: "#3498db", // Blue
        secondary: "#2ecc71", // Green
        background: "#ffffff", // White
        text: "#333333" // Dark Gray
    };
    root.style.setProperty('--primary-color', colorScheme.primary);
    root.style.setProperty('--secondary-color', colorScheme.secondary);
    root.style.setProperty('--background-color', colorScheme.background);
    root.style.setProperty('--text-color', colorScheme.text);
    root.style.setProperty('--font-family', 'Roboto, sans-serif'); // Assuming Roboto is available or fallback

    // Set up navbar interactivity
    setupNavInteractivity();

    // Set up contact form validation
    setupContactFormValidation();

    // Add any other initializations here
});
```