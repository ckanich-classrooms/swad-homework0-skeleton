var fizzBuzzOutput = require("../fizzbuzz").fizzBuzzOutput;
const assert = require('assert');


describe("fizzbuzz", function() {
    it("Should output Fizz for numbers %3=0 && %5!=0", function(){
        assert.strictEqual(fizzBuzzOutput(6),"Fizz");
    });
    it("Should output Buzz for numbers %3!=0j && %5==0", function(){
        assert.strictEqual(fizzBuzzOutput(25),"Buzz");
    });
    it("Should output FizzBuzz if divisible by 15",function() {
        assert.strictEqual(fizzBuzzOutput(45),"FizzBuzz");
    });
    it("Should output the number if divisible by neither 3 nor 5",function(){
        assert.strictEqual(fizzBuzzOutput(98),"98");
    });
    
});
