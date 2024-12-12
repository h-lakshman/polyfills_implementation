Array.prototype.myForEach = function (fn, context = undefined) {
    const arr = this
    for (let i = 0; i < arr.length; i++) {
        fn.call(context,arr[i], i, arr)
    }
}

const arr = [1, 2, 3, 4, 5]
arr.forEach((element, i, arr) => {
    console.log(element, i, arr)
})
arr.myForEach((element, i, arr) => {
    console.log(element, i, arr)
})