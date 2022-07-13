const userName = document.querySelector('.username');
const submitButton = document.querySelector('.btn-submit');
const score = document.querySelector('.score');

const currentScore = localStorage.getItem('currentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
score.innerText = currentScore ;

userName.addEventListener('keyup', () => {
    submitButton.disabled = !userName.value;
});

submitButton.addEventListener('click',saveScore);

function saveScore(e) {
    e.preventDefault();
    const score = {
        score: currentScore,
        name: userName.value,
    };
    highScores.push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/pages/leaderboard.html');
};