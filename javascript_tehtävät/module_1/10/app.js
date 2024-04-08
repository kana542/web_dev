document.addEventListener('DOMContentLoaded', function() {

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