document.addEventListener('DOMContentLoaded', function() {
    function diceRoll(sides) {
        let ul = document.querySelector("#list");
    
        while (true) {
            let roll = Math.floor(Math.random() * sides) + 1;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${roll}`));
            ul.appendChild(li);
            if (roll === sides) {
                break;
            }
        }
    }
    
    diceRoll(21);
});