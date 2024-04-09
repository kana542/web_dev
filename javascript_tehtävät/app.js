document.addEventListener('DOMContentLoaded', function() {
    // candidates
    let c = parseInt(prompt("Number of candidates: "));
    let list = [];

    for (let i = 0; i < c; i++) {
        n = prompt("Anna nimi: ");
        list.push({"name": n, "votes": 0});
    }

    // voters
    let v = parseInt(prompt("Number of voters: "));

    for (let i = 0; i < v; i++) {
        vote = prompt("Name of the person you vote: ");
        if (list[i].name === vote) {
            list[i].votes += 1;
        } else {
            continue;
        }
    }

    let win =


});