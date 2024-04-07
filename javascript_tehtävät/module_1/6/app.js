document.addEventListener('DOMContentLoaded', function() {

let answer = confirm('Should I calculate the square root?');

if (answer === true) {
    let number = parseInt(prompt("Anna numero: "));
    if (number < 0) {
        document.querySelector('#target').innerHTML = `The square root of a negative number is not defined.`
    } else {
        document.querySelector('#target').innerHTML = `Square root of number ${number} is ${Math.sqrt(number)}.`
    }
} else {
    document.querySelector('#target').innerHTML = `The square root is not calculated.`
}
});