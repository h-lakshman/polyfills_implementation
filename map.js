//polyFill starting
Array.prototype.myMap = function (fn) {
    let newArr = []
    const arr = this
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i, arr))
    }
    return newArr

}
//polyFill ending

const arr = [1, 2, 3, 4, 5]
console.log(arr.map((x) => x * x))
console.log(arr.myMap((x, i, arr) => x * i))