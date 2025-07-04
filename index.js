
class StringCalculator{
    add(numbers){
        if(numbers=="") return 0;
        let delimiters = "\n,"; //default delimiters
        let negative_numbers=[]; //contains negative numbers
        if (numbers.startsWith("//") && numbers[3] === '\n') {
            delimiters += numbers[2]; //find delimiter here
            numbers = numbers.substring(4); //changing position of numbers to avoid first 3 characters
        }

       //adding escap characters to each
        const escapedDelimiters = delimiters
        .split('')
        .map(c => '\\' + c) 
        .join('');

        // create RegExp from the dynamic string because we can not directly use variable
        const delimiterRegex = new RegExp(`[${escapedDelimiters}]`);

        // now split using regex 
        numbers = numbers.split(delimiterRegex); //here we can't split directly by taking all delimiter inside a string we need object of RegExp
        let sum=0; //for initial value of sum as zero
        for(let i=0;i<numbers.length;i++){
            if(!isNaN(parseInt(numbers[i]))){ //check if non numeric values 
                if(numbers[i]<0) negative_numbers.push(numbers[i]); //if number is negative then add it here
                sum+= parseInt(numbers[i]); //do addition of each values
            }
            else{
                throw new Error("Non-numeric is not allowed!"); //if non numeric values then raise Exception
            }
        }

        if(negative_numbers.length>0){
            let CommonMessage="negative numbers not allowed"; //numbers are dynamic but base message here is common

            let ErrorMessage=CommonMessage+" "+negative_numbers.join(',');
            throw new Error(ErrorMessage);
        }

        return sum; //return final sum
    }
}

module.exports=StringCalculator;