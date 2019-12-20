var ducks = [];
var xspeed = 1;
var yspeed = 3;
var score = 0;
var currentScene = 1;
var level = 1;
//bitmojis
var bodyX = 236;
var bodyY = 319;
var bitHeight = 50;
var x;
var y;
var bitmojih;


var drawBitmojiNoah = function(x,y,bitmojih){
    
fill(210, 180, 140);
rect(x-(bitmojih/150*5),y+(bitmojih/150*23),16*bitmojih/150,22*bitmojih/150);
stroke(210, 180, 140);
ellipse(x,y,35*bitmojih/150,50*bitmojih/150);
stroke(0, 0, 0);
ellipse(x+(bitmojih/150*7),y-(bitmojih/150*6),12*(bitmojih/150),6*bitmojih/150);
ellipse(x-(bitmojih/150*9),y-(bitmojih/150*6),12*bitmojih/150,6*bitmojih/150);
line(x-(bitmojih/150*2),y-(bitmojih/150*6),x-(bitmojih/150*1),y-(bitmojih/150*6));
fill(192, 109, 199);
ellipse(x+(bitmojih/150*7),y-(bitmojih/150*7),6*bitmojih/150,6*bitmojih/150);
fill(0, 0, 0);
arc(x-(bitmojih/150*10),y-(bitmojih/150*6),4*bitmojih/150,-1*bitmojih/150,1,176);
fill(255, 255, 255);
stroke(0, 0, 0);
arc(x,y+(bitmojih/150*12),20*bitmojih/150,21*bitmojih/150,-4,185);
fill(210, 180, 140);
stroke(210,180,140);

//nose
stroke(0, 0, 0);
line(x-(bitmojih/150*4),y+(bitmojih/150*6),x-(bitmojih/150*1),y+(bitmojih/150*1));
line(x-(bitmojih/150*4),y+(bitmojih/150*7),x+(bitmojih/150*1),y+(bitmojih/150*7));
stroke(255, 255, 255);
//ears
arc(x-(bitmojih/150*17),y-(bitmojih/150*2),13*bitmojih/150,7*bitmojih/150,93,266);
arc(x+(bitmojih/150*17),y-(bitmojih/150*2),13*bitmojih/150,7*bitmojih/150,-88,90);
//hat
fill(255, 0, 0);
stroke(255, 0, 0);

arc(x,y-(bitmojih/150*19),25*bitmojih/150,21*bitmojih/150,-176,-2);
fill(210, 180, 140);
arc(x,y-(bitmojih/150*21),16*bitmojih/150,12*bitmojih/150,-176,-2);
fill(255, 0, 0);
stroke(232, 0, 0);
stroke(0, 0, 0);
line(x+(bitmojih/150*11),y-(bitmojih/150*6),x+(bitmojih/150*17),y-(bitmojih/150*9));
line(x-(bitmojih/150*13),y-(bitmojih/150*7),x-(bitmojih/150*18),y-(bitmojih/150*9));
//body
fill(113, 189, 240);
stroke(113, 189, 240);
triangle(x-(bitmojih/150*20),y+(bitmojih/150*45),x+(bitmojih/150*16),y+(bitmojih/150*44),x-(bitmojih/150*20),y+(bitmojih/150*18));
triangle(x+(bitmojih/150*17),y+(bitmojih/150*46),x-(bitmojih/150*19),y+(bitmojih/150*46),x+(bitmojih/150*18),y+(bitmojih/150*19));
//initials
stroke(133, 189, 240);
fill(0, 0, 0);
rect(x-(bitmojih/150*17),y+(bitmojih/150*27),2*bitmojih/150,15*bitmojih/150);
stroke(0, 0, 0);
line(x-(bitmojih/150*5),y+(bitmojih/150*41),x-(bitmojih/150*15),y+(bitmojih/150*28));
line(x-(bitmojih/150*5),y+(bitmojih/150*41),x-(bitmojih/150*5),y+(bitmojih/150*30));
line(x+(bitmojih/150*11),y+(bitmojih/150*29),x+(bitmojih/150*15),y+(bitmojih/150*29));
line(x+(bitmojih/150*7),y+(bitmojih/150*32),x+(bitmojih/150*12),y+(bitmojih/150*29));
line(x+(bitmojih/150*9),y+(bitmojih/150*31),x+(bitmojih/150*8),y+(bitmojih/150*32));
line(x+(bitmojih/150*14),y+(bitmojih/150*39),x+(bitmojih/150*8),y+(bitmojih/150*32));
line(x+(bitmojih/150*14),y+(bitmojih/150*40),x+(bitmojih/150*10),y+(bitmojih/150*43));
line(x+(bitmojih/150*4),y+(bitmojih/150*40),x+(bitmojih/150*10),y+(bitmojih/150*43));
};

