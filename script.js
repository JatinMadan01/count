let count = 0;

function updateDisplay() {
    const countDisplay = document.getElementById('countDisplay');
    countDisplay.textContent = count;
}

function increaseCount() {
    count++;
    updateDisplay();
    animateChange();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateDisplay();
        animateChange();
    }
}

function resetCount() {
    count = 0;
    updateDisplay();
    animateChange();
}

function animateChange() {
    const countContainer = document.querySelector('.count-container');
    countContainer.classList.add('animated');

    setTimeout(() => {
        countContainer.classList.remove('animated');
    }, 500);
}
