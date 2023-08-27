document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    isValid = validateField("first-name", "This field is required.") && isValid;
    isValid = validateField("middle-name", "") && isValid;
    isValid = validateField("last-name", "This field is required.") && isValid;
    isValid = validateField("dob", "This field is required.") && isValid;
    isValid = validateField("address", "This field is required.") && isValid;
    isValid = validateField("phone", "This field is required.") && isValid;
    isValid = validateField("passport", "This field is required.") && isValid;
    isValid = validateField("tin", "This field is required.") && isValid;

    isValid = validateField("employer-name", "This field is required.") && isValid;
    isValid = validateField("job-title", "This field is required.") && isValid;
    isValid = validateField("employer-address", "This field is required.") && isValid;
    isValid = validateField("employer-phone", "This field is required.") && isValid;

    isValid = validateField("institution-name", "This field is required.") && isValid;
    isValid = validateField("start-year", "This field is required.") && isValid;
    isValid = validateField("end-year", "This field is required.") && isValid;
    isValid = validateField("qualification", "This field is required.") && isValid;

    isValid = validateField("bank-name", "This field is required.") && isValid;
    isValid = validateField("account-holder", "This field is required.") && isValid;
    isValid = validateField("account-number", "This field is required.") && isValid;

    if (isValid) {
      // Prepare and send form data to server
      const formData = new FormData(form);

      fetch("server-url", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Display success message or redirect to success page
        } else {
          // Display error message
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  });
});

function validateField(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  const value = field.value.trim();
  
  const errorElement = field.nextElementSibling;
  
  if (value === "") {
    showError(errorElement, errorMessage);
    return false;
  }
  
  hideError(errorElement);
  return true;
}

function showError(errorElement, errorMessage) {
  errorElement.textContent = errorMessage;
}

function hideError(errorElement) {
  errorElement.textContent = "";
}
