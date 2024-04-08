// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {
    let participants = parseInt(prompt("Kuinka monta pelaajaa: "));
    let names = []
    let ul = document.querySelector("#list");

    for (let i = 0; i < participants; i++) {
        names.push(prompt("Anna pelaajan nimi: "));
    }

    names.sort();

    for (let i in names) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${names[i]}`));
        ul.appendChild(li);
    }
});