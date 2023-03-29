const ficBox = document.getElementById("ficFacFoe");
const newGame = document.getElementById("newGame");
const switcher = document.getElementsByClassName("fic-fac-foe");
const squares = document.getElementsByClassName("square");
const feedback = document.querySelector("h2");
const nameGame = document.querySelector("h1");

let i = 1;
let turns = 0,
  XO = "X";
let gameRules = true;
ficBox.addEventListener("click", changeGame);
newGame.addEventListener("click", startGame);

const sqs = {
  s1: 1,
  s2: 2,
  s3: 3,
  s4: 4,
  s5: 5,
  s6: 6,
  s7: 7,
  s8: 8,
  s9: 9,
  s10: 10,
  s11: 11,
  s12: 12,
  s13: 13,
  s14: 14,
  s15: 15,
  s16: 16,
  s17: 17,
  s18: 18,
  s19: 19,
  s20: 20,
  s21: 21,
  s22: 22,
  s23: 23,
  s24: 24,
  s25: 25,
};

function changeGame() {
  nameGame.textContent = "Fic-Fac-Foe-Fou-Fiv";
  if (i % 2 !== 0) {
    gameRules = false;
    for (const element of switcher) {
      element.style.display = "flex";
      i++;
    }
    startGame();
  } else if (i % 2 === 0) {
    gameRules = true;
    nameGame.textContent = "Tic-Tac-Toe";
    for (const element of switcher) {
      element.style.display = "none";
    }
  }
  startGame();
  i++;
}

function startGame() {
  XO = "X";
  turns = 0;
  feedback.textContent = "X's turn..";
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    squares[i].id = i + 1;
    sqs["s" + (i + 1)] = i + 1;
    squares[i].addEventListener("click", addXO);
  }
}

function addXO() {
  turns++;
  this.textContent = XO;
  this.removeEventListener("click", addXO);
  sqs["s" + this.id] = XO;
  XO == "X" ? (XO = "O") : (XO = "X");
  feedback.textContent = XO + "'s turn..";
  if (turns >= 5) checkForWinner();
  console.log(XO);
  console.log(this.id);
}

function checkForWinner() {
  if (gameRules) {
    if (
      (sqs.s1 == sqs.s2 && sqs.s1 == sqs.s3) ||
      (sqs.s1 == sqs.s7 && sqs.s1 == sqs.s13) ||
      (sqs.s1 == sqs.s6 && sqs.s1 == sqs.s11) ||
      (sqs.s2 == sqs.s7 && sqs.s2 == sqs.s12) ||
      (sqs.s3 == sqs.s8 && sqs.s3 == sqs.s13) ||
      (sqs.s3 == sqs.s7 && sqs.s3 == sqs.s11) ||
      (sqs.s6 == sqs.s7 && sqs.s6 == sqs.s8) ||
      (sqs.s11 == sqs.s12 && sqs.s11 == sqs.s13)
    ) {
      XO == "X" ? (XO = "O") : (XO = "X");
      feedback.textContent = "Congrats!";
      XO = "";
    }
    if (turns == 9) feedback.textContent = "Game Over";
  } else {
    if (
      (sqs.s1 == sqs.s2 && sqs.s2 == sqs.s3 && sqs.s3 == sqs.s4) ||
      (sqs.s1 == sqs.s7 && sqs.s7 == sqs.s13 && sqs.s13 == sqs.s19) ||
      (sqs.s1 == sqs.s6 && sqs.s6 == sqs.s11 && sqs.s11 == sqs.s16) ||
      (sqs.s2 == sqs.s3 && sqs.s3 == sqs.s4 && sqs.s4 == sqs.s5) ||
      (sqs.s2 == sqs.s7 && sqs.s7 == sqs.s12 && sqs.s12 == sqs.s17) ||
      (sqs.s2 == sqs.s8 && sqs.s8 == sqs.s14 && sqs.s14 == sqs.s20) ||
      (sqs.s3 == sqs.s8 && sqs.s8 == sqs.s13 && sqs.s13 == sqs.s18) ||
      (sqs.s4 == sqs.s9 && sqs.s9 == sqs.s14 && sqs.s14 == sqs.s19) ||
      (sqs.s4 == sqs.s8 && sqs.s8 == sqs.s12 && sqs.s12 == sqs.s16) ||
      (sqs.s5 == sqs.s9 && sqs.s9 == sqs.s13 && sqs.s13 == sqs.s17) ||
      (sqs.s5 == sqs.s10 && sqs.s10 == sqs.s13 && sqs.s13 == sqs.s20) ||
      (sqs.s6 == sqs.s7 && sqs.s7 == sqs.s8 && sqs.s8 == sqs.s9) ||
      (sqs.s6 == sqs.s11 && sqs.s11 == sqs.s16 && sqs.s16 == sqs.s21) ||
      (sqs.s6 == sqs.s12 && sqs.s12 == sqs.s18 && sqs.s18 == sqs.s24) ||
      (sqs.s7 == sqs.s8 && sqs.s8 == sqs.s9 && sqs.s9 == sqs.s10) ||
      (sqs.s7 == sqs.s12 && sqs.s12 == sqs.s17 && sqs.s17 == sqs.s22) ||
      (sqs.s7 == sqs.s13 && sqs.s13 == sqs.s19 && sqs.s19 == sqs.s25) ||
      (sqs.s8 == sqs.s13 && sqs.s13 == sqs.s18 && sqs.s18 == sqs.s23) ||
      (sqs.s9 == sqs.s14 && sqs.s14 == sqs.s19 && sqs.s19 == sqs.s24) ||
      (sqs.s9 == sqs.s13 && sqs.s13 == sqs.s17 && sqs.s17 == sqs.s21) ||
      (sqs.s10 == sqs.s14 && sqs.s14 == sqs.s18 && sqs.s18 == sqs.s22) ||
      (sqs.s10 == sqs.s15 && sqs.s15 == sqs.s20 && sqs.s20 == sqs.s25) ||
      (sqs.s11 == sqs.s12 && sqs.s12 == sqs.s13 && sqs.s13 == sqs.s14) ||
      (sqs.s12 == sqs.s13 && sqs.s13 == sqs.s14 && sqs.s14 == sqs.s15) ||
      (sqs.s16 == sqs.s17 && sqs.s17 == sqs.s18 && sqs.s18 == sqs.s19) ||
      (sqs.s17 == sqs.s18 && sqs.s18 == sqs.s19 && sqs.s19 == sqs.s20) ||
      (sqs.s21 == sqs.s22 && sqs.s22 == sqs.s23 && sqs.s23 == sqs.s24) ||
      (sqs.s22 == sqs.s23 && sqs.s23 == sqs.s24 && sqs.s24 == sqs.s25)
    ) {
      feedback.textContent = "Congrats!";
      XO == "X" ? (XO = "O") : (XO = "X");
      XO = "";
      if (turns == 25) feedback.textContent = "Game Over";
      return;
    }
  }
}
