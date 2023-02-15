// primitive string literal

greeting("My name is Fabian.")

"My name is Fabian."  // <- this value is a primitive string literal

// strings are ordered collections of characters
// double-quote or single-quote doesn't matter in that case
// Always pick one of them for a whole project and stick to it!


// Another option to delimit (surround, separate, define) a string literal:
// back-tick ``

greetings(`My name is ${firstName}`)
console.log(greetings) // -> = My name is Fabian [considering we created a variable 'firstName' with 'Fabian' in it]

// Difference to double-quote is the outcome:

greetings("My name is ${firstName}")
console.log(greetings) // -> = My name is ${firstName}

// This ^ is called interpolation

