let t = document.getElementById("target");

let first = document.createElement("li");
let second = document.createElement("li");
let third = document.createElement("li");

first.textContent = "First item";
second.textContent = "Second item";
third.textContent = "Third item";

t.appendChild(first);
t.appendChild(second);
t.appendChild(third);