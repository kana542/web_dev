'use strict';
const names = ['John', 'Paul', 'Jones'];

let t = document.getElementById("target");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    t.appendChild(li);
}