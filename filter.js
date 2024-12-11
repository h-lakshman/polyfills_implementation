//polyFill starting
Array.prototype.myFilter = function (fn, context = undefined) {
    let newArr = []
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        const result = fn.call(context, arr[i], i, arr)
        if (result) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
//polyFill ending

//simple example
const array = [1, 2, 3, 4, 5]
console.log(array.filter((x) => x % 2 === 0)) //[2,4]
console.log(array.myFilter((x, i, array) => x % 2 === 0)) //[2,4]

//example with context or this
let arr = [1, 2, 4, 5, 6, 4];
let context = {
    condition: 5
};

let newArr = arr.myFilter(function (value) {
    return value > this.condition;
}, context);

console.log(newArr);  // [6]