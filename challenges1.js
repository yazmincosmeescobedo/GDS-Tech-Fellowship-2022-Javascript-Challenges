// -- VERY EASY ---// 

// var firstNum = 6;
// var secondNum = 2; 

// var result = firstNum - secondNum; 

// console.log(`The difference between ${firstNum} and ${secondNum} is ${result}`)




// --- EASY ---// 

// var name1 = "Thomas"; 
// var name2 = "John"; 
// var length; 

// if(name1.length > name2.length){
//     var longerName = name1;
//     var shorterName = name2; 
//     length = name1.length - name2.length; 
// }
// else{
//     var longerName = name2;
//     var shorterName = name1; 
//     length = name2.length - name1.length; 
// }

// console.log(`The name ${longerName} is longer than ${shorterName} by ${length}`)




// --- MEDIUM --- // 

// var sentence = prompt("Say spmething: "); 

//Could add a third option for blended sentences or num inputs
// if(sentence == sentence.toUpperCase()){
//     var result = "SHOUTING"; 
// }
// else if(sentence == sentence.toLowerCase()){ 
//     var result = "whispering";
// }

// console.log(`It appears you are ${result}`)




// --- HARD --- // 

var num1 = 8;
var num2 = 2; 
var result; 

// This code can be made more dry but result variable 
// is used to show a step by step progression in code. 
function add(num1, num2){
    result = num1 + num2; 
    return result; 
}

function subtract(num1, num2){
    result = num1 - num2; 
    return result; 
}

function multiply(num1, num2){
    result = num1 * num2; 
    return result; 
}

function divide(num1, num2){
    result = num1/num2; 
    return result; 
}

// --- VERY HARD --- // 

var operator = prompt("Enter an operator: ");

var num1 = prompt("Enter a first number: "); 
var num2 = prompt("Enter a second number: "); 

if(operator == "+"){
    add(num1, num2); 
    var output = `${num1} + ${num2} = ${result}`; 
}
else if(operator == "-"){
    subtract(num1, num2); 
    var output = `${num1} - ${num2} = ${result}`;
}
else if(operator == "*"){
    multiply(num1, num2); 
    var output = `${num1} + ${num2} = ${result}`;
}
else if(operator == "/"){
    divide(num1, num2)
    var output = `${num1} / ${num2} = ${result}`;
}
