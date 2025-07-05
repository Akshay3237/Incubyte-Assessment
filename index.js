
class StringCalculator {
    #counting_of_add = 0;



    GetCalledCount() {
        return this.#counting_of_add;
    }

    add(numbers) {
        this.#counting_of_add++;
        if (numbers == "") return 0;

        let negative_numbers = []; //contains negative numbers
        let delimiter = /[\n,]/;
        

        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf("\n");
            const customDelim = numbers.substring(2, delimiterLineEnd);
            if(customDelim[0]=='['){
                customDelim=customDelim.substring(1,customDelim.length-1);
            }
            delimiter = new RegExp(`\\n|,|${this.escapeRegex(customDelim)}`);
            numbers = numbers.substring(delimiterLineEnd + 1);
        }

        numbers = numbers.split(delimiter);



        
      let sum = 0; //for initial value of sum as zero
        for (let i = 0; i < numbers.length; i++) {
            if (!isNaN(parseInt(numbers[i]))) { //check if non numeric values 
                if (numbers[i] < 0) negative_numbers.push(numbers[i]); //if number is negative then add it here
                if (numbers[i] <= 1000) {
                    sum += parseInt(numbers[i]); //do addition of each values if it is less than or equal to 1000
                }
            }
            else {
                throw new Error("Non-numeric is not allowed!"); //if non numeric values then raise Exception
            }
        }

        if (negative_numbers.length > 0) {
            let CommonMessage = "negative numbers not allowed"; //numbers are dynamic but base message here is common

            let ErrorMessage = CommonMessage + " " + negative_numbers.join(',');
            throw new Error(ErrorMessage);
        }

        return sum; //return final sum
    }
    escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

module.exports = StringCalculator;