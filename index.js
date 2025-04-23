
function sum (a,b){
    return a+b;
}
console.log(sum(5,4));
function sub(a,b){
    return a-b;
}
console.log(sub(5,2));


const add = function(a, b) {
    return a + b;
  };
  console.log("Addition:", add(10, 5));


  const subtract = (a, b) => a - b;
  console.log("Subtraction:", subtract(10, 5));

  
  setTimeout(function() {
    console.log("Anonymous Function Result (10 + 5):", 10 + 5);
  }, 1000);

  function calculator(a, b) {
    function add() {
      return a + b;
    }
    return add();
  }

  console.log("Result:", calculator(3, 4));
    
  console.log("a");