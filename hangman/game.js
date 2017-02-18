var inquirer = require('inquirer'); //use inquirer to take in user input
var Word = require('./Word.js'); //only include Word constructor, because the Letter constructor is used in the Word constructor 

//array of words for game to choose from
var words = ['jeff', 'john', 'rhyna', 'douglass', 'krista', 'christa', 'allen', 'frank', 'tim', 'mark', 'hero', 'joey', 'tyler', 'braniel', 'ivonne', 'sheri', 'richard', 'nick'];

//make these global variables to be able to access them anywhere in code
//counters for losses and wins (we increment after guesses go to 0 or word correctly guessed)
var losses = 0;
var wins = 0;
var wordObject;

//choose a random word from words array, turns that word into a Word object from the Word constructor, makes Letter objects from the Letter constructor out of the letters of the word and puts them in the Word Object.
function startGame(){
	var wordToPlay = words[Math.floor(Math.random()*words.length)];
	wordObject = new Word(wordToPlay);
	wordObject.makeAndPushLettersIntoWord();
}

//display the word, number of guesses left, wins, losses
function infoDisplay(){
	console.log('You have ' + wordObject.guesses + ' guesses left.');
	console.log('You guessed the following incorrect letters: ' + wordObject.wrongGuessLets);
	console.log('You won ' + wins + ' times');
	console.log('You lost ' + losses + ' times');
	console.log(wordObject.display());
}

//ask the user if they want to play again, if they do then we run the functions startGame, infoDisplay, askLetter to let them play again.
function wantPlayAgain(){
	inquirer.prompt([
	{
		type: "input",
		name: "play",
		message: "Would you like to play again? type y or n and press enter."
	}
	]).then(function(data){
		if (data.play == 'y') {
			startGame();
			infoDisplay();
			askLetter();
		}else {
			console.log('thanks for playing!')
		}
	});
}

function askLetter(){
	inquirer.prompt([
	{
		type: "input",
		name: "guess",
		message: "What letter do you guess? If you are done then write stop and press enter."
	}
	]).then(function(data){
		//if the user did not type stop then continue
		if (data.guess != 'stop') {
			//if the letter is in the word then run the updateLetter function
			//if the letter is wrong but has been guessed already then don't decrement guesses, tell the user to guess another letter
			//if the guess was wrong and not guessed already then make guesses go down and store the letter as an incorrect guess
			if (wordObject.isLetterInWord(data.guess)){
				wordObject.updateLetter(data.guess);
			}else if(wordObject.wrongGuessLets.indexOf(data.guess) > -1){
				console.log('you already guessed ' + data.guess + '! Try another letter.');
			}else{
				wordObject.guesses--;
				wordObject.wrongGuessLets.push(data.guess);
			}
			
			infoDisplay();

			//if won then say the user won, make wins go up, tell the user how many times they won and ask the user if they want to play again
			// if the user did not win then check if guesses is > 0.
				//if so then ask the user for another letter
				//if not then tell the user they lost, make losses go up, tell the user how many losses they have now and ask the user if they want to play again
			var win = wordObject.checkWon();

			if (win){
				console.log('you won!')
				wins++;
				console.log('You won ' + wins + ' times');
				wantPlayAgain();
			}else if (wordObject.guesses > 0) {
				askLetter();
			}else {
				console.log('you lost');
				losses++;
				console.log('You lost ' + losses + ' times');
				wantPlayAgain();
			}
		}else {
			console.log('Thanks for playing!')
		}
	});
}

//call these functions initially so game starts up when user does 'node game.js' in terminal
startGame();
infoDisplay();
askLetter();