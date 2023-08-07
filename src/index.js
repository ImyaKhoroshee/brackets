module.exports = function check(str, bracketsConfig) {
    const temp = [].concat(...bracketsConfig).join('').split(''); // массив скобок из bracketsConfig
    
    let counter = 0;
    const strToArr = str.split(''); // массив скобок str
  
    temp.forEach(element => {
        if (strToArr.indexOf(element) !== -1) {
            counter++;
        }
    });

    if (temp.length !== counter) { // проверка, что в обоих частях есть одинаковые элементы
        return false;
    }
    if (str === temp.join('')) { // если явно совпадают, выходим
        return true;
    }
  
    counter = 0;
    const openBracketsAndDigits = ['(', '[', '{'];
    const closedracketsAndDigits = [')', ']', '}', '|', '1', '2', '3', '4', '5', '6', '7', '8'];
    const sequence = ['[]', '{}', '()', '||'];
    
    let resultArray = [];
 
    strToArr.forEach(symbol => {
        if (counter < 0) { // если счетчик не обнулился, то значит количество открывающихся и закрывающихся скобок не равны
            return false;
        }
        if (openBracketsAndDigits.includes(symbol)) {   
            counter++;
            resultArray.push(symbol); 
        } 
        if (closedracketsAndDigits.includes(symbol)) {
            counter--;
            resultArray.push(symbol);
            if (sequence.includes(resultArray.slice(-2).join(''))) { // проверяем если в конце есть открытая и закртиая скобка одинаковая, то удаляем ее
                resultArray.splice(resultArray.length - 2, 2);
            }
            if (symbol === '|') { // этот символ всем мешает :)
                counter++;
            }
        }
    });
 
    return (counter === 0 && resultArray.length === 0); // если кол-во скобок одинаковое или в массиве не осталось скобок, значит совпадение есть, иначе ложь
}

