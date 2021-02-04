var calculator = require("../app/calculator.js");
var assert = require("chai").assert;


describe("add", ()=> {
    function tester(i, j){
        let expectedPass = i +j;
        let expectedFail= i+j +1;

        it(`add(${i},${j}) exepected result ${expectedPass} PASS`, ()=>{
            assert.equal(calculator.add(5,2), expectedPass);
        })
        it(`add(${i},${j}) expected result ${expectedFail} FAIL`, () =>{
            assert.equal(calculator.add(5,2), expectedFail);
        })
    }
    let i=5
    let j=2
    tester(i,j);
})


describe("sub", ()=>{
    function tester(i, j){
        let expectedPass = i-j;
        let expectedFail = i-j+2;

        it(`sub(${i}, ${j}) exepcted result ${expectedPass} PASS`, ()=>{
            assert.equal(calculator.sub(5,2), expectedPass);
        })
        it(`sub(${i}, ${j}) exepected result ${expectedFail} FAIL`, ()=>{
            assert.equal(calculator.sub(5,2), expectedFail);
        })
    }
    let i=5;
    let j= 2;
    tester(i,j);
})

describe("mul", ()=>{
    function tester(i, j){
        let exepectedPass= i*j;
        let exepectedFail= i*j +2;

        it(`mul(${i}, ${j}) exepected result ${exepectedPass} PASS`, ()=>{
assert.equal(calculator.mul(5,2), exepectedPass);
        })
        it(`mul(${i}, ${j}) exepected result ${exepectedFail} FAIL`, ()=>{
            assert.equal(calculator.mul(5,2), exepectedFail);
        })
    }
        
        let i=5;
        let j=2;
        tester(i, j);
})

describe("div", ()=>{
    function tester(i, j){
        let exepectedPass=i/j;
        let expectedFail= i/j -3;

        it(`div(${i}, ${j}) exepected result ${exepectedPass} PASS`, ()=>{
            assert.equal(calculator.div(10, 2), exepectedPass);

        })

        it(`div(${i}, ${j}) exepected result ${expectedFail} FAIL`, ()=>{
            assert.equal(calculator.div(10, 2), expectedFail);
        })
    }
    let i=10;
    let j=2;
    tester(i,j);
})