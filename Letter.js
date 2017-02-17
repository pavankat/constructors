function Letter(letter){
	this.letter = letter;
	this.found = false;
}

Letter.prototype.display = function(){
	if (this.found) return " " + this.letter + " ";
	else return ' _ ';
}

module.exports = Letter;