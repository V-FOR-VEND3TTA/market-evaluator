const form = document.getElementById('market-evaluation-form');
const progressBar = document.querySelector('.progress');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.getElementById('result-message');

let currentStep = 1;
const maxSteps = 10; // Assuming there are 10 questions

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
}

// Function to show the current step and hide others
function showStep(step) {
    const questions = form.querySelectorAll('.question');
    questions.forEach(question => {
        const stepNumber = parseInt(question.getAttribute('data-step'));
        if (stepNumber === step) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });

    // Update progress bar and score
    updateProgressBarAndScore();

    // Hide/show navigation buttons based on the step
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    if (step === 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }

    if (step === maxSteps) {
        nextButton.style.display = 'none';
        document.querySelector('.final-score').style.display = 'block'; // Show the final score
        updateProgressBarAndScore(); // Ensure the final score is up-to-date
    } else {
        nextButton.style.display = 'inline-block';
        document.querySelector('.final-score').style.display = 'none'; // Hide the final score
    }
}

// Function to go to the next step
function nextStep() {
    if (currentStep < maxSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

// Function to go to the previous step
function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Initialize the form by showing the first step
showStep(currentStep);
