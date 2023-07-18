# Project 4 Quiz
This is the final project
![Getting Started]
(image.png)

















First created a timer

Next created a start button to begin game

Next worked on layout for game with buttons

Started with button boxes

Made headlines "timer and view high scores

Made them display in one line with timer floating left

Made card for question and added buttions

Started process of adding question to card via javascript

Trying to make a function to tally correct and wrong responses

Added text from quiz to my strings

I changed the answers on the quiz because choice 1 and 2 were never correct. Now for question 1 the correct answer is 2 and
for question 2 the correct answer is 1.

Tried to use a variable y to record answer choice, but it was stored locally in a function.

Global variable "i" was used to determine if answer choice was correct or not.

Added a footer where the "correct" or "wrong' message will be displayed.

Got the timer to display "game over message" when it reaches zero value

Got a wrong answer to penilize the player 10 seconds on the timer using Variable -=10

Added a function  to blank screen when the timer reaches zero

Started working on the start screen

Created a replica of the start screen which will be the starting point of the program and is where the program will return to after the quiz is
complete, if the user chooses to start again.

Cleaned up the footer so the message displayed resembles the example given by the university.

When the user chooses an answer, the program responds with a display footer of correct or wrong. I create a function, eraseWrong(),  that removes that display (function when the user hovers over a selection of answers to copy the example the university provided.

UNfortunately, now the message disappears immediately because when the user picks an answer, the program registers a mouse hover and erases 
the message.

Added a new function "micein", so that the user must leave the question and then re-enter before the displayed answer is erased.

I couldn't get the footer border to disappear prior to the first question display. I solved this by adding a script line in the HTML changing the footer border color to white. I later changed the color back to original in the javascript function for displaying correct and wrong answers.

I am getting a weird bug that hides the Enter initials screen when the time runs out. It only happens randomly. I spent 4 days trying to correct it. About 42 hous total.

Remove foot.innerHTML =  ""; at line 29 and 37 as it doesn't appear to do anything.

Removed document.getElementById("foot").style.borderColor = "white"; at line 213 as it doesn't appear to do anything.

Removed else statement at line 226 as it doesn't appear to do anything.


Changed statement document.getElementById("foot").style.display="none" to  document.getElementById("foot").style.display="" at line 210. This removed the bug. It took 40 hours to find this! Ha!

added line 213 to remove negative scores
if (settimer < 0) {
    setTimer = 0}

Added 
 if (i <= 5 && setTimer <= 0) {
        document.getElementById("foot").style.borderColor = "white";
        document.getElementById("foot").style.color = "white";
    }
at line 216 to remove results message if timer runs out

If the quiz ends and the player has a footer display with the result of the last response, the player needs time to read that result. Added the command setTimeout(eraseWrong, 1500); to the endquiz function at line 236. Will erase the last result footer but still allow the user time to see it.

Added a function to accept user input as an initial.

Added an error message if the user inputs anything other than 2 symbols for the initials

Began function for High score screen and storing to local storeage 

Used a class to style the fonts of each elements of the list

Created the final buttons for the game and assigned them multiple classes

Using inputs to append my list of high scores. Had difficulty registering the user imput so that the computer could read it.

using a for loop to add to high scores.

added an array to put scores into table.

Need to create a way to add to an array.

