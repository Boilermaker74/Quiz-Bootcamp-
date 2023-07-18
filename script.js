var question = document.getElementById("question");
var card = document.getElementById("card");
var highscore = document.getElementById("highscore");
var foot = document.getElementById("foot");
var hiscoreheader = document.getElementById("hiscoreheader");
var list1 = document.getElementById("list1");
var probe = ["Commonly used data types DO Not Include:","The condition in an if/ else statement is enclosed with _____________.","Arrays in JavaScript can be used to store ___________.","String values must be enclosed within ______ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is:"] 
var response1 =['1.  strings','1.  parenthesis','1.  numbers and strings','1.  commas','1.  JavaScript']
var response2 =['2. alerts','2.  curly brackets','2.other arrays ','2.  curly brackets','2.  teminal/bash']
var response3 =['3. booleans','3.  quotes','3.  booleans','3. quotes','3.  for loops']
var response4 =['4. numbers','4. square brackets','4.  all of the above','4.  parenthesis','4.  console.log']
var startbut = document.getElementById('startbutton');
var goback = document.getElementById('goback');
var button = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');
var button5 = document.getElementById('highscore');
var clearscore = document.getElementById('clearscore');
var hss = localStorage.getItem("num")
var i = 0;
// var count = 0;
var timeEl = document.getElementById("timer")
var setTimer = 75
// Timer Set Point
var k = 0;
var playerInit= [];
var pi =localStorage.getItem("playersNames")
if (pi !==null){
    playerInit= pi.split(",");
}
var playScore = [];
var ps=localStorage.getItem("playersScores")
if (ps !==null){
    playScore= pi.split(",")};


// These variable are from the program to create arrays and add to local storage

var dogs = [];
    var dogs_string;
    var data
    var score = []
    var score_string;
    dogs_string = localStorage.getItem('dogshow');
    score_string = localStorage.getItem('scoresshow');
    

    // if statement protects from null error

    if (dogs_string === null) { }
        else {dogs = dogs_string.split(",");}

        if (score_string === null) { }
        else {score = score_string.split(",");}

// Functions for adding names to highscore list
// Splice keeps the array at 10 elements or less.

function dogshow (){
    if (dogs.length >=10){dogs.splice(9, 1)};   
    dogs.unshift(hss);
  }
    
    function dogMem (){
    dogs_string = dogs.toString()
    localStorage.setItem("dogshow",dogs_string);
    }

    function scoreshow (){
        if (dogs.length >=10){score.splice(9, 1)}
        score.unshift(setTimer);
   }
    
        function scoreMem (){
        score_string = score.toString()
        localStorage.setItem("scoresshow",score_string);}


    


if (k===0)
{
    blankscreen ();
    document.getElementById("foot").style.display="none";
    document.getElementById("hiscoreheader").style.display = ("none");
    document.getElementById("highscorelist").style.display = ("none");
    // foot.innerHTML =  ""; 
     k++;
} 

if (k===1)
{
    blankscreen ();
    document.getElementById("foot").style.display="none";

} 

function start() {
    blankscreen ()
    timey = setInterval(displayTime, 1000);
    document.getElementById("startbutton").style.display="none";
    document.getElementById("begin").style.display="none";
    fullscreen();
}

// Setup Timer

function displayTime() {
    setTimer--
    timeEl.textContent = "Time: " + setTimer 
    if (setTimer <= 0) {
      clearInterval(timey)
      timeEl.textContent = "Game Over!"
       endQuiz()
    }
    }

function clearlast (){
    document.getElementById("foot").style.display="none";
    document.getElementById("foot").style.borderColor = "#fff";

}


function init () {
    
    fillQuestion()
    fillButton1 ()
    fillButton2 ()
    fillButton3 ()
    fillButton4 ()
    i++

}

// Defining buttons
function fillQuestion  ()  {
    let ele = document.getElementById('question');
    ele.innerHTML =  probe[i];
   }

function fillButton1  ()  {
    let ele = document.getElementById('1');
    ele.innerHTML =  response1[i];
    }

