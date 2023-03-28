//displays current date to DOM
const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


//converts number input to string and displays to DOM
function convertNumToString(){
  let input = document.getElementById("numString").value
  let conversion = input.toString()
  document.getElementById("display-element2").innerHTML = conversion+" The type is: " + typeof conversion;
}


//converts string input to number and displays to DOM
function stringToNum(){
  let input = document.getElementById("stringNum").value
  let conversion = Number(input)
  document.getElementById("display-element3").innerHTML = 
  conversion+" The type is: " + typeof conversion;
}



// checks these data types and displays to DOM
// 1
// "1"
// false
// null
// undefined
// NaN

function checkType(){
  let input = document.getElementById("datatypeCheck").value
  if (input === "true" || input === "false"){
    return document.getElementById("display-element4").innerHTML =
    "boolean";
  }
  if (input === "null"){
    return (document.getElementById("display-element4").innerHTML =
    "null");
  }
  if (input === "undefined" || input === ""){
    return document.getElementById("display-element4").innerHTML =
    "undefined";
  }
  if (input === "NaN"){
    return document.getElementById("display-element4").innerHTML =
    "NaN";
  }
  if (!isNaN(input)){
    return document.getElementById("display-element4").innerHTML =
    "number";
  }
  else{
    return document.getElementById("display-element4").innerHTML =
    "string";
  }    
}


//Stores two input string "numbers",  then converts to numbers, adds them together, and displays to DOM
function addNumbers(){
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value

  let sum = Number(num1) + Number(num2);

  document.getElementById("display-element5").innerHTML =
  sum;
}


//Determines is towo input numbers are even and displays to DOM
function evenNumbers(){
  let thing1 = document.getElementById("thing1").value
  let thing2= document.getElementById("thing2").value

  if(thing1 % 2 === 0 && thing2 % 2 === 0){
  document.getElementById("display-element6").innerHTML =
  "Both numbers are even";
  }
  else{
    document.getElementById("display-element6").innerHTML =
  "Both numbers are NOT even";
  }
}


//Determines if one of the input numbers is even and displays to DOM
function oneIsTrue(){
  let one = document.getElementById("one").value
  let two= document.getElementById("two").value

  if(one % 2 === 0 || two % 2 === 0){
  document.getElementById("display-element7").innerHTML =
  "One number is even";
  }
  else{
    document.getElementById("display-element7").innerHTML =
  "Both numbers are NOT even";
  }
}


//Determines if none of the input numbers are even and displays to DOM
function noneTrue(){
  let firstOne = document.getElementById("firstOne").value
  let secondOne= document.getElementById("secondOne").value

  if(firstOne % 2 !== 0 && secondOne % 2 !== 0){
  document.getElementById("display-element8").innerHTML =
  "Both numbers are NOT even";
  }
  else{
    document.getElementById("display-element8").innerHTML =
  "One number is even";
  }
}


