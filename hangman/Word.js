var Letter = require('./Letter.js'); //include the Letter constructor function here because we use it to turn our word into letter objects and store them in the Word constructor

//take in the word so we can store it.
//we initialize the rest of the properties in the Word constructor
function Word(word){
	this.word = word; //store the word as a string
	this.letters = []; //store letter objects of the word
	this.guesses = 7; //start off guesses at 7
	this.wrongGuessLets = []; //store all wrong guesses
}

//this function loops over the word string and creates a letter object (using the Letter constructor) for each letter in the word and pushes that letter object into the letters property. 
Word.prototype.makeAndPushLettersIntoWord = function(){
	for (var i=0; i< this.word.length; i++){
		var lett = new Letter(this.word[i]);
		this.letters.push(lett);
	}
}

//this function loops over the letters property and runs the display function on each letter and adds the result to a string str. After done, we return str and that's what our word should be displayed as
Word.prototype.display = function(){
	var str = "";
	for (var i=0; i < this.letters.length; i++){
		str = str + this.letters[i].display();
	}

	return str;
}

//check all of the letter objects and see if the guess matches
//if it does I update that letter's found to true
Word.prototype.updateLetter = function(guess){
	for (var i=0; i<this.letters.length; i++){
		if (this.letters[i].letter == guess) this.letters[i].found = true;
	}
}

//loop through the letter objects and if any of the letters are not found then return false because the user has not won yet
//otherwise return true because all of the letters have been found
Word.prototype.checkWon = function(){
	for (var i=0; i<this.letters.length; i++){
		if (this.letters[i].found == false) return false;
	}

	return true;
}

//if a letter is in the word then return true, otherwise return false
Word.prototype.isLetterInWord = function(lett){
	return this.word.indexOf(lett) > -1;
}

//let another program use the Word constructor function. All the functions on the prototype will also be exported because the constructor and its prototype are connected by default.
module.exports = Word;














