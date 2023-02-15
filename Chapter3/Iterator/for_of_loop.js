// this is a for...of loop

// given an iterator of some data source:
// var it = /* .. */;
//
// // loop over its results one at a time
// for (let val of it) {
//     console.log(`Iterator value: ${ val }`);
// }



var array = [ (0,1,2,3,4,5,6,7,8,9,10), (11,12,13,14,15,16,17,18,19,20) ]

for (let val of array) {
    console.log(`Iterator value: ${ array }`)
}
