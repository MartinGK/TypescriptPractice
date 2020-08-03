function add(n1: number, n2: number, printResult: boolean, text: string) {

    const result = n1 + n2;
    if (printResult) {
        return text + result;
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const text = 'Result is: '

const result = add(number1, number2, printResult, text);

console.log(result)