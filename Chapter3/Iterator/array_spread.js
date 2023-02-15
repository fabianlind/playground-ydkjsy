// operator '...' - 'spread' operator - array 'spread'

let vals = [1,3,5,7]
let vals2 = [2,4,6,8]

let sortedSumArray = [...vals, ...vals2].sort()

console.log(sortedSumArray)

let object1 = {
    value1: 1,
    value2: 2,
    value3: 3,
}

let object2 = {
    value4: 4,
    value5: 5,
    value6: 6,
}

let combinedObjects = {...object2, ...object1}

console.log(combinedObjects)