function fillButton2  ()  {
    let ele = document.getElementById('2');
    ele.innerHTML =  response2[i];
    }

function fillButton3  ()  {
        let ele = document.getElementById('3');
        ele.innerHTML =  response3[i];
        }

function fillButton4  ()  {
            let ele = document.getElementById('4');
            ele.innerHTML =  response4[i];
            
            if (i === 5)
            {   
                endQuiz ()
            } }    

function miceIn ()
{button.addEventListener("mouseenter",eraseWrong);
button2.addEventListener("mouseenter",eraseWrong);
button3.addEventListener("mouseenter",eraseWrong);
button4.addEventListener("mouseenter",eraseWrong)}

function wrongAnswer ()
{
    document.getElementById("foot").style.borderColor = "rgb(158, 156, 154";
    document.getElementById("foot").style.color ="rgb(158, 156, 154)";
    foot.innerHTML =  "Wrong!"; 
    setTimer-=10;
}

function correctAnswer (){
    document.getElementById("foot").style.borderColor = "rgb(158, 156, 154)";
    document.getElementById("foot").style.color ="rgb(158, 156, 154)";
    foot.innerHTML =  "Correct!";
}

function makehsscreen () {
    blankscreen ()
    // NEVERERASE
    hss = localStorage.getItem("num")
    document.getElementById("hiscoreheader").style.display = "";
    document.getElementById("highscorelist").style.display = "";

// Add high scores to list

// arrays to hold initials and scores


dogshow ()
dogMem ()
scoreshow ()
scoreMem ()

// This writes out the High score list

let list = document.getElementById("highscorelist");
for (zz = 0; zz < dogs.length; zz++) {
    let li = document.createElement('li');
    li.innerText = dogs[zz] + " - " + score[zz];
    list.appendChild(li);
    pis = playerInit.toString
    localStorage.setItem("playersNames",pis)
    pss = playScore.toString
    localStorage.setItem("playersScores",pss)
}
}  



function eraseWrong(){
    document.getElementById("foot").style.borderColor = "white";
    document.getElementById("foot").style.color ="white";
}


function blankscreen () {
    document.getElementById("foot").style.display="none";
    document.getElementById("card").style.display="none";
    document.getElementById("highscore").style.display="none";
    document.getElementById("timer").style.display="none"; 
    document.getElementById("final").style.display = ("none");
    document.getElementById("message").style.display = ("none");
    document.getElementById("initials").style.display = ("none");
    document.getElementById("fname").style.display = ("none");
    document.getElementById("ibut").style.display = ("none");
    document.getElementById("hiscoreheader").style.display = ("none");
    document.getElementById("highscorelist").style.display = ("none");
    // NEVERERASE
    hss = localStorage.getItem("num")

}
function fullscreen () {    
document.getElementById("foot").style.display="";
document.getElementById("card").style.display="";
document.getElementById("highscore").style.display="inline";
document.getElementById("timer").style.display="inline";

}

function info1 () {
    
    fillQuestion()
    fillButton1 ()
    fillButton2 ()
    fillButton3 ()
    fillButton4 ()
    i++
    k++
    if (i===3) {
     correctAnswer();}
        else{
      wrongAnswer()
    }
   }

   function info2 () {
    
    fillQuestion()
    fillButton1 ()
    fillButton2 ()
    fillButton3 ()
    fillButton4 ()
    i++
    k++
    if (i===2) {
        correctAnswer();}
        else{
       wrongAnswer()
    }
   }

   function info3 () {
    
    fillQuestion()
    fillButton1 ()
    fillButton2 ()
    fillButton3 ()
    fillButton4 ()
    i++
    k++
    if (i=== 5 ) {
        correctAnswer();}
        else{
       wrongAnswer()
    }
   }

   function info4 () {
    
    fillQuestion()
    fillButton1 ()
    fillButton2 ()
    fillButton3 ()
    fillButton4 ()
    i++
    k++
    if (i===4 || i === 6) {
        correctAnswer();}
            else{
            wrongAnswer()
        }
   }

