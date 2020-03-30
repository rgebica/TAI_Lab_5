"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log(`${this.real},${this.imaginary}i`);
    }
}
let a = new Complex(3, 4);
let b = new Complex(4, 6);
let c = a.add(b);
let d = a.sub(b);
let e = a.mod();
console.log(c.toString());
console.log(d.toString());
console.log(e);
