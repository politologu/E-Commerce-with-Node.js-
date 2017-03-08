console.log("Fillimi i modulit a");
exports.done = false;
var b= require('./b.js');
console.log("Ne modulin a, b.done=%j",b.done);
exports.done = true;
console.log("Mbarimi i modulit a");