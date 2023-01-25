const sketchPad = document.getElementById('sketchPad');
let counter = 0;
let keepGoing = true;

const draw = (el) => {
    el.classList.toggle('drawBlack')
}

while (keepGoing === true) {
    if (counter === 16 * 16) {
        keepGoing = false;
    } else {
        let div = document.createElement('div');
        div.addEventListener('click', e => {
            draw(e.target);
        })
        sketchPad.appendChild(div);
        counter++;
    }
}