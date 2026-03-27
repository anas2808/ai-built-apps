const signupFormContent = document.getElementById('signup-form-content');
const loginFormContent = document.getElementById('login-form-content');
const showSignupLink = document.getElementById('show-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const signupNameInput = document.getElementById('signup-name');
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const loginError = document.getElementById('login-error');
const loginSuccess = document.getElementById('login-success');
const signupError = document.getElementById('signup-error');
const signupSuccess = document.getElementById('signup-success');

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Add a liquid background effect if not present
    if (!document.querySelector('.liquid-background')) {
        const liquidBackground = document.createElement('div');
        liquidBackground.className = 'liquid-background';
        container.insertBefore(liquidBackground, container.firstChild);
    }

    // Ensure initial form visibility is set based on the requirement
    // Assuming signup is shown initially or toggled to signup
    if (signupFormContent && loginFormContent) {
        signupFormContent.classList.add('active');
        loginFormContent.classList.add('inactive');
    }

    // Function to toggle between login and signup forms
    const toggleForms = () => {
        if (signupFormContent.classList.contains('active')) {
            signupFormContent.classList.remove('active');
            signupFormContent.classList.add('inactive');
            loginFormContent.classList.remove('inactive');
            loginFormContent.classList.add('active');
        } else {
            loginFormContent.classList.remove('active');
            loginFormContent.classList.add('inactive');
            signupFormContent.classList.remove('inactive');
            signupFormContent.classList.add('active');
        }
    };

    // Event listener for the signup toggle link
    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms();
        });
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginEmailInput.value.trim();
            const password = loginPasswordInput.value;

            // Basic validation
            if (!email || !password) {
                displayMessage(loginError, 'Please fill in both fields.');
                return;
            }

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Login failed');
                }

                displayMessage(loginSuccess, data.message || 'Login successful!');
                // Redirect or perform other actions on successful login
                setTimeout(() => {
                    window.location.href = '/dashboard.html'; // Example redirection
                }, 2000);


            } catch (error) {
                displayMessage(loginError, error.message);
            }
        });
    }

    // Signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = signupNameInput.value.trim();
            const email = signupEmailInput.value.trim();
            const password = signupPasswordInput.value;

            // Basic validation
            if (!name || !email || !password) {
                displayMessage(signupError, 'Please fill in all fields.');
                return;
            }
            if (password.length < 6) {
                displayMessage(signupError, 'Password must be at least 6 characters long.');
                return;
            }
            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                displayMessage(signupError, 'Please enter a valid email address.');
                return;
            }

            try {
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Signup failed');
                }

                displayMessage(signupSuccess, data.message || 'Signup successful!');
                // Optionally, toggle to login form after successful signup
                setTimeout(() => {
                    toggleForms(); // Switch to login form
                    signupNameInput.value = '';
                    signupEmailInput.value = '';
                    signupPasswordInput.value = '';
                    signupSuccess.textContent = ''; // Clear success message
                }, 2000);

            } catch (error) {
                displayMessage(signupError, error.message);
            }
        });
    }

    // Helper function to display messages
    function displayMessage(element, message, isError = true) {
        if (element) {
            element.textContent = message;
            element.classList.add('visible');
            if (isError) {
                element.style.color = 'var(--secondary-color)'; // Using secondary color for errors
            } else {
                element.style.color = 'green'; // Success color
            }
            setTimeout(() => {
                element.textContent = '';
                element.classList.remove('visible');
            }, 3000);
        }
    }
});
