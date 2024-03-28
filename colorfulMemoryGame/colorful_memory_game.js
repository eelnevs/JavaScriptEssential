const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let gameInterval;
const totalTime = 60;
let timeLeft = totalTime;
let totalMatched = 0;

const startbtn = document.getElementById('startbtn');
const resetbtn = document.getElementById('resetbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched') || card.classList.contains('flipped')) {
        return;
    }
    card.classList.add('flipped');
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 300);
    }
}

function checkMatch() {
    gameContainer.removeEventListener('click', handleCardClick)
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
        totalMatched++;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    selectedCards = [];
    if (totalMatched == 12) {
        gameComplete();
    }
    gameContainer.addEventListener('click', handleCardClick);
}

function startGame() {
    timeLeft = totalTime;
    startbtn.textContent = "Restart";
    startbtn.classList.toggle('Start');
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            alert('Game Over!');
            reset();
        }
    }, 1000);
}

function reset(scoreReset = false) {
    clearInterval(gameInterval);
    startbtn.textContent = "Start";
    startbtn.classList.toggle('Start');
    timerElement.textContent = `Time Left: ${totalTime}`;
    gameContainer.innerHTML = "";
    totalMatched = 0;
    if (scoreReset) {
        score = 0;
        scoreElement.textContent = `Score: ${score}`;
    }
}

function gameComplete() {
    alert('You won!');
    reset();
}

startbtn.addEventListener('click', () => {
    if (startbtn.classList.contains('Start')) startGame();
    else reset();
});
resetbtn.addEventListener('click', () => reset(true));