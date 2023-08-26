document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const progressBar = document.querySelector(".progress-bar");
    const submitBtn = document.querySelector(".submit-btn");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    
    let currentFieldset = 0;
    const fieldsets = form.querySelectorAll("fieldset");
    const totalFieldsets = fieldsets.length;
    
    updateProgressBar();
    
    function updateProgressBar() {
        const progress = (currentFieldset / (totalFieldsets - 1)) * 100;
        progressBar.style.width = progress + "%";
    }
    
    function showFieldset(index) {
        fieldsets.forEach((fieldset, i) => {
            if (i === index) {
                fieldset.style.display = "block";
            } else {
                fieldset.style.display = "none";
            }
        });
    }
    
    function handleNext() {
        currentFieldset++;
        if (currentFieldset >= totalFieldsets) {
            currentFieldset = totalFieldsets - 1;
        }
        showFieldset(currentFieldset);
        updateProgressBar();
    }
    
    function handlePrev() {
        currentFieldset--;
        if (currentFieldset < 0) {
            currentFieldset = 0;
        }
        showFieldset(currentFieldset);
        updateProgressBar();
    }
    
    nextBtn.addEventListener("click", function (event) {
        event.preventDefault();
        handleNext();
    });
    
    prevBtn.addEventListener("click", function (event) {
        event.preventDefault();
        handlePrev();
    });
    
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // Handle form submission logic here
        
        // Move to the next fieldset
        handleNext();
    });
    
    // Show the initial fieldset
    showFieldset(currentFieldset);
});
