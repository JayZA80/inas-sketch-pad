const sketchPad = document.getElementById('sketchPad');
const toolSelect = document.getElementById('toolSelect');
const canvasSize = document.getElementById('canvasSize');
const clearButton = document.getElementById('clearButton');

let counter = 0;
let keepGoing = true;
let drawing = false;
let tool = 'Pen';

sketchPad.addEventListener('mousedown', () => {
    drawing = true;
});

sketchPad.addEventListener('mouseup', () => {
    drawing = false;
});

toolSelect.addEventListener('change', () => {
    tool = toolSelect.value;
});

const draw = (el) => {
    el.classList.add('drawBlack');
}

const erase = el => {
    el.classList.remove('drawBlack');
}

const clearPad = () => {
    let sketchPadChildren = Array.from(document.getElementsByClassName('sketchDiv'));
    sketchPadChildren.map(div => {
        div.classList.remove('drawBlack');
    });
}

const createPad = function(num) {
    sketchPad.removeAttribute('class');
    sketchPad.classList.add(`size${num}`);
    while (keepGoing === true) {
        if (counter === num * num) {
            keepGoing = false;
        } else if (counter > num * num) {
            sketchPad.lastChild.remove();
            counter--;
        } else {
            let div = document.createElement('div');
            div.classList.add('sketchDiv');
            div.style.draggable = 'false';
            div.addEventListener('click', e => {
                if (tool === 'Pen') {
                    draw(e.target);
                } else if (tool === 'Eraser') {
                    erase(e.target);
                }
            });
            div.addEventListener('mouseenter', e => {
                if (drawing === true && tool === 'Pen') {
                    draw(e.target);
                } else if (drawing === true && tool === 'Eraser') {
                    erase(e.target);
                }
            });
            sketchPad.appendChild(div);
            counter++;
        }
    }
}

canvasSize.addEventListener('change', () => {
    let num = parseInt(canvasSize.value);
    keepGoing = true;
    createPad(num);
});

clearButton.addEventListener('click', clearPad);

createPad(16);