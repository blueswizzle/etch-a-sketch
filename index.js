const grid = document.getElementById("grid-container");
let mouseDown = false;
let gridSlider = document.getElementById("grid-size");
let gridSize = 8;
const resetButton = document.getElementById("reset-button");


resetButton.addEventListener("click", resetGrid);
document.body.addEventListener("mousedown", () => {
    mouseDown = true;
    console.log(mouseDown);
});
document.body.addEventListener("mouseup", () =>{
    mouseDown = false;
    console.log(mouseDown);
})

createGrid(gridSize);


gridSlider.oninput = () =>{
    gridSize = gridSlider.value;
    document.getElementById("size-label").innerHTML = `Grid Size: ${gridSize} x ${gridSize}`;
}


function createGrid(size){
    for(let i=0; i < size * size; i++){
        const box = document.createElement('div');
        box.classList.add("box");
        box.addEventListener("mouseover", (e) =>{
            if(mouseDown){
                e.target.style.backgroundColor = 'black';
            }
            
        });
        grid.appendChild(box);
    }
}

function removeBoxes(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function resetGrid(){
    let boxes = grid.children;
    for(let i =0; i < gridSize * gridSize; i++){
        boxes[i].style.backgroundColor = 'white';
    }
}

