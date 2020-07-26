
//block none InsertPlayersNames
// document.getElementById("MainHide").style.display= "none"
// document.getElementById("Data").style.display= "block"
const StadiumAreaElem = document.getElementById("StadiumAr");
const TargetElem = document.getElementById("showTargetPosition");
const Player1Elem = document.getElementById("showPlayer1Position");
const Player2Elem = document.getElementById("showPlayer2Position");
var mins = 0.5;
var secs = mins * 60;
mySound = new GameSound("Sounds/GameSound.wav");
GetTargetSound = new GameSound("Sounds/Goal.wav");
WinnerSound= new GameSound("Sounds/the winner is.wav");
tyAgainSound =new GameSound("Sounds/TryAgainSOund.wav");




// to check the winner and pop up the current msg

const showPlayer1Position = document.getElementById("showPlayer1Position");
const showPlayer2Position = document.getElementById("showPlayer2Position");
const showTargetPosition = document.getElementById("showTargetPosition");
const winnerPopUp = document.getElementById("winnerPopUp");
const NoWinner = document.getElementById("NoWinner");

function Mute() {
      var ButText = document.getElementById("MuteBtn").value;
    if( ButText==="Mute"){
     mySound.MuteSound();
    document.getElementById("MuteBtn").innerHTML='<i class="fas fa-volume-up"></i>';
    document.getElementById("MuteBtn").value='UnMute';

}
    else{
 
        document.getElementById("MuteBtn").innerHTML='<i class="fas fa-volume-mute"></i>';; 
        document.getElementById("MuteBtn").value='Mute';
        mySound.play();
    }
 

}
 

var flag = 0;
var TFlag = 0;
 const ChangeAreaCollor =document.getElementById("StadiumAr");
ChangeAreaCollor.style.borderColor = getRandomColor();
function AddPlayersName() {
     
    //NoWinner.style.display="block"
    showPlayer1Position.style.display = "block";
    showPlayer2Position.style.display = "block";
    showTargetPosition.style.display = "block";
    winnerPopUp.style.display = "none";
    NoWinner.style.display = "none";
    ChoosingTime();
    mySound.playLoop();
    // here we want to create a func to get a data from the user 
    document.getElementById("FistPlayerscore").innerHTML = "0";
    document.getElementById("SecondPlayerscore").innerHTML = "0";
    Player1Elem.style.left = '520px';
    Player1Elem.style.top = '400px';
    document.body.appendChild(Player1Elem);
    Player2Elem.style.position = 'absolute'
    Player2Elem.style.left = '1550px';
    Player2Elem.style.top = '400px';

    document.body.appendChild(Player2Elem);
    TargetElem.style.left = '1100px';
    TargetElem.style.top = '500px';
    document.body.appendChild(TargetElem);
    ResetTime();
    //mins = 0.2; 
    //calculate the seconds 
    // secs = mins * 60;
    //alert("RESET")
    if (flag == 0) {
        // SetTimerGame();
        ChoosingTime();
        flag = 1;
    }
    if (TFlag == 0) {
        SetTimerGame();
        ChoosingTime()
        TFlag = 1;
    }
}
//elemid.style.top
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var rect = Player1Elem.getBoundingClientRect();
var rect2 = Player2Elem.getBoundingClientRect();
var StArea = StadiumAreaElem.getBoundingClientRect();
var TargetArea = TargetElem.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(rect2.top, rect2.right, rect2.bottom, rect2.left);
console.log(StArea.top, StArea.right, StArea.bottom, StArea.left);
console.log(TargetArea.top, TargetArea.right, TargetArea.bottom, TargetArea.left);

var Scour = 0;
Player1Movinig = new Game(rect.top, rect.left, Player1Elem, TargetElem, Scour);
Player2Movinig = new Game(rect2.top, rect2.left, Player2Elem, TargetElem, Scour);
TargetPosition = new Target(TargetElem, Player1Elem, Player2Elem);
Player1Class = new Player(Player1Elem, document.getElementById("firstPlayerName1"), document.getElementById("FistPlayerscore").innerHTML);
Player2Class = new Player(Player2Elem, document.getElementById("secondPlayerName2"), document.getElementById("SecondPlayerscore").innerHTML);

