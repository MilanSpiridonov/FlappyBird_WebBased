function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
//Starting positions for player
var xPos = 0;
var yPos = 150;
var yDir = 0;
let xPosPipes = [900,1200,1500];
let plPos = [100,0];
//Useful variables
var end = false;
var midJump = false;
var paused = false;
function jumpReset(){if(!end){
    document.getElementById('bird').src = 'resources/birb.png';
    yDir=6;
    midJump = false;}
};
//Velocity and direction detection
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let yPipes = [0,0,0];
var score = 0;
function checkCollision(){ //Mnogo si mrazq jivota
    plPos[1] = document.getElementById('bird').style.top;
    if(parseInt(plPos[1].split('p')[0]) >= 720 || parseInt(plPos[1].split('p')[0]) <= 0)
    end=true;
    //Pipe1 Ypos:
    var rawStr = document.getElementById('pipe1').style.top.split('p')[0];
    var flt = rawStr.split('.')[0];
    var intPosY = parseInt(flt); //yOffset
    var centerF =  parseInt(intPosY + 400); // Top pipe
    var rawStrX = document.getElementById('pipe1').style.left.split('p')[0];
    var fltX =  rawStrX.split('.')[0];
    var intPosX = parseInt(fltX);
    var centerX = parseInt(intPosX + 50);
    if(parseInt(plPos[1].split('.')[0]) - 30 < parseInt(centerF-75) || parseInt(plPos[1].split('.')[0]) > parseInt(centerF + 100)){
        if(parseInt(centerX-75) <= 100 && parseInt(centerX + 70) >= 100)
            end = true;
    }
    if(parseInt(intPosX) == 100)
            {
                score++;
                document.getElementById('ScoreBoard').innerText = score;
                console.log(score);
            }
    //PIPE 2 
    rawStr = document.getElementById('pipe2').style.top.split('p')[0];
    flt = rawStr.split('.')[0];
    intPosY = parseInt(flt); //yOffset
    centerF =  parseInt(intPosY + 400); // Top pipe
    rawStrX = document.getElementById('pipe2').style.left.split('p')[0];
    fltX =  rawStrX.split('.')[0];
    intPosX = parseInt(fltX);
    centerX = parseInt(intPosX + 50);
    if(parseInt(plPos[1].split('.')[0]) - 30 < parseInt(centerF-75) || parseInt(plPos[1].split('.')[0]) > parseInt(centerF + 100)){
        if(parseInt(centerX-75) <= 100 && parseInt(centerX + 70) >= 100)
            end = true;
    }
    if(parseInt(intPosX) == 100)
            {
                score++;
                document.getElementById('ScoreBoard').innerText = score;
                console.log(score);
            }
    //PIPE 3
    rawStr = document.getElementById('pipe3').style.top.split('p')[0];
    flt = rawStr.split('.')[0];
    intPosY = parseInt(flt); //yOffset
    centerF =  parseInt(intPosY + 400); // Top pipe
    rawStrX = document.getElementById('pipe3').style.left.split('p')[0];
    fltX =  rawStrX.split('.')[0];
    intPosX = parseInt(fltX);
    centerX = parseInt(intPosX + 50);
    if(parseInt(plPos[1].split('.')[0]) - 30 < parseInt(centerF-75) || parseInt(plPos[1].split('.')[0]) > parseInt(centerF + 100)){
        if(parseInt(centerX-75) <= 100 && parseInt(centerX + 70) >= 100)
            end = true;
    }
    if(parseInt(intPosX) == 100)
            {
                score++;
                document.getElementById('ScoreBoard').innerText = score;
                console.log(score);
            }

      //console.log('SAME HEIGHT YOU\'D BE HIT BITCH!!!');
    //console.log('yPL - ' + parseInt(plPos[1]));
    //console.log('yPipe1 - ' + parseInt(centerF + 135));
    //x 
    //h 1200 - 270 - 135
   /* let mids = [document.getElementById('pipe1').top + 600, document.getElementById('pipe2').top + 600, document.getElementById('pipe3').top + 600];
    let midr = [document.getElementById('pipe1').left + 50, document.getElementById('pipe2').left + 50,document.getElementById('pipe3').left + 50];
    for(let i = 0; i < 3; i++){ //BBox collision not working! Either check the arrays or the loops underneath.
                                // Possible type missmatch..? fuck js lmao
        if(plPos[1] > mids[i] + 135 || plPos[1] < mids[i] - 135){
            if(plPos[0] < midr[i] - 80 || plPos[0] > midr[i] + 80)
                console.log("FUCK!!!");
        }
    }*/
    //if(plPos[1] >  || plPos[1] < 265)
    //xPipes = [, document.getElementById('pipe2').top, document.getElementById('pipe3').top];
    //for(let i = 0; i<3; i++)
        //console.log(toString(document.getElementById('pipe1').top));
}

