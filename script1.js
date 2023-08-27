document.addEventListener("DOMContentLoaded", function() {
    const formSections = document.querySelectorAll('.form-section');
    const progressBar = document.querySelector('.progress');
    const nextBtn = document.getElementById('next-btn');
    const previousBtn = document.getElementById('previous-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    let currentSectionIndex = 0;

    // Hide all sections except the first one
    formSections.forEach((section, index) => {
        if (index !== currentSectionIndex) {
            section.style.display = 'none';
        }
    });

    // Update progress bar width
    function updateProgressBar() {
        const totalSections = formSections.length;
        const progressWidth = (currentSectionIndex / (totalSections - 1)) * 100;
        progressBar.style.width = `${progressWidth}%`;
    }

    // Show the current section
    function showCurrentSection() {
        formSections[currentSectionIndex].style.display = 'block';
        updateProgressBar();
    }

    // Hide the current section
    function hideCurrentSection() {
        formSections[currentSectionIndex].style.display = 'none';
    }

    // Next button click event
    nextBtn.addEventListener('click', function() {
        hideCurrentSection();
        currentSectionIndex++;
        if (currentSectionIndex >= formSections.length) {
            currentSectionIndex = formSections.length - 1;
        }
        showCurrentSection();
    });

    // Previous button click event
    previousBtn.addEventListener('click', function() {
        hideCurrentSection();
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
        }
        showCurrentSection();
    });

    // Submit button click event (placeholder)
    submitBtn.addEventListener('click', function() {
        alert('Form submitted successfully!');
    });

    // Show the first section initially
    showCurrentSection();
});
