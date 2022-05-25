
var outputString = ""

var inputString = " "

var kittRespond = ""

var teachmode = false;
// This will bring in the vocab teach mode function

function vocabTeachMode() {

    if (teachMode == true) {
        //This section will call the newVocab function in the vocab.js file
        newVocab(showString.string);
    } else {
        parseMessage();
    }
}


function parsingError() {

    var misunderstood = "Sorry I didn't quite get that."
    console.log("error parsing message");

    var outputString = misunderstood;
    updateState(outputString);

}


function showString() {
    event.preventDefault();
    var string = document.getElementById("speech").value;

    var speech = document.getElementById("updated-text").innerHTML

    var respond = "Kitt said" + outputString

    var result = "You said: " + string;

    inputString = result;
    //document.getElementById("updated-text").innerHTML = result
    //vocabTeachMode(); - at some point we will uncomment this line. 
    //checkString();
    //newVocab();
    updateState(inputString, outputString);
}

// Maybe we should declare a global variable that can be constantly rewritten and that will be applied as the input parameter for the UpdateState()

function updateState(inputString, outputString) {
    event.preventDefault();
    var response = inputString;
    var kittResponse = outputString;

    document.getElementById("updated-text").innerHTML = response
    document.getElementById("response-text").innerHTML = kittResponse

    return response, kittRespond

}

function parseMessage() {
    //This section will focus on the breaking down of the string in some sort of request. 
    //Then will need to derive an action to take from the message.
    //If it cannot understand the message then it needs to break the loop and throw and error back for user to try again.

    userPassedInput = false

    if (userPassedInput == true) {

        var instructionRequest = document.getElementById("speech").value;

        switch (instructionRequest) {
            case 'Hello':
                greetingSkillpackage(inputString);
                updateState(outputString);
                break;

            case 'Hi':
                greetingSkillpackage(inputString);
                updateState(outputString);
                break;

            default:
                console.log("Error Parsing Message")
                outputString = "Sorry, I didn't understand"
                updateState(outputString)

        }

        //call vocabPack() which will contain a dictionairy of all key words. 

    }
}

function callSkillPack() {
    // This section will call the necessary functionality from a skill pack
    // will need to set some parameters like skillPackKeyword, which will be returned from the parseMessageFunction. 
    // We could hold an array of the different functions and then we can add a switch for each of the different functions/skill packs. 
}

