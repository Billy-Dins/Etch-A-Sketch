let canvas = document.querySelector('#playArea');
let canvasAttributes = document.querySelector('#playArea');
let canvasRange = document.querySelector("#areaRange");
window.addEventListener('load', onloadCanvas('grey'));
let gridSqr = document.querySelector('#gridSquare');

canvasRange.addEventListener('change', () => {
    rangeChange('grey');
});

function onloadCanvas(pixelColor) {
    let rangeValue = document.querySelector('#areaRange').value;
    let valueSquared = (rangeValue * rangeValue);
    let autoStr = 'auto '.repeat(rangeValue);
    canvasAttributes.setAttribute('style', `grid-template-columns:${autoStr}`);
    for (let i = 0; i < valueSquared; i++) {
        let gridSqr = document.createElement('div');
        gridSqr.setAttribute('id', 'gridSquare');
        canvas.appendChild(gridSqr);
        gridSqr.addEventListener('mouseover', () => {
            gridSqr.setAttribute('style', `background-color:${pixelColor}`)
        })
    };
};

function rangeChange(pixelColor) {
    let rangeValue = document.querySelector('#areaRange').value;
    let valueSquared = (rangeValue * rangeValue);
    let autoStr = 'auto '.repeat(rangeValue);
    canvasAttributes.setAttribute('style', `grid-template-columns:${autoStr}`)
    let allDivs = document.querySelectorAll('#gridSquare')
    allDivs.forEach(itm => {
        itm.remove()});
    for (let i = 0; i < valueSquared; i++) {
        let gridSqr = document.createElement('div')
        gridSqr.setAttribute('id', 'gridSquare');
        canvas.appendChild(gridSqr);
        gridSqr.addEventListener('mouseover', () => {
            gridSqr.setAttribute('style', `background-color:${pixelColor}`)
        });
}};

function colorChange(pixelColor){
    let totalGrid = document.querySelectorAll('#gridSquare');
        totalGrid.forEach(sqr => {
        sqr.addEventListener('mouseover', () => {
            if (pixelColor == 'grey'){
                sqr.setAttribute('style', "background-color:grey")
            } else if (pixelColor == 'rainbow'){
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                sqr.setAttribute('style', "background-color:rgb(" + x + "," + y + "," + z + ")")
            } else if (pixelColor == 'white'){
                sqr.setAttribute('style', 'background-color:white');
            }
        });
    }); 
}
function clear() {
    let rangeValue = document.querySelector('#areaRange').value;
    let valueSquared = (rangeValue * rangeValue);
    let autoStr = 'auto '.repeat(rangeValue);
    canvasAttributes.setAttribute('style', `grid-template-columns:${autoStr}`)
    let allDivs = document.querySelectorAll('#gridSquare')
    allDivs.forEach(itm => {
        itm.remove()});
        for (let i = 0; i < valueSquared; i++) {
            let gridSqr = document.createElement('div')
            gridSqr.setAttribute('id', 'gridSquare');
            canvas.appendChild(gridSqr);
    }; colorChange('grey')
};

let reset = document.querySelector('#resetBtn')
reset.addEventListener('click', clear)

let grey = document.querySelector('#greyBtn')
grey.addEventListener('click', function getColor() {
    pixelColor = 'grey'
    colorChange(pixelColor)
});

let rainbow = document.querySelector('#rainbowBtn')
rainbow.addEventListener('click', function getColor() {
    var pixelColor = 'rainbow'
    colorChange(pixelColor)
});

let eraser = document.querySelector('#eraser')
eraser.addEventListener('click', function color() {
    var pixelColor ='white'
    colorChange(pixelColor)
});