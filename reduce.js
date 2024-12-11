Array.prototype.myReduce = function (fn, initialValue) {
    const arr = this
    let accumulator = initialValue
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i], i, arr)
    }
    return accumulator
}


//simple example
const arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((acc, curr, i, arr) => {
    acc = acc + curr + i + arr[i]
    return acc
}, 0)) //40
console.log(arr.myReduce((acc, curr, i) => {
    acc = acc + curr + i + arr[i]
    return acc
}, 0)) //40

//another example
const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] }
];
const allBooks = friends.myReduce((acc, cur) => [...acc, ...cur.books], []);

console.log(allBooks); 
 // ["Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

