// -
// -
// Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

function createCounter() {
    let count = 0; // This variable is only accessible within the `createCounter` function
  
    function increment() {
      count++; // This function can access the `count` variable in the outer function
      console.log(count);
    }
  
    return increment; // Return the function `increment`, which keeps access to `count`
  }
  
const counter = createCounter(); // `counter` is now the `increment` function
counter(); // Output: 1
counter(); // Output: 2

// --

function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!`);
    };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");
// Hello, Kyle!

hello("Sarah");
// Hello, Sarah!

howdy("Grant");
// Howdy, Grant!