//alec bitmoji
var drawHead = function() {
    fill(234,192,134);
    ellipse(bodyX+bitHeight/150,bodyY+bitHeight/150,bitHeight/150*85,bitHeight/150*100);        //bit head
    fill(209, 175, 123);
};
var drawFace = function() {
    fill(255, 255, 255);
    ellipse(bodyX-(bitHeight/150*13),bodyY-(bitHeight/150*6),bitHeight/150*10,bitHeight/150    *10); //left eye boarder
    ellipse(bodyX+(bitHeight/150*15),bodyY-(bitHeight/150*7),bitHeight/150*10,bitHeight/150    *10); //right eye boarder
    fill(179, 117, 9);
    ellipse(bodyX-(bitHeight/150*13),bodyY-(bitHeight/150*6),bitHeight/150*7,bitHeight/150*7    ); //left eye
    ellipse(bodyX+(bitHeight/150*15),bodyY-(bitHeight/150*7),bitHeight/150*7,bitHeight/150*7    ); //right eye
    fill(0, 0, 0);
    arc(bodyX+(bitHeight/150*1),bodyY+(bitHeight/150*21),bitHeight/150*33,bitHeight/150*23      ,-2,185); //teeth boarder
    fill(255, 255, 255);
    arc(bodyX+(bitHeight/150*1),bodyY+(bitHeight/150*22),bitHeight/150*31,bitHeight/150*18      ,-2,185); //teeth
    fill(234,192,134);
    stroke(0, 0, 0);
    bezier(bodyX-(bitHeight/150*2), bodyY+(bitHeight/150*4), bodyX-(bitHeight/150*13), bodyY    +(bitHeight/150*13), bodyX+(bitHeight/150*21), bodyY+(bitHeight/150*12), bodyX+(bitHeight    /150), bodyY-(bitHeight/153*8));      //nose
};
var drawShirt = function() {
     fill(0, 0, 0);
    quad(bodyX-(bitHeight/150*21), bodyY+(bitHeight/150*43), bodyX+(bitHeight/150*23),         bodyY+(bitHeight/150*42), bodyX+(bitHeight/150*61), bodyY+(bitHeight/150*90),bodyX             -(bitHeight/150*67), bodyY+(bitHeight/150*93)     );//shirt
    fill(219, 44, 44);
    textSize(13);
    text("AC",bodyX-(bitHeight/128*20),bodyY+(bitHeight/138*56,bitHeight/146*80,bitHeight       /150*43)); //initials
};
var drawHat = function() {
     fill(56, 171, 224);
    quad(bodyX+(bitHeight/150*24), bodyY-(bitHeight/150*54), bodyX-(bitHeight/150*27), bodyY    -(bitHeight/150*51), bodyX-(bitHeight/150*40), bodyY-(bitHeight/150*19), bodyX+(bitHeight    /150*37), bodyY-(bitHeight/150*26)     ); //hat
    ellipse(bodyX-(bitHeight/150*1),bodyY-(bitHeight/150*53),bitHeight/150*11,bitHeight/150    *10); //hat button
};
var drawBitmojiAlec = function() {
    
    noStroke();
    drawHead();
    drawFace();
    drawShirt();
    drawHat();
};
//duck constructor
var Duck = function(x,y){
   this.x = x;
   this.y = y;
   this.img = getImage("avatars/piceratops-sapling");
   this.deadBird = false;
   this.xspeed = 1;
};
Duck.prototype.draw = function() {
    image(this.img,this.x, this.y,50,50);
    
};

//fuction to populate ducks
var level1 = function(){
    for (var i = 0; i < 10; i++) {  
        ducks.push(new Duck(i * 120 + -1000, random(20, 260)));
    }
};
var level2 = function(){
  for (var i = 0; i < 25; i++) {  
        ducks.push(new Duck(i * 120 + -3000, random(20, 260)));
        ducks[i].xspeed = 2;
    }  
};
var level3 = function(){
   for (var i = 0; i < 45; i++) {  
        ducks.push(new Duck(i * 120 + -5300, random(20, 260)));
        ducks[i].xspeed = 3;
    }
};
//button class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 100;
    this.height = config.height || 40;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+20, this.y+10);
};
//checks if mouse is inside button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
//startbtn
var startButton = new Button({
    x: 125,
    y: 340,
    label: " Start",
    onClick: function() {
    currentScene = 2;
    level1();
    }
});
//levelbtns
var btnLevel1 = new Button({
    x: 298,
    y: 200,
    label: "Level 2",
    onClick: function() {
       currentScene =3 ;
       ducks = [];
       score = 0;
       level = 2;
       level2();
    }
});
var btnLevel2 = new Button({
    x: 298,
    y: 200,
    label: "Level 3",
    onClick: function() {
       currentScene =4 ;
       ducks = [];
       score = 0;
       level = 3;
       level3();
    }
});
var restartGame = new Button({
    x: 298,
    y: 359,
    label: "Restart",
    onClick: function() {
       currentScene =1 ;
       ducks = [];
       score = 0;
       level = 1;
    }
});
if (currentScene === 2){
    level = 1;
    level1();
}
else if(currentScene ===3){
    level = 2;
    level2();
}

