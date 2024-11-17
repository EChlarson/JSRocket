//Variables
var favColor = 'red';
   //variable is something that refers to something else
   //names can not have spaces or dashes (ex favColor)
   //value is assigned 'red' but can be changed
   
   // Types of Values 
      //string or text '' (ex shown above)
      //Array or List (could contain text, numbers, variables, objects, functions, etc.)
var myArray = [];
var myFavColors = ['blue', 'red', 'green'];
      //Boolean is a true or false statement or yes no value (0is false 1 is true)
var hasGotFavColors = true;
      //Object is like an array but you can give it a name for every list item
var richObject = {
   firstName: 'Rich',
   lastName: 'Armstrong',
   favColors: ['blue', 'red', 'green'],
   yearsAlive: 103, //numbers do not have quotations
   isMale: true
};

//Functions
function whatIsMyFavColor() { }
   //a function is something that can be reused
   //() are what make it a function and {} contains what happens in the function

   //another way to type a function 
var whatIsMyFavColor = function () { }

var doSomething = function () {
   console.log('do Something!!!');
}
   //If the above code is pasted in the console and we call it without the () [doSomething] it returns the entire var...
      //function () {console.log("do Something!!!");}
   //If we call it with the () [doSomething()] it returns the function...
      //doSomething!!!

var whatIsMyFavColor = function () {
   return "blue";
}
   //anything after the return will not show, it stops the function

var area = function(width, height) {
   return width * height;
}
   //If we call this function in the console [area (5,5)] the function sees that width = 5 and height = 5. Then it returns the number 25 to the console.

//If-else Statements
if (true) {
   alert("male");
};
   //if something... then do something
if (10 == 1) {
   alert("male");
};
   //we use == because it is a comparison statement, we are evaluating for true or false
   //combine them with variables...
var number1 = 10;
var number2 = 100;
if (number1 < number2) {
   alert("true");
}; //returns true

var number1 = 10;
var number2 = 100;
if (number1 > number2) {
   alert("true");
} else {
   alert("false");
};
   //if true, do this.... otherwise [else], do this...
   //returns false

   //more than one comparison statement possible in an if-else statement
var name2 = 'Bob';
var name1 = 'Rich';
if (name1 == 'Rich') { //Comparison 1
   alert("true1");
} else if (name2 == 'Rich') { //Comparison 2
   alert("true2");
} else { // If both are false...
   alert("false");
}; //returns true1

   //&& and
   //|| or

if (name1 == 'Rich' && name2 == 'Bob') { //if both conditions are true
   alert("true1");
} else if (name2 == 'Rich') { 
   alert("true2");
} else { 
   alert("false");
};

if (name1 == 'Rich' || name2 == 'Bob') { //if this is true.... or this is true
   alert("true1");
} else if (name2 == 'Rich') { 
   alert("true2");
} else { 
   alert("false");
};