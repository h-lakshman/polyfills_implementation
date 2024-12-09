//polyFill starting
Object.prototype.myBind = function (callObj, ...params) {
    if (typeof this !== 'function')
        return 'This is not a function'

    const self = this
    return function () {
        return self.apply(callObj, [...params, ...args])
    }
}
//polyFill ending

const person1 = {
    name: 'Vaibhav',
    age: 22
}
function printName(city) {
    return this.name + " is " + this.age + " years old and is from " + city
}
const fn = printName.myBind(person1, "Trivandrum")

console.log(fn())