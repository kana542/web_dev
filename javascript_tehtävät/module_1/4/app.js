document.addEventListener('DOMContentLoaded', function() {

let classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
let random = Math.floor(Math.random() * classes.length);
let name = prompt("Anna nimesi: ");

document.querySelector('#target').innerHTML = `${name}, you are ${classes[random]}.`

});