import HangmanGame from "./javascript";
import {getData} from "./requests";

"use strict";

const puzzleWordElement = document.querySelector("#word");
const numberOfGuessesElement = document.querySelector("#guesses");
const resetButton = document.querySelector("#reset");
let firstInstanceOfHangMan;

//addListener
window.addEventListener('keypress', function(event){
    let guess = String.fromCharCode(event.charCode);
    firstInstanceOfHangMan.addGuess(guess);
    firstInstanceOfHangMan.updateStatus();
    renderGame();
})

const startGame = async () =>{
    const puzzle = await getData(3);
    firstInstanceOfHangMan = new HangmanGame(puzzle, 14 );
    renderGame();
}
resetButton.addEventListener("click", startGame);

const renderGame= ()=>{
    puzzleWordElement.innerHTML = "";
    numberOfGuessesElement.textContent = firstInstanceOfHangMan.getStatusMessage;
    firstInstanceOfHangMan.getWord.split("").forEach(letter=>{
        let letterElement = document.createElement('span');
        letterElement.textContent = letter;
        puzzleWordElement.appendChild(letterElement);
    })
};

startGame();
