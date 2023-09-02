const form = document.getElementById('market-evaluation-form');
const progressBar = document.querySelector('.progress');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.getElementById('result-message');

// Function to update the progress bar and score
function updateProgressBarAndScore() {
    const sliders = form.querySelectorAll('input[type="range"]');
    let totalScore = 0;

    sliders.forEach(slider => {
        totalScore += parseInt(slider.value);
    });

    const maxScore = sliders.length * 10; // Assuming max score is 100
    const percentage = (totalScore / maxScore) * 100;

    progressBar.style.width = percentage + '%';
    scoreDisplay.textContent = totalScore;

    // Determine the result message based on the score
    if (totalScore <= 50) {
        resultMessage.textContent = "Move on to another idea. There are better places to invest your energy.";
    } else if (totalScore > 50 && totalScore < 75) {
        resultMessage.textContent = "The idea is promising but will need a huge investment of energy and resources.";
    } else {
        resultMessage.textContent = "You have a promising idea! Full speed ahead!";
    }
}

// Add event listeners to update the progress bar and score when sliders change
const sliders = form.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
    slider.addEventListener('input', updateProgressBarAndScore);
});

// Call the function initially to set the initial values
updateProgressBarAndScore();
