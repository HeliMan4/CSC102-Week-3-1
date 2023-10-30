function playCraps() {
    //This is a function to play craps in the game.html
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1)
    document.getElementById("die1Res").innerHTML = "" + die1;

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2Res").innerHTML = "" + die2;

    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "" + sum;



    //Check for 7 or 11 meaning loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML = "CRAPS! You died in battle";
    } 
    //Check for a win
    else if ((die1 == die2) && (die1 % 2 == 0)) {
        document.getElementById("gameRes").innerHTML = "You Won! Hail to the King, baby!";
    //If parameters are not met above, "Push"
    } else {
        document.getElementById("gameRes").innerHTML =
            "Prepare for the next battle!";
    }
}