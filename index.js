
class StringCalculator {
    #counting_of_add = 0;

    //return Delimiter expression so it will be easy to pass in split method
    //i create this seperat function because of dont want all logic in one function and so then it will be easy to understand.
    #GetDelimiter(customDelim) {
        
        if (customDelim[0] == '[') { //here check if there is [ or not if not then only one delim is take
            customDelim = customDelim.substring(1, customDelim.length - 1); //remove first [ and last ] brackets
            customDelim=customDelim
            .split('][')
            .map( delim => `${this.escapeRegex(delim)}`).join('|'); //now i replace ][ with / and also i use excapeRegex function
        }
        let delimiter = new RegExp(`\\n|,|${customDelim}`);
        return delimiter;
    }


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
            let customDelim = numbers.substring(2, delimiterLineEnd);
            delimiter=this.#GetDelimiter(customDelim)
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

    //this function is use for if string contain any regix specific characters so it will be replace by \\character 
    escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

module.exports = StringCalculator;