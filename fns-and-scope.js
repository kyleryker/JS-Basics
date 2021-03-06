//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  if (name === 'Tyler'){
    return true;
  }
  else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var name = ""
function prompt(name){
var name = name;
return name;
}
function getName(name){
  var name = prompt();
  return name;
}
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
  alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  // a parameter is a variable in the definition or a function or method whereas an argument is a value or variable that was passed into the function/method.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // The falsy values are NAN, undefined, null, 0, "", and false.
  // you can check if something is falsy by using this syntax: x === x; you do not need an if statement or anything

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
  return "Mikhail Collins";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName(){
  return myName();
}
//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
  return function (){
    return "Mikhail Collins";
  }
}
//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
