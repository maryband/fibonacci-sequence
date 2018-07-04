let number = parseFloat(prompt('Enter number of sequence'));
const result = fibonacci(number);
alert('The element with position ' + number + ' in the Fibonacci sequence is ' + result);

function fibonacci(number) {

    let fibPrev = 1;
    let fibPrePrev = 1;
    let fibNext = 2;

    for(let i = 3; i <= number; i++) {
        
        fibNext = fibPrev + fibPrePrev;
        fibPrePrev = fibPrev;
        fibPrev = fibNext;
    }
    
    return fibNext;
} 

let num = parseFloat(prompt('Enter number of sequence'));
const solution = fibonacciArr(num);
alert('The element with position ' + num + ' in the Fibonacci sequence is ' + solution);

function fibonacciArr(num) {

    let fibArr = [1, 1];

    for (let i = 2; i <= num; i++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }

    return fibArr[num - 1];
}

