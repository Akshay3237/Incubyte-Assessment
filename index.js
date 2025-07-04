
class StringCalculator{
    add(n){
        if(n=="") return 0;
        if(!isNaN(parseInt(n))){
            return parseInt(n);
        }
        else{
            throw new Error("Non-numeric is not allowed!");
        }
    }
}

module.exports=StringCalculator;