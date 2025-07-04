
class StringCalculator{
    add(numbers){
        if(numbers=="") return 0;
        numbers=numbers.split(/[\n,]/);

        let sum=0;
        for(let i=0;i<numbers.length;i++){
            if(!isNaN(parseInt(numbers[i]))){
                sum+= parseInt(numbers[i]);
            }
            else{
                throw new Error("Non-numeric is not allowed!");
            }
        }

            return sum;
    }
}

module.exports=StringCalculator;