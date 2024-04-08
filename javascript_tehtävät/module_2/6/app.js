// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {
    function diceRoll() {
        let state = true;
        let ul = document.querySelector("#list");
        let li = document.createElement("li");

        while (state) {
            let roll = Math.floor(Math.random() * 6) + 1;
            if (roll === 6) {
                li.appendChild(document.createTextNode(`${roll}`));
                ul.appendChild(li);
                state = false;
            } else {
                li.appendChild(document.createTextNode(`${roll}`));
                ul.appendChild(li);
            }
        }
    }
});