const sketchPad = document.getElementById('sketchPad');
let counter = 0;
let keepGoing = true;
let drawing = false;

sketchPad.addEventListener('mousedown', () => {
    drawing = true;
});

sketchPad.addEventListener('mouseup', () => {
    drawing = false;
});

const draw = (el) => {
    el.classList.toggle('drawBlack')
}

const createPad = function(num) {
    sketchPad.removeAttribute('class');
    sketchPad.classList.add(`size${num}`);
    while (keepGoing === true) {
        if (counter === num * num) {
            keepGoing = false;
        } else {
            let div = document.createElement('div');
            div.style.draggable = 'false';
            div.addEventListener('mouseenter', e => {
                if (drawing === true) {
                    draw(e.target);
                }
            });
            sketchPad.appendChild(div);
            counter++;
        }
    }
}

createPad(64);