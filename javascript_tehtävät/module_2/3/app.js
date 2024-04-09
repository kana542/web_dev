document.addEventListener('DOMContentLoaded', function() {
    let names = []

    for (let i = 0; i < 6; i++) {
        names.push(prompt("Anna koiran nimi: "))
    }

    let ul = document.querySelector("#list");

    names.sort.reverse();

    for (let i in names) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${names[i]}`));
        ul.appendChild(li);
    }
});