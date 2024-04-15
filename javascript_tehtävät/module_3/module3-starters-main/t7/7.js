let a = document.querySelector("#trigger");
let i = document.querySelector("#target");

a.addEventListener("mouseover", function() {
    i.src = "./img/picB.jpg";
});

a.addEventListener("mouseout", function() {
    i.src = "./img/picA.jpg"
});