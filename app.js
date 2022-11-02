let canvas = document.querySelector('#playArea');
let sqrBtn = document.querySelector('#sqrBtn');
let canvasAttributes = document.querySelector('#playArea');
let canvasRange = document.querySelector("#areaRange");
window.addEventListener('load', updateCanvas('grey'));
canvasRange.addEventListener('change', () => {
    updateCanvas('grey')
});

function updateCanvas(updateColor){
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
        if (updateColor == 'grey'){
            gridSqr.addEventListener('mouseover', (e) => {
                gridSqr.setAttribute('style', "background-color:grey")
            });
        } else if (updateColor == 'rainbow'){
        gridSqr.addEventListener('mouseover', (e) => {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            gridSqr.setAttribute('style', "background-color:rgb(" + x + "," + y + "," + z + ")")
        })
        } else if (updateColor == 'darken'){
            console.log('idk yet')
        }
    }
};
let grey = document.querySelector('#greyBtn')
grey.addEventListener('click', () => {
    updateCanvas('grey')
});
let rainbow = document.querySelector('#rainbowBtn')
rainbow.addEventListener('click', () => {
    updateCanvas('rainbow')
});
let darken = document.querySelector('#darkenBtn')
darken.addEventListener('click', () => {
    updateCanvas('darken')
});