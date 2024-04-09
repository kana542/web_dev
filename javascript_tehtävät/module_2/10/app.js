document.addEventListener('DOMContentLoaded', function() {
    // candidates
    let c = parseInt(prompt("Number of candidates: "));
    let list = [];

    for (let i = 0; i < c; i++) {
        let n = prompt("Candidate name: ");
        list.push({"name": n, "votes": 0});
    }

    // voters
    let v = parseInt(prompt("Number of voters: "));
    for (let i = 0; i < v; i++) {
        let name = prompt("Name of the person you vote: ");
        let index = list.findIndex(obj => obj.name === name);

        if (index !== -1) {
            list[index].votes += 1;
        } else {
            continue;
        }
    }

    let winner = list.reduce((prev_c, curr_c) => (prev_c.votes > curr_c.votes) ? prev_c : curr_c);

    console.log(`Voittaja on ${winner.name} ${winner.votes} äänellä:`);

    for (let i = 0; i < c; i++) {
        console.log(`${list[i].name}: ${list[i].votes}`)
    }
});