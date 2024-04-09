document.addEventListener('DOMContentLoaded', function() {
    function concat(array) {
        let s = ""
        for (let i in array) {
            s += array[i]
        }
        document.querySelector('#target').innerHTML = `${s}`;
    }

    a = ["Johnny", "DeeDee", "Joey", "Marky"]
    concat(a)
});