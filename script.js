const wordInput = document.getElementById('word-input');
const wordDisplay = document.getElementById('word-display');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');

const words = ['apple', 'banana', 'orange', 'mango', 'grape', 'pineapple', 'blueberry', 'watermelon', 'strawberry', 'raspberry'];
let score = 0;
let time = 15;
let currentWord;

function startGame() {
    score = 0;
    time = 25;
    wordInput.value = '';
    message.textContent = '';
    playAgainBtn.style.display = 'none';
    wordInput.disabled = false;
    wordInput.focus();
    updateScore();
    updateWord();
    const timeInterval = setInterval(updateTime, 1000);
    wordInput.addEventListener('input', checkInput);

    function updateTime() {
        time--;
        timeDisplay.textContent = time;
        if (time === 0) {
            clearInterval(timeInterval);
            endGame();
        }
    }
}

function checkInput() {
    if (wordInput.value.toLowerCase() === currentWord) {
        score++;
        updateScore();
        wordInput.value = '';
        updateWord();
    }
}

function updateWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
}

function updateScore() {
    scoreDisplay.textContent = score;
}

function endGame() {
    wordInput.disabled = true; 
    message.textContent = `time's up! Your score is ${score}.`; 
    playAgainBtn.style.display = 'inline-block'; 
    playAgainBtn.addEventListener('click', startGame);
}

startGame();