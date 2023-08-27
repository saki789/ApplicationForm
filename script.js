document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const steps = document.querySelectorAll(".form-step");
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.remove("hidden");
            } else {
                step.classList.add("hidden");
            }
        });
    }

    // Next button click event
    form.querySelectorAll('[id^="next"]').forEach((nextButton, index) => {
        nextButton.addEventListener("click", function() {
            if (currentStep < steps.length - 1) {
                // Validate fields before proceeding
                const fieldsToValidate = getFieldsToValidate(currentStep);
                let isValid = true;

                fieldsToValidate.forEach(fieldId => {
                    isValid = validateField(fieldId, "This field is required.") && isValid;
                });

                if (isValid) {
                    currentStep++;
                    showStep(currentStep);
                }
            }
        });
    });

    // Previous button click event
    form.querySelectorAll('[id^="prev"]').forEach((prevButton, index) => {
        prevButton.addEventListener("click", function() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Get field IDs to validate for the current step
    function getFieldsToValidate(stepIndex) {
        const fields = [
            ["first-name", "middle-name", "last-name", "dob", "address", "phone", "passport", "tin"],
            ["employer-name", "job-title", "employer-address", "employer-phone"],
            ["institution-name", "start-year", "end-year", "qualification"],
            ["bank-name", "account-holder", "account-number"]
        ];

        return fields[stepIndex];
    }

    // Initially show the first step
    showStep(currentStep);
});
