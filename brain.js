
var teachmode = true;
// This will bring in the vocab teach mode function

function vocabTeachMode() {

    if (teachMode == true) {

    } else {

    }
}



function showString() {
    event.preventDefault();
    var string = document.getElementById("speech").value;

    var speech = document.getElementById("updated-text").innerHTML

    var result = "You said: " + string;

    document.getElementById("updated-text").innerHTML = result
}

function parseMessage() {
    //This section will focus on the breaking down of the string in some sort of request. 
    //Then will need to derive an action to take from the message.
    //If it cannot understand the message then it needs to break the loop and throw and error back for user to try again.

    userPassedInput = false

    if (userPassedInput == true) {

        //call vocabPack() which will contain a dictionairy of all key words. 

    }
}

function callSkillPack() {
    // This section will call the necessary functionality from a skill pack
}

