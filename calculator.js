// Node Calculator
// Using node and the NPM package readline-sync create a simple calculator.
// When the program runs it will show the text "Please enter a number"
// After the number is entered it will say, "Please enter another number"
// After the second number is entered show a prompt that says, "Please enter an operator (+, - , / , * )"
// The user will enter an operator. Once that operator is entered the result of the operation will be printed to the screen.

var readline = require('readline-sync');

var number1 = readline.question("Please enter a number");

console.log("Your number is: " + number1);

var number2 = readline.question("Please enter another number");

console.log("Your second number is: " + number2);

var operator = readline.question("Please enter an operator (+, - , / , * )");

console.log("Your result is: " + operator);


var num1 = parseInt(number1);

var num2 = parseInt(number2);

console.log(Add(num1,num2));

function Add(num1,num2) {
	  
    if (isNaN(num1) || isNaN(num2))
     {
       console.log("Oh my God, Please send only numbers why don't you understand??? haaaN??????????");
       return;
     }
   else{
      switch(operator)
        {
          case '+':
               return num1+num2;
          break;
          case '-':
               return num1-num2;
          break;
 
          case '/':
                return num1/num2;
          break;
 
          case '*':
                return num1*num2;
          break;
 
          default:
                console.log("you put an invalid operator please refresh your page to continoue your calculation, Or if you want something else from this calc then Ask it on socioteachers.com.. Thanks ");
 
          }
 
      }
   return operator;

}

