document.addEventListener('DOMContentLoaded', function () {
    const fieldsets = document.querySelectorAll('.fieldset-container');
    let currentFieldset = 0;

    function showFieldset(fieldsetIndex) {
        fieldsets.forEach((fieldset, index) => {
            if (index === fieldsetIndex) {
                fieldset.style.display = 'block';
            } else {
                fieldset.style.display = 'none';
            }
        });
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

    // Initialize the form behavior
    showFieldset(currentFieldset);

    document.getElementById('next-button').addEventListener('click', showNextFieldset);
    document.getElementById('previous-button').addEventListener('click', showPreviousFieldset);
});
