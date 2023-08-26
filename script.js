document.addEventListener("DOMContentLoaded", function () {
    const fieldsets = document.querySelectorAll("fieldset");
    const progressBar = document.querySelector(".progress-bar");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const submitButton = document.querySelector(".submit-btn");
    let currentFieldsetIndex = 0;

    function updateProgress() {
        const progress = (currentFieldsetIndex / (fieldsets.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showFieldset(index) {
        fieldsets.forEach((fieldset, i) => {
            if (i === index) {
                fieldset.style.display = "block";
            } else {
                fieldset.style.display = "none";
            }
        });
        updateProgress();
    }

    function validateCurrentFieldset() {
        const inputs = fieldsets[currentFieldsetIndex].querySelectorAll("input[required], textarea[required]");
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        return isValid;
    }

    function navigateToFieldset(index) {
        if (index >= 0 && index < fieldsets.length) {
            if (index > currentFieldsetIndex && !validateCurrentFieldset()) {
                return;
            }
            currentFieldsetIndex = index;
            showFieldset(currentFieldsetIndex);
            if (currentFieldsetIndex === 0) {
                prevButton.style.display = "none";
            } else {
                prevButton.style.display = "block";
            }
            if (currentFieldsetIndex === fieldsets.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "block";
            } else {
                nextButton.style.display = "block";
                submitButton.style.display = "none";
            }
        }
    }

    prevButton.addEventListener("click", () => navigateToFieldset(currentFieldsetIndex - 1));
    nextButton.addEventListener("click", () => navigateToFieldset(currentFieldsetIndex + 1));

    showFieldset(currentFieldsetIndex);
});
