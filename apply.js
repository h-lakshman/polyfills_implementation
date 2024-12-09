//polyFill starting
Object.prototype.myApply = function (callObj, params) {
    if (typeof this !== 'function')
        return "This is not a function"
    callObj.tempFunction = this;
    const result = callObj.tempFunction(...params);
    delete callObj.tempFunction;
    return result
}
//polyFill ending



let object1 = {
    name: "Vivek",
    surname: "moradiya",
    printName: function (age, city) {
        return this.name + " " + this.surname + " " + age + " " + city;
    }
};

let object2 = {
    name: "Vaibhav",
    surname: "Slayer"
};

console.log(object1.printName.myApply(object2, [22, "morbi"]));  