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
                currentStep++;
                showStep(currentStep);
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

    // Initially show the first step
    showStep(currentStep);
});
