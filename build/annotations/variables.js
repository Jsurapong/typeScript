"use strict";
var apples = 5;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects;
var now = new Date();
// Array
var colors = ["red", "green", "blud"];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x":10,"y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates); // {x:10,y:20}
// 2) When we declare a variable on one line
// and initalizate it later
var words = ["red", "green", "blud"];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}
// 3) Variable whose type connot be inferred correctly
var number = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i];
    }
}
