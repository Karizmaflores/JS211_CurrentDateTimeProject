const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 









function convertNumToString(){
  let input = document.getElementById("numString").value
  let conversion = input.toString()
  document.getElementById("display-element2").innerHTML = conversion+" The type is: " + typeof conversion;
}








function stringToNum(){
  let input = document.getElementById("stringNum").value
  let conversion = Number(input)
  document.getElementById("display-element3").innerHTML = 
  conversion+" The type is: " + typeof conversion;
}




// console.log(checkType(1));
//   console.log(checkType("1"));
//   console.log(checkType(false));
//   console.log(checkType(null));
//   console.log(checkType(undefined));
//   console.log(checkType(Nan));

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





function addNumbers(){
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value

  let sum = Number(num1) + Number(num2);

  document.getElementById("display-element5").innerHTML =
  sum;
}





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




//one or other
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


//both not true
function evenNumbers(){
  let thing1 = document.getElementById("thing1").value
  let thing2= document.getElementById("thing2").value

  if(thing1 % 2 !== 0 && thing2 % 2 !== 0){
  document.getElementById("display-element6").innerHTML =
  "Both numbers are even";
  }
  else{
    document.getElementById("display-element6").innerHTML =
  "Both numbers are NOT even";
  }
}


