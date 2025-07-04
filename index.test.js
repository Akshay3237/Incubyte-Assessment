const StringCalculator=require('./index')

test('first test case with empty string', () => {
    const calc=new StringCalculator();
    numbers="";
    const sum=calc.add(numbers);
    expect(sum).toBe(0);
});


test('only one numeric value pass as string', () => {
    const calc=new StringCalculator();
    numbers="12";
    const sum=calc.add(numbers);
    expect(sum).toBe(12);
});

test('for non numeric values it will raise excpetion',()=>{
    const calc=new StringCalculator();
    expect(()=> calc.add("a") ).toThrow("Non-numeric is not allowed!");
})

test("input as two values with comma seperation",()=>{
    const calc=new StringCalculator();
    numbers="12,24";
    const sum=calc.add(numbers);
    expect(sum).toBe(36);
})

test("Allow the add method to handle any amount of numbers" ,()=>{
     const calc=new StringCalculator();
    numbers="12,24,25,50,4333";
    const sum=calc.add(numbers);
    expect(sum).toBe(4444);
})