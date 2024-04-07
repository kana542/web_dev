// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {


// 1. 
// console.log("I'm printing to console!");


// 2. 
// let a = prompt("Give your name: ");
// console.log(`Hello, ${a}!`);


// 3 . 
// n1 = parseInt(prompt("Anna ensimmäinen numero: "));
// n2 = parseInt(prompt("Anna toinen numero: "));
// n3 = parseInt(prompt("Anna kolmas numero: "));
// let sum = n1 + n2 + n3;
// let product = n1 * n2 * n3;
// let average = product / 3;
// document.querySelector('#target').innerHTML = `Sum: ${sum} <br> Product: ${product} <br> Average: ${average}`


// 4. 
// let classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
// let random = Math.floor(Math.random() * classes.length);
// let name = prompt("Anna nimesi: ");
// document.querySelector('#target').innerHTML = `${name}, you are ${classes[random]}.`


// 5.
// let year = parseInt(prompt("Anna vuosi: "));
// if (year % 4 === 0) {
//     document.querySelector('#target').innerHTML = `${year} is a leap year.`
// } else if (year % 100 === 0 && year % 400 === 0) {
//     document.querySelector('#target').innerHTML = `${year} is a leap year.`
// } else {
//     document.querySelector('#target').innerHTML = `${year} is a not a leap year.`
// }


// 6.
// let answer = confirm('Should I calculate the square root?');
// if (answer === true) {
//     let number = parseInt(prompt("Anna numero: "));
//     if (number < 0) {
//         document.querySelector('#target').innerHTML = `The square root of a negative number is not defined.`
//     } else {
//         document.querySelector('#target').innerHTML = `Square root of number ${number} is ${Math.sqrt(number)}.`
//     }
// } else {
//     document.querySelector('#target').innerHTML = `The square root is not calculated.`
// }


// 7.
// let rolls = parseInt(prompt("Number of rolls: "));
// let sum = 0
// for (let i = 0; i < rolls; i++) {
//     sum += Math.floor(Math.random() * 6) + 1;
// }
// document.querySelector('#target').innerHTML = `The sum of dice rolls is ${sum}`;


// 8.
// let start = parseInt(prompt("Start year: "));
// let end = parseInt(prompt("End year: "));
// let ul = document.querySelector("#list");
// for (; start <= end; start++) {
//     if ((start % 4 === 0 && start % 100 !== 0) || (start % 400 === 0)) {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${start}`));
//         ul.appendChild(li);
//     }
// }


// 9.
// let number = parseInt(prompt("Anna numero: "));
// isPrime = true
// for (let i = 2, a = Math.sqrt(number); i <= a; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime && number > 1) {
//     document.querySelector('#target').innerHTML = `${number} is a prime number.`;
// } else {
//     document.querySelector('#target').innerHTML = `${number} is not a prime number.`;
// }


// 10.
let dices = parseInt(prompt("Anna noppien määrä: "));
let sum = parseInt(prompt("Anna heittojen summa: "));

if (sum > (dices * 6)) {
    document.querySelector('#target').innerHTML = `The sum is not possible`;
} else {
    let prob = 0;
    for (let i = 0; i < 10000; i++) {
        let round = 0;
        for (let t = 0; t < dices; t++) {
            round += Math.floor(Math.random() * 6) + 1;
        }
        if (round === sum) {
            prob++;
        }
    }
    let calc = prob / 10000;
    document.querySelector('#target').innerHTML = `Probability to get sum ${sum} with ${dices} dice is ${(calc * 100).toFixed(0)}%`;
}

});