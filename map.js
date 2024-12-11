//polyFill starting
Array.prototype.myMap = function (fn, context = undefined) {
    let newArr = []
    const arr = this
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn.call(context, arr[i], i, arr))
    }
    return newArr

}
//polyFill ending

//simple example
const array = [1, 2, 3, 4, 5]
console.log(array.map((x, i, array) => x * i)) //[ 0, 2, 6, 12, 20 ]
console.log(array.myMap((x, i, array) => x * i)) //[ 0, 2, 6, 12, 20 ]

//example with context or this 
let arr = [1, 2, 4, 5, 6, 4];
let context = {
    multiplier: 7,
    offset: 10
};

let newArr = arr.myMap(function (value) {
    return value * this.multiplier + this.offset;
}, context);

console.log(newArr);  // [17, 24, 38, 45, 52, 38]