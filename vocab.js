
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var vocab = ["a", "about", "all", "also", "and", "as", "at", "be", "because", "but", "by", "can", "come", "could", "day", "do", "even", "find", "first", "for", "from", "get", "give", "go", "have", "he", "her", "here", "him", "his", "how", "i", "if", "in", "into", "it", "its", "just", "know", "like", "look", "make", "man", "many", "me", "more", "my", "new", "no", "not", "now", "of", "on", "one", "only", "or", "other", "our", "out", "people", "say", "see", "she", "some", "take", "tell", "than", "that", "the", "their", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "time", "to", "two", "up", "us", "every", "want", "way", "we", "well", "what", "when", "which", "who", "will", "with", "would", "year", "you", "your"]

/*function checkVocab(newWord)
vocab.indexOf(string) !== -1 {
    alert("This already exsists in my vocab")
}*/

// This function is intended to store the check if there is an input entered in New Word. If there is then it should push it into the new Word. Eventually we will need add a function which checks if the word is already in the section. 
function newVocab(newWord) {
    if (newWord == ! "a") {
        vocab.push(newWord);
        console.log("I learnt a new word" + " " + newWord);
        var outputString = "I learnt a new word"
        updateState(outputString)
    } else {
        console.log("I already know the word" + newWord);
        var outputString = "I already know that word"
        updateState(outputString)
    }
}

