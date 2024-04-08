// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {
    let list = [];
    let state = true;

    let temp = null;

    while (state) {
        let number = parseInt(prompt("Anna numero: "));
        if (!list.includes(number)) {
            list.push(number)
        } else {
            console.log("Number has already been given.");
            state = false;
        }
    }

    list.sort();

    for (let i in list) {
        console.log(list[i]);
    }
});