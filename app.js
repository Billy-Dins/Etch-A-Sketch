let canvas = document.querySelector('#playArea');
let sqrBtn = document.querySelector('#sqrBtn');
let canvasAttributes = document.querySelector('#playArea')

let canvasRange = document.querySelector("#areaRange");
canvasRange.addEventListener('change', canvasValue);

// This generates a square of divs on the canvas 
// of the selected value from the slider.
function canvasValue(){
    let canvasValues = document.querySelector('#areaRange').value;
    let valueSquared = (canvasValues * canvasValues);
    let autoStr = 'auto '.repeat(canvasValues);
    canvasAttributes.setAttribute('style', `grid-template-columns:${autoStr}`)
    updateCanvas()
    function updateCanvas(){
        let allDivs = document.querySelectorAll('#gridSquare')
        allDivs.forEach(itm => {
            itm.remove()});
        for (let i = 0; i < valueSquared; i++) {
            let newDiv = document.createElement('div')
            newDiv.setAttribute('id', 'gridSquare');
            canvas.appendChild(newDiv);
        }
    }
}
