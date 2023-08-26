// Validate the form before submission
function validateForm() {
    // Add more validation logic here
    var isValid = true;
    // Example: Check if required fields are filled
    var requiredFields = document.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    return isValid;
}

// Initialize the form behavior
function initForm() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    // Remove error class on input focus
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('error');
        });
    });
}

// Run initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', initForm);
