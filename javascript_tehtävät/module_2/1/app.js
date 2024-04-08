// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {
    list = []
    for (let i = 0; i < 5; i++) {
        list.push(parseInt(prompt("Anna luku: ")));
    }

    // bubblesort
    let swap = false;
    do {
        swap = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] < list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);

    for (let i in list) {
        console.log(list[i])
    }

});