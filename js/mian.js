"use strict";

//------------------
//FUNCTIONS
//------------------
function myCreateEl(tagEl, classEl){
    const element = document.createElement(tagEl);  //creazioen div class= cell
    element.classList.add(classEl);
    return element;
}

function appendElement(containerEl, sonEl){
    containerEl.append(sonEl);
}


//------------------
//MAIN
//------------------
const cellBoard = document.querySelector('.board');

const button = document.getElementById("start");

button.addEventListener('click',
    function(){
        for(let i = 1; i <= 100; i++){
            const createdElement = myCreateEl('div', 'cell');
            appendElement(cellBoard, createdElement);
        }
    }
);