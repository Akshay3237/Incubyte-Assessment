
class StringCalculator{
    add(numbers){
        if(numbers=="") return 0;
        numbers=numbers.split(",");
        if(numbers.length==1){
            if(!isNaN(parseInt(numbers))){
                return parseInt(numbers);
            }
            else{
                throw new Error("Non-numeric is not allowed!");
            }
        }
        else if(numbers.length==2){
            let number1=numbers[0];
            let number2=numbers[1];
            let sum=0;
            if(!isNaN(parseInt(number1))){
                sum+= parseInt(number1);
            }
            else{
                throw new Error("Non-numeric is not allowed!");
            }
            if(!isNaN(parseInt(number2))){
                sum+= parseInt(number2);
            }
            else{
                throw new Error("Non-numeric is not allowed!");
            }

            return sum;
        }
        
    }
}

module.exports=StringCalculator;