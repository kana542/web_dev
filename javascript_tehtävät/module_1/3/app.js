n1 = parseInt(prompt("Anna ensimmäinen numero: "));
n2 = parseInt(prompt("Anna toinen numero: "));
n3 = parseInt(prompt("Anna kolmas numero: "));

let sum = n1 + n2 + n3;
let product = n1 * n2 * n3;
let average = product / 3;

document.querySelector('#target').innerHTML = `Sum: ${sum} <br> Product: ${product} <br> Average: ${average}`