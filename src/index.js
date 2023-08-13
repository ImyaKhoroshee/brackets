module.exports = function check(str, bracketsConfig) {
    const config = bracketsConfig.map(pairOfbrackets => pairOfbrackets.join('')); 
    const arrayOfBracketsToCheck = str.split('');
    const openBracketsAndDigits = ['(', '[', '{', '1', '3', '5'];
    const closedBracketsAndDigits = [')', ']', '}', '|', '2', '4', '6', '7', '8'];
    
    let resultArray = [];
 
    arrayOfBracketsToCheck.forEach(symbol => {
        if (openBracketsAndDigits.includes(symbol)) {   
            resultArray.push(symbol);
        } 
        if (closedBracketsAndDigits.includes(symbol)) {
            resultArray.push(symbol);
            if (config.includes(resultArray.slice(-2).join(''))) {
                resultArray.splice(resultArray.length - 2, 2);
            }
        }
    });
    return (resultArray.length === 0); 
}

