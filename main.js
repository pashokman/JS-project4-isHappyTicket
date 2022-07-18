const isHappyTicket = (number) => {

    const length = String(number).length;
    let str = String(number);
    let sumOfFirstThreeDigits = 0;
    let sumOfLastThreeDigits = 0;

    if (length < 6 || length > 6) {
        return false;
    } else {
        for (let index = 0; index < ((length / 2)); index++) {
            sumOfFirstThreeDigits += Number(`${str[index]}`);   
        }
        for (let index = length - 3; index < length; index++) {
            sumOfLastThreeDigits += Number(`${str[index]}`);            
        }        
    }

    if (sumOfFirstThreeDigits === sumOfLastThreeDigits) {
        return true;
    } else return false;
}



console.log(isHappyTicket(385916)); // true
console.log(isHappyTicket(231002)); // false
console.log(isHappyTicket(128722)); // true