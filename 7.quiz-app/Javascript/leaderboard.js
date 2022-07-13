const highScoreList = document.querySelector(".highscorelist");
const clrHighScoresBtn = document.querySelector("#btn-clear")
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");


clrHighScoresBtn.addEventListener('click', ()=> {
    highScores = []; // Clear Array of High Scores
    //remove from local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/pages/leaderboard.html');
})

   
    