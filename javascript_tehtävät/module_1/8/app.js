document.addEventListener('DOMContentLoaded', function() {

let start = parseInt(prompt("Start year: "));
let end = parseInt(prompt("End year: "));
let ul = document.querySelector("#list");

for (; start <= end; start++) {
    if ((start % 4 === 0 && start % 100 !== 0) || (start % 400 === 0)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${start}`));
        ul.appendChild(li);
    }
}
});