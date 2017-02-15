var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['jeff', 'john', 'rhyna'];

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

function askLetter(){
	inquirer.prompt([
	{
	type: "input",
	name: "guess",
	message: "What letter do you guess? If you are done then say no."},
	]).then(function(data){
		if (data.guess != 'no') {
			wordObject.updateLetter(data.guess);

			console.log(wordObject.display());

			askLetter();
		}
	});
}

askLetter();