//   function that sets up the scores in local memory and displays the high score list

function highscorelist(){
    blankscreen()
    document.getElementById("two symbol initial message").style.display = ("none"); 
    document.getElementById("hiscoreheader").style.display = ("");
    document.getElementById("hiscoreheader").style.fontSize = ("45px");
    document.getElementById("highscorelist").style.display = ("");
}



   function endQuiz() {
    if (setTimer <= 0) {
        setTimer = 0;
        clearInterval(timey);
    }
    document.getElementById("foot").style.display=""
    document.getElementById("card").style.display="none";
    document.getElementById("foot").style.marginTop ="30%";
    document.getElementById("final").style.display = "block"
    document.getElementById("message").style.display = "block"
    document.getElementById("initials").style.display = "inline-block"
    document.getElementById("fname").style.display = "inline-block"
    document.getElementById("ibut").style.display = "inline-block"
    document.getElementById("goback").style.display = ("")
    document.getElementById("clearscore").style.display = ("")
    var endMess = document.getElementById("message");
    endMess.textContent += setTimer +".";

    if (setTimer > 0) {
        clearInterval(timey)
        timeEl.textContent = "Game Over!"
    }

    setTimeout(eraseWrong, 1500); 

    // function for endgame and high score initials

    var highscoreinit
    var twoserrorm = document.getElementById("two symbol initial message");
    // document.getElementById("two symbol initial message").style.margin ="10%";

   
    function message () {
    highscoreinit = document.getElementById('fname').value;
        if (highscoreinit.length !== 2){
            twoserrorm.innerHTML = "Please enter a 2 symbol initial! "+highscoreinit; }
            else {
                twoserrorm.innerHTML = ""
                localStorage.setItem("num",highscoreinit);
                makehsscreen ()
            }
        }
    ibut.addEventListener("click", message);
    
    }

// This function sets up the high score screen

    function displayhs(){
        document.getElementById("hiscoreheader").style.display = ("");
        document.getElementById("hiscoreheader").style.fontSize = ("45px");
        document.getElementById("highscorelist").style.display = ("");
        // document.getElementById("highscorelist").style.marginTop = ("5%");
        document.getElementById("goback").style.display = ("")
        document.getElementById("clearscore").style.display = ("")
        document.getElementById("highscore").style.display="none";
        document.getElementById("timer").style.display="none"; 
        document.getElementById("final").style.display = ("none")
        document.getElementById("message").style.display = ("none")
        document.getElementById("initials").style.display = ("none")
        document.getElementById("fname").style.display = ("none")
        document.getElementById("ibut").style.display = ("none")
        document.getElementById("card").style.display="none";
        document.getElementById("foot").style.display="none";

        let list = document.getElementById("highscorelist");
        for (zz = 0; zz < dogs.length; zz++) {
            let li = document.createElement('li');
            li.innerText = dogs[zz] + " - " + score[zz];
            list.appendChild(li);
            pis = playerInit.toString
            localStorage.setItem("playersNames",pis)
            pss = playScore.toString
            localStorage.setItem("playersScores",pss)
        }
     }
   
     // function to reset high scores

    function resetscores (){
    localStorage.removeItem("dogshow");
    localStorage.removeItem("scoresshow")
  
    reload();
}
    function reload (){
    location.reload();   
    }

init()


// listen for button clicks
startbut.addEventListener("click",start)
goback.addEventListener("click",init)
button.addEventListener("click",info1)
button2.addEventListener("click",info2)
button3.addEventListener("click",info3)
button4.addEventListener("click",info4)
button5.addEventListener("click",displayhs)

clearscore.addEventListener("click",resetscores)

// removes footer correct or wrong message when user hovers over answer buttons

button.addEventListener("mouseout",miceIn)
button2.addEventListener("mouseout",miceIn)
button3.addEventListener("mouseout",miceIn)
button4.addEventListener("mouseout",miceIn)

