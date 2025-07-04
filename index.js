
class StringCalculator{
    add(numbers){
        if(numbers=="") return 0;
        if(!isNaN(parseInt(numbers))){
            return parseInt(numbers);
        }
        else{
            throw new Error("Non-numeric is not allowed!");
        }
    }
}

module.exports=StringCalculator;