else if(currentScene ===4){
    level = 3;
    level3();
}
//crosshair constructor
var Crosshair = function(x,y){
    this.x = mouseX;
    this.y = mouseY;
    
};
Crosshair.prototype.draw = function() {
    fill(0, 0, 0,20);
    ellipse(mouseX,mouseY,20,20);
    line(mouseX-10,mouseY,mouseX+10,mouseY);
    line(mouseX,mouseY-10,mouseX,mouseY+10);
};

Crosshair.prototype.checkForDuck = function(duck) {
    if ((duck.x >= (mouseX - 30) && duck.x <= (mouseX + 30)) &&
        (duck.y >= (mouseY -40) && duck.y <= (mouseY + 30))) {
        if(duck.deadBird === false){
        //alive moving bird
        score++;
         duck.deadBird = true;
        }
        else if(duck.deadBird === true){
        //falling bird
         score = score;   
        }
    }

};
//crosshair for game
var crosshair = new Crosshair({
    x:mouseX,
    y:mouseY,
    
});
//game function
var game = function(){
    background(88, 123, 390);
    fill(0, 0, 0);
    //ground
    image(getImage("cute/GrassBlock"),0,300);
    image(getImage("cute/GrassBlock"),100,300);
    image(getImage("cute/GrassBlock"),200,300);
    image(getImage("cute/GrassBlock"),300,300);
    image(getImage("cute/TreeUgly"),300,242);
    image(getImage("cute/TreeUgly"),103,242);
    image(getImage("cute/TreeUgly"),103,242);
    //bitmojis game screen
    drawBitmojiNoah(70,312,126);
    drawBitmojiAlec();
    textSize(20);
    fill(0, 255, 38);
    ellipse(20,20,97,89);
    fill(8, 255, 243);
    rect(6,364,175,25);
    fill(0, 0, 0);
    text("Level:" + level,7,366);
    text("Score: " + score, 78,366);
    //draw ducks
  for (var i = 0; i < ducks.length; i++) {
        ducks[i].draw();
        ducks[i].x += ducks[i].xspeed;
        if (ducks[i].deadBird === true){
            ducks[i].y += yspeed; 
            ducks[i].xspeed = 0;
        }
    }
    //level initators
    
    if(score >= 7 && currentScene === 2)
    {
        //button draw
        textSize(15);
        fill(97, 214, 58);
        text("You're a good shot! Next round!", 50,50);
        text("Hover over the button to move on.", 10,260);
        btnLevel1.draw();
        btnLevel1.handleMouseClick();
    }
    else if(score >= 20 && currentScene === 3)
    {
        //level 3 initiator
        textSize(15);
        fill(97, 214, 58);
        text("You're a southern legend, final round.", 50,50);
        text("Hover over the button to move on.", 10,260);
        btnLevel2.draw();
        btnLevel2.handleMouseClick();
        
    }
    else if(score >= 40 && currentScene === 4)
    {
        //game end
        fill(201, 191, 80);
        textSize(25);
        text("YOU WIN PAL YEEEEEE YEEE", 20,50);
       
        
    }
};
var splash = function(){
background(113, 113, 227);
image(getImage("avatars/piceratops-sapling"),208,200,50,50);
image(getImage("avatars/piceratops-sapling"),319,151,50,50);
image(getImage("avatars/piceratops-sapling"),293,268,50,50);
image(getImage("avatars/piceratops-sapling"),59,242,50,50);
drawBitmojiAlec();
drawBitmojiNoah(110,312,126);
fill(0, 242, 255);
rect(0,0,402,43);
fill(0, 247, 255);
rect(0,349,403,90);
fill(255, 0, 115);
rect(110,39,175,39);
fill(51, 0, 255);
textSize(20);
text("By: Alec and Noah", 115, 49);
textSize(23);
fill(191, 7, 7);
text("Welcome to DemonDuck Hunt!", 31,5);
fill(0, 0, 0);
textSize(16);
text("Instructions: Shoot those demon critters and", 13,94);
text("secure you're home! Tons of red little devils", 13,110);
text("are headed for your field! Put the fear of god", 13,127);
text("into those little rascals", 13,144);
text("Level Requirements:", 11,165);
text("Level1: 7 points Level 2: 20 points", 11,188);
text("Level3: 40 points", 11,209);
startButton.draw();
startButton.handleMouseClick();
};


var draw = function() {
    if(currentScene === 1){
      splash();  
      
    }
    else if(currentScene > 1){
    game(); 
    crosshair.draw();
    
    }
    restartGame.draw();
    restartGame.handleMouseClick();
};
mouseClicked = function(){
    for (var i = 0; i < ducks.length; i++) {
        //check shot here
       crosshair.checkForDuck(ducks[i]); 
       
    }
};

