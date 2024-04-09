document.addEventListener('DOMContentLoaded', function() {
    list = []
    state = true;
    while (state) {
        let number = parseInt(prompt("Anna numero: "));
        if (number != 0) {
            list.push(number);
        } else {
            state = false;
        }
    }

    list.sort().reverse()

    for (let i in list) {
        console.log(list[i])
    }
});