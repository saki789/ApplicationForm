document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  
  form.addEventListener("submit", function(event) {
    let isValid = true;
    
    // Validation logic for each field
    if (!validateName("first-name")) {
      isValid = false;
    }
    // Repeat for other fields...
    
    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });
  
  function validateName(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    
    if (value === "") {
      showError(field, "This field is required.");
      return false;
    }
    
    return true;
  }
  
  // Define similar validation functions for other fields
});

function showError(field, errorMessage) {
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = errorMessage;
  
  field.parentNode.appendChild(errorElement);
}
