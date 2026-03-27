const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignupButton = document.getElementById('switch-to-signup');
const switchToLoginButton = document.getElementById('switch-to-login');
const container = document.querySelector('.container');

// Function to animate liquid effect on input fields
function animateLiquidEffect(input) {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.classList.remove('focused');
        }
    });
}

// Apply liquid effect to all input fields
document.querySelectorAll('.input-field').forEach(animateLiquidEffect);

// Animation for switching between login and signup forms
function switchForm(isSignup) {
    container.classList.toggle('signup-mode', isSignup);
    if (isSignup) {
        signupForm.style.display = 'flex';
        loginForm.style.display = 'none';
    } else {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    }
}

// Event listeners for switch buttons
switchToSignupButton.addEventListener('click', () => {
    switchForm(true);
});

switchToLoginButton.addEventListener('click', () => {
    switchForm(false);
});

// Initial form display
document.addEventListener('DOMContentLoaded', () => {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
});

// Password confirmation validation for signup form
if (confirmPasswordInput && signupForm) {
    signupForm.addEventListener('submit', (event) => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert('Passwords do not match!');
            confirmPasswordInput.classList.add('error');
        } else {
            confirmPasswordInput.classList.remove('error');
        }
    });
}

// Basic validation for login form email (you might want more robust validation)
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        const emailInput = document.getElementById('login-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}