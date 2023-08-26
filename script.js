document.addEventListener('DOMContentLoaded', function () {
  const fieldsets = document.querySelectorAll('fieldset');
  const progressBar = document.querySelector('.progress-bar');
  const nextButtons = document.querySelectorAll('.next-btn');
  const prevButtons = document.querySelectorAll('.prev-btn');
  const submitButton = document.querySelector('.submit-btn');
  let currentFieldset = 0;

  updateProgressBar();

  // Show the current fieldset and hide the others
  function showFieldset(index) {
    fieldsets.forEach((fieldset, i) => {
      fieldset.style.display = i === index ? 'block' : 'none';
    });
    currentFieldset = index;
    updateProgressBar();
  }

  // Update progress bar based on current fieldset
  function updateProgressBar() {
    const progress = ((currentFieldset + 1) / fieldsets.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  // Show next fieldset
  function nextFieldset() {
    if (currentFieldset < fieldsets.length - 1) {
      showFieldset(currentFieldset + 1);
    }
  }

  // Show previous fieldset
  function prevFieldset() {
    if (currentFieldset > 0) {
      showFieldset(currentFieldset - 1);
    }
  }

  // Add event listeners to Next and Previous buttons
  nextButtons.forEach(button => {
    button.addEventListener('click', nextFieldset);
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', prevFieldset);
  });

  // Validate form before submitting
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Add your validation logic here
    const isValid = validateForm();

    if (isValid) {
      // Submit the form
      alert('Form submitted successfully!');
      // You can also use AJAX to submit the form data to the server
    }
  });

  // Your validation logic
  function validateForm() {
    // Implement your validation checks here
    // Return true if the form is valid, otherwise return false
    return true;
  }

  // Auto-focus on the first input field of the first fieldset
  const firstInput = fieldsets[0].querySelector('input, textarea');
  if (firstInput) {
    firstInput.focus();
  }
});
