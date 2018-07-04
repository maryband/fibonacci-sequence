let number = parseFloat(prompt('Enter number of sequence'));
const result = fibonacci(number);
document.write('The element with position ' + number + ' in the Fibonacci sequence is ' + result);

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