function dirCalcAndMove(){
    if(!midJump)
    {
        yPos += yDir;
    document.getElementById('bird').style.top = yPos;
    }
    xPosPipes[0] -=10;
    document.getElementById('pipe1').style.left = xPosPipes[0];
    xPosPipes[1] -=10;
    document.getElementById('pipe2').style.left = xPosPipes[1];
    xPosPipes[2] -=10;
    document.getElementById('pipe3').style.left = xPosPipes[2];
    if(document.getElementById('pipe1').style.left.split('p')[0] <= -100)
        {
            xPosPipes[0] = 850;
            document.getElementById('pipe1').style.top = getRandomArbitrary(-80,80);
        }
    if(document.getElementById('pipe2').style.left.split('p')[0] <= -100)
        {
            xPosPipes[1] = 850;
            document.getElementById('pipe2').style.top = getRandomArbitrary(-80,80);
        }
    
    if(document.getElementById('pipe3').style.left.split('p')[0] <= -100)
        {
            xPosPipes[2] = 850;
            document.getElementById('pipe3').style.top = getRandomArbitrary(-80,80);
        }
    
        
}
//Variables input-detection:
var pressed = false;
window.onload = function() {
    document.getElementsByTagName('body')[0].onkeydown = function(e) { 
        var ev = e || event;
        if(ev.keyCode == 32 && !pressed) {//&& ev.ctrlKey) {
        {jump();
            pressed = true;
        }
        }
     }
    document.getElementsByTagName('body')[0].onkeyup = function(e) { 
       var ev = e || event;
       if(ev.keyCode == 32) {//&& ev.ctrlKey) {
        pressed=false;
       }
       if(ev.keyCode == 27 && !end)
        {
            if(!paused)
            {paused = true;
            document.getElementById('ScoreBoard').style.fontSize = '32pt';
            document.getElementById('ScoreBoard').style.textAlign = 'center';
            document.getElementById('ScoreBoard').innerText = 'Game paused!\nPress \'ESC\' to continue! \nScore: ' + score;
            }
            else if(paused){
            paused = false;
            document.getElementById('ScoreBoard').style.fontSize = '52pt';
            document.getElementById('ScoreBoard').innerText = score;
        }
        }
        if(ev.keyCode == 82){
            location.reload();
        }
    }
 };
function jump(){if(!end){
document.getElementById('jump').play();
document.getElementById('bird').src = 'resources/birb2.png';
yDir = -20;
delay(200).then(() => jumpReset());}
};
function EndScrb(){
if(end){document.getElementById('hit').play();
    document.getElementById('bird').src = 'resources/birb3.png';
    document.getElementById('ScoreBoard').style.fontSize = '32pt';
    document.getElementById('ScoreBoard').style.textAlign = 'center';
    document.getElementById('ScoreBoard').innerText = 'Game over!\nPress \'R\' to play again! \nScore: ' + score;
}
}
var gameLoopFixed = setInterval(function() {
    if(!end && !paused){
    dirCalcAndMove();
    checkCollision();
        EndScrb();
}
},52);

//implement game reset
//add pause, => upon pressing ESC - end = true, if (end) and ESC --> end = false
//add visuals
//add audio
//make it not so sucky :)