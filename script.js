document.addEventListener('DOMContentLoaded', function () {
    const fieldsets = document.querySelectorAll('.fieldset-container');
    const progressBar = document.getElementById('progress-bar');
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');

    let currentFieldset = 0;
    updateProgressBar();

    function updateProgressBar() {
        const progress = (currentFieldset / (fieldsets.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showFieldset(index) {
        fieldsets.forEach((fieldset, i) => {
            fieldset.style.display = i === index ? 'block' : 'none';
        });
        updateProgressBar();
    }

    function showNextFieldset() {
        if (currentFieldset < fieldsets.length - 1) {
            currentFieldset++;
            showFieldset(currentFieldset);
        }
    }

    function showPreviousFieldset() {
        if (currentFieldset > 0) {
            currentFieldset--;
            showFieldset(currentFieldset);
        }
    }

    showFieldset(currentFieldset);

    nextButton.addEventListener('click', function () {
        showNextFieldset();
    });

    previousButton.addEventListener('click', function () {
        showPreviousFieldset();
    });
});
