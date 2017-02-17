var Letter = require('./Letter.js');

function Word(word){
	this.word = word;
	this.letters = [];
	this.guesses = 7;
	this.wrongGuessLets = [];
}

Word.prototype.makeAndPushLettersIntoWord = function(){
	for (var i=0; i< this.word.length; i++){
		var lett = new Letter(this.word[i]);
		this.letters.push(lett);
	}
}

Word.prototype.display = function(){
	var str = "";
	for (var i=0; i < this.letters.length; i++){
		str = str + this.letters[i].display();
	}

	return str;
}

Word.prototype.updateLetter = function(guess){
	//check all of the letter objects and see if the guess matches
	//if it does I update that letter's found to true
	for (var i=0; i<this.letters.length; i++){
		if (this.letters[i].letter == guess) this.letters[i].found = true;
	}
}

Word.prototype.checkWon = function(){
	for (var i=0; i<this.letters.length; i++){
		if (this.letters[i].found == false) return false;
	}

	return true;
}

module.exports = Word;














