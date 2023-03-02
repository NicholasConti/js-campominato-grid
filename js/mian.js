"use strict";

//------------------
//FUNCTIONS
//------------------
function myCreateEl(tagEl, classEl, numCell){
    const element = document.createElement(tagEl);  //creazioen div class= cell
    element.classList.add(classEl);
    element.innerText = numCell;
    //CAMBIO COLORE
    element.addEventListener('click',
        function(){
            element.classList.add('colorbg');
            console.log(numCell);
        }
    )
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

//creazione tabella
button.addEventListener('click',
    function(){
        for(let i = 1; i <= 100; i++){
            const createdElement = myCreateEl('div', 'cell', i);
            appendElement(cellBoard, createdElement);
        }
    }
);