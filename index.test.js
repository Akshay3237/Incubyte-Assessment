const StringCalculator=require('./index')

test('first test case with empty string', () => {
    const calc=new StringCalculator();
    n="";
    const sum=calc.add(n);
    expect(sum).toBe(0);
});
