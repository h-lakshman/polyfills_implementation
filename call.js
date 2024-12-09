// PolyFill starting
Object.prototype.myCall = function (callObj, ...params) {
    if (typeof this !== 'function')
        return "This is not a function"
    console.log(typeof this, this)
    callObj.tempFunction = this;
    const result = callObj.tempFunction(...params);
    delete callObj.tempFunction;
    return result

}
//PolyFill end

let object1 = {
    name: 'Vaibhav',
    getAge: function (age) {
        return this.name + " " + age
    }
}

let object2 = {
    name: 'Lakshman'
}

console.log(object1.getAge.call(object2, 22))