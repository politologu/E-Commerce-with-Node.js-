console.log("Fillimi i modulit b");
exports.done = false;
var a= require('./a.js');
console.log("Ne modulin b, a.done=%j",a.done);
exports.done = true;
console.log("Mbarimi i modulit b");