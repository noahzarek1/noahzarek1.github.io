//CookieClicker like program By Noah Shelton
//Hoppy Clicker:
//global
var count = 0;
var hoppyPerSec = 0;
var hoppyClick = 1;
var hoppyCount = 31;
var hoppyXPos = [];
var hoppyYPos = [];


//populate Xpos and Ypos
for (var i = 0; i < hoppyCount; i++) {
    
   hoppyYPos.push(random(500,887));
   hoppyXPos.push(random(0,400));
}
//drawfunction for hoppy
var drawhoppy = function(size, x, y) {
    
    image(getImage("creatures/Hopper-Happy"),x,y,size,size);
};
//khan Button Class

var Button = function(x, y, label, itemPrice, hopsPerSec,number) {
//object identifiers    
    this.x = x;
    this.y = y;
    this.label = label;
    this.itemPrice = itemPrice;
    this.hopsPerSec = hopsPerSec;
    this.number = 0;
    
};
Button.prototype.draw = function() {
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(this.x, this.y, 70, 60, 0);
    textSize(10);
    fill(0, 0, 0);
    text(this.label +':'+ this.number +  "\n"+  "Cost:"  + this.itemPrice + "\n"+ "HPS: " + this.hopsPerSec, this.x+1, this.y+20);
    
    
};

Button.prototype.handleMouseClick = function() {
    if (count >= this.itemPrice) {//checks if the count of hoppys is more than the item $
        count -= this.itemPrice; //subtracts item price from total
        //update item price
        this.itemPrice += round(this.itemPrice * 0.17);
        //add hops per sec to main hps
        hoppyPerSec += this.hopsPerSec;
        //adds owned value +1
        this.number++;
    }
};

Button.prototype.addHoppers = function() { // Adds Hops per sec to the count
    if (this.number > 0) {
        //adds the HPS per sec (HPS / (60 seconds/count of owned))
        count += this.hopsPerSec/(60/this.number);
    }

};
Button.prototype.mouseIsOver = function() { 
// Checks if the mouse is over a certain button
//rect(this.x, this.y, 70, 60, 0); reference for button size
    return mouseX > this.x  && mouseX < this.x + 70 && mouseY > this.y && mouseY < this.y + 60;
};


//upgradebuttons array
var upgradeButtons = [
    //x, y, label, itemPrice, hopsPerSec
    //first Column
    new Button(1, 0, "HopCook", 10, 3),
    new Button(1, 61, "HopFarm ", 100, 15),
    new Button(1, 122, "HopTruck", 525, 32),
    new Button(1, 183, "HopShop", 1650, 68),
    new Button(1, 244, "HopPlant", 3300, 105),
    new Button(1, 305, "HopMall", 6575, 163),
    //second Column
    new Button(71, 0, "HopScience", 15250, 198),
    new Button(71, 61, "HopGov", 35450, 270),
    new Button(71, 122, "HopArmy", 230000, 490),
    new Button(71, 183, "HopMissile", 446000, 691),
    new Button(71, 244, "HopDictator", 761000, 900),
    new Button(71, 305, "HopGod", 999999, 1500)
    
];
//questline
var questLine = function(){

    if(count > 100){
        hoppyClick = 5;
        
    }
    if(count < 100){
        text("Get to 100 Hoppers to increse your HPC to 5!",184,294);

    }
    if(count >1000){
        hoppyClick = 125;

    }
    if(count < 1000 && count > 100){
        text("Get to 1000 Hoppers to increse your HPC to 125!",168,294);
    }
    if(count >10000){
        hoppyClick = 625;
       
    }
    if(count <10000 && count > 1000){
        text("Get to 10000 Hoppers to increse your HPC to 625!",167,294);
    }
    if(count <1000000 && count > 10000){
        text("Get to 1000000 Hoppers to increse your HPC to 3125!",154,294);
    }
    if(count >1000000){
        hoppyClick = 3125;
        
    }
    if(count <10000000 && count > 1000000){
        text("Go for Total Domination with 10000000 Hoppers",172,294);
    }
    if(count >10000000){
        hoppyClick = 99999;
        text("Jesus dude you kinda took over the world with hoppys",154,294);
    }

};
//draw function
draw = function() {
    background(207, 180, 118);

    for (var i = 0; i < hoppyXPos.length; i++) {
        //draw small hoppys behind main screen
        drawhoppy(25, hoppyXPos[i], hoppyYPos[i]);
        //move hoppys up screen
        hoppyYPos[i] -= 1;
        if (hoppyYPos[i] < 0) {
            hoppyYPos[i] = 400;
            
        }
    }
    fill(230, 128, 3);
    //rect behind text for hopper count
    rect(150,284,249,100);
    fill(0, 0, 0);
    textSize(25);
    //hopper total count
    text("Hoppers: " + round(count), 153, 316);
    textSize(12);
    //total HPC
    text("Hoppers Per Click: " + hoppyClick, 158, 346);
    //total HPS
    text("Hoppers Per Second: " + hoppyPerSec, 160, 371);
    
    var hoppyClicked;
    if (mouseIsPressed && mouseX > 220) {
        hoppyClicked = 130;
    } else {
        hoppyClicked = 80;
    }
    drawhoppy(hoppyClicked, 217, 71);
    
    mousePressed = function() {
        //if mouse x greater than 220 it will increment mouse click
        if (mouseX > 220) {
            count += hoppyClick;
        } 
        else {
            //check to see which button mouse is over, and tell it to handle click        
            for (var i = 0; i < upgradeButtons.length; i++) { 
                if (upgradeButtons[i].mouseIsOver()) {
                
                    upgradeButtons[i].handleMouseClick();
                }
            }
        }
    };
    for (var i = 0; i < upgradeButtons.length; i++) {
        
        upgradeButtons[i].addHoppers();
        upgradeButtons[i].draw();
        
    }
    //adds quest markers and HPC increase
    questLine();
   
};
