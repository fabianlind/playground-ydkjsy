// Coercive Comparisons

// COERCION means a value of one type being converted to its respective representation in another type
// (to whatever extent possible).
// == & === DO EXACTLY THE SAME THING, NO DIFFERENCE WHATSOEVER

== //allows type conversions FIRST - consider..
42 == "42"                      // true
1 == true                       // true

// == causes the non-number values ("42" and true) to be converted to numbers before the comparisons are made.
// == prefers primitive numeric comparisons

// relational comparison operators like..
x > y
x < y
x <= y
x >= y
// Just like ==, these operators will perform as if they're "strict" if the types being relationally compared
// already match, but they'll allow coercion first ( generally, to numbers ) if the types differ.
// consider:

var arr = [ "1", "10", "100", "1000" ]
for (let i = 0; i < arr.length && arr[i] < 500; i++){
    // will run 3 times
}

