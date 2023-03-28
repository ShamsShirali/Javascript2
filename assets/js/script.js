"use strict";

// task1

let a = 2;
let b = 4;

let result = (a + b < 10) ? 'Yes' : 'No';

console.log(result);

// task2

function numPower(num, power) {

    let product = 1;

    for (let i = 1; i <= power; i++) {
        product *= num;
    }

    return product;
}

console.log(numPower(4, 3));
console.log(numPower(16, 2));

// task3

let tbl = document.getElementById('tbl');
let slc = document.getElementById('slc');

function add() {

    tbl.style.display = 'table';

    let result = '';
    let color;

    for (let i = 1; i <=slc.value; i++) {

        result += `<tr>`;

        for (let j = 1; j <=slc.value; j++) {

            color=(i==j || i+j-1==slc.value) ? 'black' : '';
            result += `<td style="background-color: ${color};">${i}+${j}</td>`;

        }

        result += `</tr>`;
    }

    tbl.innerHTML = result;
}

slc.addEventListener('click', add);