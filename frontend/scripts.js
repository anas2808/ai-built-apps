document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    const form = document.getElementById('form');
    const resultContainer = document.getElementById('resultContainer');

    // Toggle modal visibility
    toggleButton.addEventListener('click', function() {
        modal.classList.toggle('is-active');
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });

    // Close modal when clicking outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-active');
        }
    });

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('/api/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayResult(data);
            form.reset();
            modal.classList.remove('is-active');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function displayResult(data) {
        resultContainer.innerHTML = '';
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = `Success: ${data.message}`;
        resultContainer.appendChild(resultItem);
    }
});