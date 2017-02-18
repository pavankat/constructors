//take in the letter because we need to store it
function Letter(letter){
	this.letter = letter; //store the letter
	this.found = false; //default to false because the letter is not found when the game starts
}

//if found is true then show the letter. Otherwise show an _
Letter.prototype.display = function(){
	if (this.found) return " " + this.letter + " ";
	else return ' _ ';
}

//let another program use the Letter constructor function. All the functions on the prototype will also be exported because the constructor and its prototype are connected by default
module.exports = Letter;