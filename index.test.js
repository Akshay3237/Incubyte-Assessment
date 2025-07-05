const StringCalculator = require('./index')

//first part
describe("Beginner's testsuite", () => {
    test('first test case with empty string', () => {
        const calc = new StringCalculator();
        numbers = "";
        const sum = calc.add(numbers);
        expect(sum).toBe(0);
    });


    test('only one numeric value pass as string', () => {
        const calc = new StringCalculator();
        numbers = "12";
        const sum = calc.add(numbers);
        expect(sum).toBe(12);
    });

    test('for non numeric values it will raise excpetion', () => {
        const calc = new StringCalculator();
        expect(() => calc.add("a")).toThrow("Non-numeric is not allowed!");
    });

    test("input as two values with comma seperation", () => {
        const calc = new StringCalculator();
        numbers = "12,24";
        const sum = calc.add(numbers);
        expect(sum).toBe(36);
    });

    test("Allow the add method to handle any amount of numbers", () => {
        calc = new StringCalculator();
        numbers = "12,24,25,50,333";
        const sum = calc.add(numbers);
        expect(sum).toBe(444);
    });

    test("Allow the add method to handle new lines between numbers", () => {
        calc = new StringCalculator();
        numbers = "12,24\n25,50\n333";
        const sum = calc.add(numbers);
        expect(sum).toBe(444);
    });

    /*
    To change the delimiter, the beginning of the string will contain 
    a separate line that looks like this: "//[delimiter]\n[numbers…]".
    //  For example, "//;\n1;2" where the delimiter is ";"
    //  should return 3.
    */


    test("Support different delimiters:", () => {
        calc = new StringCalculator();
        numbers = "//;\n12,24;25,50\n333";
        const sum = calc.add(numbers);
        expect(sum).toBe(444);
    });

    test("Calling add with a negative number will throw an exception", () => {
        calc = new StringCalculator();
        numbers = "//;\n12,24;25,50\n-4333;-12;25;26,-4\n-7";
        expect(() => calc.add(numbers)).toThrow("negative numbers not allowed -4333,-12,-4,-7");
    });


    test('not proper input :- delimiter at end of string', () => {
        const calc = new StringCalculator();
        numbers = "2,-4,3,-1,,";
        expect(() => calc.add(numbers)).toThrow("Non-numeric is not allowed!");
    })

});

//second part
describe("after testcases 5 given in pdf",()=>{
    test("Numbers bigger than 1000 should be ignored",()=>{
        const calc=new StringCalculator();
        numbers="2000,5,10,10,1004,15,4";
        sum=calc.add(numbers);
        expect(sum).toBe(44)
    });

    test("how many times Add() was invoked",()=>{
        const calc=new StringCalculator();
        calc.add("");
        calc.add("");
        calc.add("");
        calc.add("");
        count=calc.GetCalledCount()
        expect(count).toBe(4);
    })

});