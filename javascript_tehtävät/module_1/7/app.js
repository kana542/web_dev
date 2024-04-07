document.addEventListener('DOMContentLoaded', function() {

let rolls = parseInt(prompt("Number of rolls: "));
let sum = 0

for (let i = 0; i < rolls; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector('#target').innerHTML = `The sum of dice rolls is ${sum}`;

});