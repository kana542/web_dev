'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let t = document.getElementById("target");

for (let i = 0; i < students.length; i++) {
    let op = document.createElement("option");
    op.value = students[i].id;
    op.textContent = students[i].name;
    t.appendChild(op);
}