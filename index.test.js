const StringCalculator=require('./index')

test('first test case with empty string', () => {
    const calc=new StringCalculator();
    n="";
    const sum=calc.add(n);
    expect(sum).toBe(0);
});


test('only one numeric value pass as string', () => {
    const calc=new StringCalculator();
    n="12";
    const sum=calc.add(n);
    expect(sum).toBe(12);
});

test('for non numeric values it will raise excpetion',()=>{
    const calc=new StringCalculator();
    expect(()=> calc.add("a") ).toThrow("Non-numeric is not allowed!");
})