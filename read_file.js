var fs = require('fs');

var i = 1;

fs.readFileSync('./node.txt').toString().split('\n').forEach(function(line){
    var output = "Rreshti"+i + ": "+line;
    console.log(output);
    fs.appendFileSync('./output.txt', output.toString()+"\n");
    i++;

});