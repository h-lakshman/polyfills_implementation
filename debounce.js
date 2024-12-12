function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => fn.apply(this, ...args), delay)
    }
}


const debounceFunction = debounce(() => {
    console.log("debounce is called")
}, 5000)

debounceFunction()
debounceFunction()
debounceFunction()