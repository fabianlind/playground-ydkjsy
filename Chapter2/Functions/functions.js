// from the early days of JS = function declaration statement

function awesomeFunction(coolParameters){
    // ..
    return amazingStuff
}


// function expression (can be defined and assigned)

// let awesomeFunction2 = ..
// const awesomeFunction2 = ..
var awesomeFunction2 =
    function(coolParameters){
        // ..
        return amazingStuff
    }


// JS functions can receive parameter input:

function greeting(myNameParameter){
    console.log(`Hello, ${myNameParameter}!`)
}

greeting("Fabi") // Result: Hello, Fabi!


// JS Functions also can return values using the return-keyword

function greeting2(myNameParameter){
    return `Hello, ${myNameParameter}!`
}

var msg = greeting2("Fabi")

console.log(msg)  // Result: Hello, Fabi!

// you can only return A SINGLE VALUE
// but if you have more values to return, you can wrap them up into a single object/array

// Single functions are values, they can be assigned as properties on objects:

var whatToSay = {
    greeting3() {
        console.log("Hello!")
    },
    question() {
        console.log("What's your name?")
    },
    answer() {
        console.log("My name is Kyle.")
    }
}

whatToSay.greeting3()  // Result: Hello!