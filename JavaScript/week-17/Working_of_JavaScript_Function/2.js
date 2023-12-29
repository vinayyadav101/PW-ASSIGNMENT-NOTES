console.log(multiplyNumbers(2,3));  //Uncaught ReferenceError: Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function (num1 , num2){
    return num1 * num2
}