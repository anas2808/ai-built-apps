document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const loader = document.getElementById("loader");
    const result = document.getElementById("result");
    const errorMsg = document.getElementById("errorMsg");

    // Function to show loader
    const showLoader = () => {
        loader.style.display = "block";
    };

    // Function to hide loader
    const hideLoader = () => {
        loader.style.display = "none";
    };

    // Function to display error message
    const displayError = (message) => {
        errorMsg.innerText = message;
        errorMsg.style.display = "block";
    };

    // Function to sanitize input
    const sanitizeInput = (input) => {
        const element = document.createElement("div");
        element.innerText = input;
        return element.innerHTML;
    };

    // Function to validate form input
    const validateForm = () => {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        
        if (!name || !email) {
            displayError("Please fill out all fields.");
            return false;
        }
        
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayError("Please enter a valid email address.");
            return false;
        }
        
        return true;
    };

    // Form submission handler
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        hideLoader();
        errorMsg.style.display = "none";

        if (!validateForm()) return;

        const name = sanitizeInput(form.name.value);
        const email = sanitizeInput(form.email.value);

        showLoader();
        
        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                throw new Error("Submission failed. Please try again.");
            }

            const data = await response.json();
            result.innerText = `Thank you, ${data.name}. Your submission has been received.`;
        } catch (error) {
            displayError(error.message);
        } finally {
            hideLoader();
        }
    });
}); 

// CSS styles for loader and error message
const style = document.createElement('style');
style.innerHTML = `
    #loader {
        display: none;
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #errorMsg {
        color: red;
        display: none;
    }

    #result {
        color: green;
    }
`;
document.head.appendChild(style);