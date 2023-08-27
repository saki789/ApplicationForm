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
                const currentFields = getFieldsToValidate(currentStep);
                if (validateFields(currentFields)) {
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

    // Function to validate fields
    function validateFields(fieldIds) {
        let valid = true;
        fieldIds.forEach((fieldId) => {
            const field = document.getElementById(fieldId);
            if (field.value.trim() === "") {
                valid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }
        });
        return valid;
    }

    // Function to get fields to validate for each step
    function getFieldsToValidate(stepIndex) {
        const fields = [
            ["first-name", "last-name"], // Step 1: Personal Information
            ["employer-name", "job-title", "employer-address", "employer-phone"], // Step 2: Employment History
            ["institution-name", "qualification"], // Step 3: Education Background
            ["bank-name", "account-holder", "account-number"], // Step 4: Bank Details
            ["team-number"] // Step 5: Team Number
        ];
        return fields[stepIndex];
    }

    // Initially show the first step
    showStep(currentStep);
});
