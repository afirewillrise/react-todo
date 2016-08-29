// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(4,5)); // Normal
//
// var numberArray = [9,10];
// console.log(add(...numberArray)); //Spread Operator
//

var person = ["Rahul Dravid", 24];
var personTwo = ["Sachin Tendulkar", 25];

function greet(name, age) {
  console.log("Hi " + name + ". Your age is " + age);
}

greet(...person);
greet(...personTwo);


var vwls1 = ['A','E'];
var vwls2 = ['I', 'O', 'U'];

var vowels = [...vwls1, ...vwls2];

vowels.forEach(function(vowel) {
  console.log("Vowel " + vowel);
});
