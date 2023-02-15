// Equal...ish ( X value same as Y value? )
// There is a difference in JS between "equality" comparison and an "equivalence" comparison

3 === 3.0           // true
"yes" === "yes"     // true
null === null       // true

42 === "42"         // false
"hello" === "Hello" // false
null === 0          // false

NaN === NaN         // false
0 === -0            // true

// for NaN comparisons, use the..
Number.isNaN(xx)
//for the -0 comparisons, use the..
Object.is(xx)

// Comparisons of object values (non-primitives) - consider..
[1,2,3] === [1,2,3]             // false
{ a: 42 } === { a: 42}          // false
(x => x * 2) === (x => x * 2)   // false



// JS does not define === as structural equality for object values.
// Instead, === uses identity equality for object values


// !!! In JS, all object values are held BY REFERENCE, are assigned and passed by REFERENCE-COPY, AND to our current
// discussion, are COMPARED BY REFERENCE (identity) equality.

var x = [ 1, 2, 3]

// assignment is BY REFERENCE-COPY, so y references the *same* array as x,
// not another copy of it.
var y = x

y === x             // true
y === [ 1, 2, 3 ]   // false
x === [ 1, 2, 3 ]   // false

// The array structure and contents don't matter in this comparison, only the REFERENCE IDENTITY.
// JS does not provide a mechanism for structural equality comparison of object values, only
// REFERENCE IDENTITY comparison.

