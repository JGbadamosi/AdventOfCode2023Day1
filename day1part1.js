var first = 0;
var last = 0;
var comb = "Undefined";
var finalArray = [];
console.log("Current working directory:", process.cwd());
var fs = require("fs");
fs.readFile("./dayOneInput.txt", "utf8", function(err, text){
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    if (text){
        var problemInput = text.split("\n");

        for (let i = 0; i< problemInput.length; i++) {
            first = "Undefined";
            last = "Undefined";
            for (let j = 0; j < problemInput[i].length; j++) {
                if (!isNaN(problemInput[i][j])) {
                    if (isNaN(first)) {
                        first = problemInput[i][j];
                    }
                    last = problemInput[i][j];
                }
            }
            comb = first.concat(last);
            finalArray.push(Number(comb));
        }

        var sum = finalArray.reduce((runningTotal, cValue) => {
            return runningTotal + cValue
        }, 0);

        console.log(sum);
    }
});
