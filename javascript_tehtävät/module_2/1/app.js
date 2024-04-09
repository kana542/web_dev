// odotetaan että koko html sivusto ensiksi latautunut
document.addEventListener('DOMContentLoaded', function() {
    let lista = [];
    for (let i = 0; i < 5; i++) {
        lista.push(parseInt(prompt("Anna numero: "), 10));
    }
    
    for (let i = 4; i >= 0; i--) {
        console.log(lista[i]);
    }
});