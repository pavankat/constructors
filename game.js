var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['jeff', 'john', 'rhyna', 'douglass', 'krista', 'christa', 'allen', 'frank', 'tim', 'mark', 'hero', 'joey', 'tyler', 'braniel', 'ivonne', 'sheri', 'richard', 'nick'];
var losses = 0;
var wins = 0;
var wordObject;

function startGame(){
	var wordToPlay = words[Math.floor(Math.random()*words.length)];
	wordObject = new Word(wordToPlay);
	wordObject.makeAndPushLettersIntoWord();
}

function wordDisplay(){
	console.log('You have ' + wordObject.guesses + ' guesses left.');
	console.log('You guessed the following incorrect letters: ' + wordObject.wrongGuessLets);
	console.log('You won ' + wins + ' times');
	console.log('You lost ' + losses + ' times');
	console.log(wordObject.display());
}

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
			wordDisplay();
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
		if (data.guess != 'stop') {
			if (wordObject.word.indexOf(data.guess) > -1){
				wordObject.updateLetter(data.guess);
			}else if(wordObject.wrongGuessLets.indexOf(data.guess) > -1){
				console.log('you already guessed ' + data.guess + '! Try another letter.');
			}else{
				wordObject.guesses--;
				wordObject.wrongGuessLets.push(data.guess);
			}
			
			wordDisplay();

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

startGame();
wordDisplay();
askLetter();