document.addEventListener('keyup', (e) => {

    TargetPosition.CheckTargetPosition(Player1Elem, Player2Elem, TargetElem, Player1Class)
 
    if (e.code === 'KeyW' || e.code === 'KeyS' || e.code === 'KeyA' || e.code === 'KeyD') {
        rect2 = document.getElementById("showPlayer2Position").getBoundingClientRect();
        Player2Movinig.setNewPosition(rect2.top, rect2.left);
        Player2Movinig.MovePlayer(e.code);
    }

    else if (e.code == 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowUp') {
        rect = document.getElementById("showPlayer1Position").getBoundingClientRect();
        Player1Movinig.setNewPosition(rect.top, rect.left);
        Player1Movinig.MovePlayer(e.code);
    }

});

//countdown function is evoked when page is loaded 
function countdown() {
    setTimeout('Decrement()', 60);
}
//Decrement function decrement the value. 
function SetTimerGame() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        //if less than a minute remaining 
        //Display only seconds value. 
        if (seconds < 59) {
            seconds.value = secs;
        }
        //Display both minutes and seconds 
        //getminutes and getseconds is used to 
        //get minutes and seconds 
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        //when less than a minute remaining 
        //colour of the minutes and seconds 
        //changes to red 
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        //if seconds becomes zero, 
        //then page alert time up 
        if (mins < 0) {
            //alert('time up'); 
            minutes.value = 0;
            seconds.value = 0;
            CheckWinner();
            TFlag = 0;
        }
        //if seconds > 0 then seconds is decremented 
        else {
            secs--;
            setTimeout('SetTimerGame()', 1000);
        }
    }
}

function getminutes() {
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away 
    //from total seconds remaining 
    return secs - Math.round(mins * 60);
}
//end test

function CheckWinner() {
    var Scoure1 = document.getElementById("FistPlayerscore").textContent;;
    var Scoure2 = document.getElementById("SecondPlayerscore").textContent;;
    var Player1NName = document.getElementById("firstPlayerName1").textContent;
    var Player2NName = document.getElementById("secondPlayerName2").textContent;
    if (parseInt(Scoure1) > parseInt(Scoure2)) {
        //alert("Player 1 "+Player1NName + " The Winner!" )
         // var element = document.getElementById("MainBack");
         //element.className+=("BackGroundAnimation");
         ShowWinnerPlayer1();
        mySound.MuteSound();
        WinnerSound.play();
    }
    else if (parseInt(Scoure1) < parseInt(Scoure2)) {
        //alert("Player 2 "+Player2NName + " The Winner!" )
       // document.getElementById("MainBack").classList.add("BackGroundAnimation");
         ShowWinnerPlayer2();
        mySound.MuteSound();
        WinnerSound.play();
    }
    else if (parseInt(Scoure1) == parseInt(Scoure2)) {

        //alert("No Winner Equal Scoure Try Again ...(^_^)!")
        ShowNoWinner();
        tyAgainSound.play();
        //ShowNoWinner();
    }

}

function ResetTime() {
    ChoosingTime();
}

// Show The winner PopUp 
 

function ShowWinnerPlayer1() {
    showPlayer1Position.style.display = "none";
    showPlayer2Position.style.display = "none";
    showTargetPosition.style.display = "none";
    winnerPopUp.style.display = "block";
    document.getElementById("123").innerHTML = "The Winner is : " + document.getElementById("firstPlayerName1").textContent;


}
function ShowNoWinner(){
    showPlayer1Position.style.display = "none";
    showPlayer2Position.style.display = "none";
    showTargetPosition.style.display = "none";
    NoWinner.style.display="block"
    document.getElementById("NoWinner123").innerHTML = "Ops No Winner!!";

}
function ShowWinnerPlayer2() {
    showPlayer1Position.style.display = "none";
    showPlayer2Position.style.display = "none";
    showTargetPosition.style.display = "none";
    winnerPopUp.style.display = "block";
    document.getElementById("123").innerHTML = "The Winner is : " + document.getElementById("secondPlayerName2").textContent;


}
function ShowNoWinner1() {
    showPlayer1Position.style.display = "none";
    showPlayer2Position.style.display = "none";
    showTargetPosition.style.display = "none";
    winnerPopUp.style.display = "block";
    document.getElementById("123").innerHTML = "Ops No Winner!!";
    //document.getElementById("myImg").src = "FinishGameNoWinner.svg";


}

function ChoosingTime() {
    var TV = document.getElementById("TimeCheck").value;
    if (TV == 30) {
        //alert("30");
        mins = 0.5;
        secs = mins * 60;
    }
    if (TV == 60) {
        //alert("60");
        mins = 1;
        secs = mins * 60;

    }

    if (TV == 120) {
        //alert("120");
        mins = 2;
        secs = mins * 60;

    }

    if (TV == 300) {
        //alert("300");
        mins = 5;
        secs = mins * 60;

    }
}