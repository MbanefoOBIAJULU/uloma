/*function combine() {
    let concatenate = "Chuka" + " " + "Uloma";
    return concatenate;
}
console.log(combine())
function AddNumbers(a,b) {
    let result = a + b;
    return result;
}
console.log(AddNumbers(1,2))
function AddTwoValues() {
    let a = 1
    let b = 2
    let result = a + b
    return result;
} 
console.log(AddTwoValues())*/

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  /*let sum = add(20, 45);
  console.log(sum); // => 65
  
  let difference = subtract(80, 10);
  console.log(difference); // => 70*/
  
  function times(num1, num2) {
    return num1 * num2;
  }
  
  console.log(times(add(20, 45), subtract(80, 10))); // => 4550
  // 4550 == ((20 + 45) * (80 - 10))
  