
"use strict";

class HangmanGame {
    constructor(word, numberOfGuesses){
        this.charactersArray = word.toLowerCase().split(''),
        this.numberOfGuesses = numberOfGuesses,
        this.guessedLetters = [],
        this.status = "playing"
    }
    get getStatusMessage(){
        if( this.status === "playing"){
            return `Guesses left: ${this.numberOfGuesses}`;
        } else if( this.status === "failed"){
           return `Nice try! The word was "${this.charactersArray.join('')}"`; 
        } else{
            return `Great work you guessed the word!`;
        }
    }
    updateStatus(){
        const finished = this.charactersArray.every((character) =>{
            return this.guessedLetters.includes(character) || character === " ";
        });
        
          if (this.numberOfGuesses === 0){
            this.status = "failed";
        } else if(finished){
            this.status = "finished";
        } else {
            this.status = "playing";
        }
    }
    addGuess(guess){
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.charactersArray.includes(guess)

        if (this.status !== "playing"){
            return;
        }

        if (isUnique){
            this.guessedLetters.push(guess);
        }
        if (isUnique && isBadGuess) {
            this.numberOfGuesses--;
            }
    }
    get getWord(){
        let result ='';
        for(let count = 0 ; count< this.charactersArray.length; count++){
                if (this.guessedLetters.includes(this.charactersArray[count]) || 
                    this.charactersArray[count] === ' '){
                    result += this.charactersArray[count];
                } else{
                    result += '*';
                }
        }
    return result;
    }
    toString(){
        return console.log(
            `Number of guesses is : ${this.numberOfGuesses} characters of the word are : ${this.charactersArray}
                `);
    }
}

export {HangmanGame as default}