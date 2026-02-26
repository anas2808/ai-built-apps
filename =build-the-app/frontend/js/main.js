import { showLoading, hideLoading, showError } from './uiHelpers.js';

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    showLoading(); // Show loading spinner on submission

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Input validation
    if (!validateInputs(data)) {
        showError('Please fill in all required fields correctly!');
        hideLoading();
        return;
    }

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sanitizeInputs(data)),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        handleResponse(result);
    } catch (error) {
        console.error('Error during form submission:', error);
        showError('An error occurred while submitting the form. Please try again later.');
    } finally {
        hideLoading(); // Hide loading spinner
    }
}

// Function to validate inputs
function validateInputs(data) {
    const { name, email } = data;
    return name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple name and email validation
}

// Function to sanitize inputs
function sanitizeInputs(data) {
    return {
        ...data,
        name: data.name.replace(/[^a-zA-Z0-9\s]/g, ''), // Remove special characters from name
        email: data.email.trim(), // Remove whitespace from email
    };
}

// Function to handle server response
function handleResponse(result) {
    if (result.success) {
        alert('Form submitted successfully!');
        // Optionally reset form or redirect
        document.getElementById('myForm').reset();
    } else {
        showError(result.message || 'An unexpected error occurred.');
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

// Export functions for testing
export { handleFormSubmit, validateInputs, sanitizeInputs };