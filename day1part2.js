var numberWords = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");

var first;
var last;
var currentWord = "";
var comb = "Undefined";
var finalArray = [];

function processWords(currentWord) {
    let x = true;
    while (x) {
        let y = true;
        for (let k = 0; k < numberWords.length; k++) {
            if (currentWord.includes(numberWords[k])) {
                currentWord = currentWord.replace(numberWords[k], numberWords[k].charAt(0) + k.toString() + numberWords[k].charAt(numberWords[k].length - 1));
                y = false;
            }
        }
        if (y) {
            x = false;
        }
    }
    return currentWord;
}

var fs = require("fs");
fs.readFile("./dayOneInput.txt", "utf8", function(err, text){
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    if (text){
        var problemInput = text.split("\n");
        for (let i = 0; i< problemInput.length; i++) {
            currentWord = problemInput[i];
            currentWord = processWords(currentWord);

            first = "Undefined";
            for (let j = 0; j < currentWord.length; j++) {
                if (!isNaN(currentWord[j])) {
                    if (isNaN(first)) {
                        first = currentWord[j];
                    }
                    last = currentWord[j];
                }
            }
            comb = first.concat(last);
            finalArray.push(Number(comb));
        }

        var sum = finalArray.reduce((runningTotal, cValue) => runningTotal + cValue, 0);

        console.log(sum);
    }
});
