// Global

let x = 10; // This variable is declared in the global scope

function printNumber() {
  console.log(x); // This function can access the global variable `x`
}

printNumber(); // Output: 10


// Local

function printName() {
    let name = "John"; // This variable is declared in the local scope of the function
  
    console.log(name); // This function can access the local variable `name`
  }
  
  printName(); // Output: John
  console.log(name); // Output: ReferenceError: name is not defined