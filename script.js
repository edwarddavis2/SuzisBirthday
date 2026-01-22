// Quiz Configuration
// EDIT THESE VALUES to customize the quiz!

const quizConfig = {
    // Correct answers for each question (a, b, c, or d)
    answers: {
        1: 'b',  // Question 1 correct answer
        2: 'a',  // Question 2 correct answer
        3: 'c',  // Question 3 correct answer
        4: 'd'   // Question 4 correct answer
    },
    
    // Secret codes for each location (case-insensitive)
    codes: {
        1: 'BIRTHDAY1',
        2: 'SURPRISE2',
        3: 'ALMOST3',
        4: 'FINAL4'
    }
};

// Funny messages for wrong answers
const funnyMessages = [
    "Nice try, but that's not it! 🤔",
    "Hmm, are you sure about that? 😄",
    "Oops! That's not the one! 🙊",
    "So close... but not quite! 😅",
    "That's a creative answer, but wrong! 🎭",
    "Did you forget already?! 😜",
    "Nope! Think harder! 🧠",
    "Wrong answer! But I still love you! 💕",
    "Uh oh! Try again, birthday star! ⭐",
    "That's not right! Have another go! 🎯"
];

// Track current question for the "try again" button
let currentQuestion = 1;

// Show a specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Start the quiz
function startQuiz() {
    currentQuestion = 1;
    showPage('question1');
}

// Check if the answer is correct
function checkAnswer(questionNumber, answer) {
    currentQuestion = questionNumber;
    
    if (answer === quizConfig.answers[questionNumber]) {
        // Correct answer - show the correct page with location hint
        showPage('correct' + questionNumber);
    } else {
        // Wrong answer - show funny wrong page
        showWrongPage();
    }
}

// Show the wrong answer page with a random funny message
function showWrongPage() {
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    document.getElementById('funny-text').textContent = randomMessage;
    showPage('wrong');
}

// Go back to the current question to try again
function tryAgain() {
    showPage('question' + currentQuestion);
}

// Check if the entered code is correct
function checkCode(questionNumber) {
    const codeInput = document.getElementById('code' + questionNumber);
    const errorElement = document.getElementById('code' + questionNumber + '-error');
    const enteredCode = codeInput.value.trim().toUpperCase();
    const correctCode = quizConfig.codes[questionNumber].toUpperCase();
    
    if (enteredCode === correctCode) {
        // Clear the input and error
        codeInput.value = '';
        errorElement.textContent = '';
        
        // Move to next question or success page
        if (questionNumber < 4) {
            currentQuestion = questionNumber + 1;
            showPage('question' + (questionNumber + 1));
        } else {
            // Last question completed - show success!
            showPage('success');
        }
    } else {
        // Show error message
        errorElement.textContent = "That's not the right code. Check again! 🔍";
        
        // Shake the input
        codeInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            codeInput.style.animation = '';
        }, 500);
    }
}

// Add enter key support for code inputs
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 4; i++) {
        const codeInput = document.getElementById('code' + i);
        if (codeInput) {
            codeInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkCode(i);
                }
            });
        }
    }
});
