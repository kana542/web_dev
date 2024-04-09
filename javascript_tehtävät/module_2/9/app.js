document.addEventListener('DOMContentLoaded', function() {
    function even(array) {
        let t = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                t.push(array[i])
            }
        }
        return t;
    }

    a = [2, 7, 4]
    console.log(a)
    console.log(even(a))
});