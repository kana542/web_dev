document.addEventListener('DOMContentLoaded', function() {

let number = parseInt(prompt("Anna numero: "));
isPrime = true

for (let i = 2, a = Math.sqrt(number); i <= a; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime && number > 1) {
    document.querySelector('#target').innerHTML = `${number} is a prime number.`;
} else {
    document.querySelector('#target').innerHTML = `${number} is not a prime number.`;
}
});