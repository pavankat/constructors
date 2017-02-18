# Week 11 Assignment

### Overview
In this assignment, you'll revisit the Hangman homework from week three and empower it with JavaScript constructors. Unlike the original front-end app, this Hangman game will run entirely with Node.js using the inquirer package.

## Instructions
1. Create a new GitHub repository called `hangman-command-line`, then clone it to your computer.

2. Inside your local `hangman-command-line` folder, make files called `Letter.js`, `Word.js` and `game.js`.

3. With the files from Step 2, you'll put together a console-based hangman app that incorporates objects, user-input and constructors in its solution.
  * Both `Letter.js` and `Word.js` should be constructor files:
    * `Word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
    * `Letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
  * `game.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
    * The app should ask the user if they want to play again when a player guesses the correct word or runs out of guesses.

### Tips

1. Program the game one piece at a time! Break the program down into fragments rather than chipping away little by little at giant, abstract problem. 
  1. Focus on one part of the smaller problem and get some code working. 
  2. Rinse and repeat (and remember, `console.log` is your friend).
2. Try your best to deliver a *working/playable* game by the end of the deadline. 
  * Submit your app whether you finish or not; if you don't show us anything then we won't be able to help you with whatever programming issues you encountered this week.
3. **Working game > pretty dud**. We're focusing on game mechanics, not just on the look and feel of your app.

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.