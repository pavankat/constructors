relating constructors

you need to determine the constructors that you will use

and then the relationship between them



tic tac toe

	board
		would have boxes inside

		9 boxes would be here

		checkIfWin function inside of here 
			loop over the boxes and check if there's a winner

		createBoxes 
			this function would use the box constructor to create a box and push the box into the boxes property of the board and STOP after 9 boxes are pushed in

	box
		horizontal: 0
		vertical: 0
		it can be either x, o or nothing
		if clicked on it will be whatever the player is 
			unless it was already clicked on

	board = {
		boxes: [
			{
				horizontal: 0,
				vertical: 0,
				value: 'x'
			},
			{
				horizontal: 0,
				vertical: 1,
				value: 'x'
			},
			{
				horizontal: 0,
				vertical: 2,
				value: 'x'
			}
		]
	}

classroom

	class
		students : [student, student, student, student]
		capacity: 8
		addStudent -> this function will take in a student and add it to the students property BUT ONLY if the students array is 8 or less
		subject:

	student
		age: 

hangman
	Word
		word: "cat",
		letters: [
			c letter object
			a letter object
			t letter object
		]

	Letter
		letter: 'c',



	what's the relationship between the word and the letter going to be?


	_ o _

	wrong: a

Word
	word: 'dog'
	letters: [
		d Letter object
		o Letter object
		g Letter object
	]
	display: 
		var str = '';

		for loop over the letter objects and it's going to run the display on each letter object
			str = str + letter.display();

		return str
	init: 
		loop over the word and create letter objects and push those letter objects into the letters property


d Letter object
	letter: d
	found: false
	display: return _
o Letter object
	letter: o
	found: true
	display: return o
g Letter object
	letter: g
	found: false
	display: function 
		check found 
			return the letter
		else
			return _









































