document.addEventListener('DOMContentLoaded', function() {

let year = parseInt(prompt("Anna vuosi: "));

if (year % 4 === 0) {
    document.querySelector('#target').innerHTML = `${year} is a leap year.`
} else if (year % 100 === 0 && year % 400 === 0) {
    document.querySelector('#target').innerHTML = `${year} is a leap year.`
} else {
    document.querySelector('#target').innerHTML = `${year} is a not a leap year.`
}
});