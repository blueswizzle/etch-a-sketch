const grid = document.getElementById("grid-container");
let mouseDown = false;
let gridSlider = document.getElementById("grid-size");
let gridSize = 8;
const resetButton = document.getElementById("reset-button");
const colorWheel = document.getElementById("color-wheel");
let color = colorWheel.value;
const toggleButton = document.getElementById("border-toggle");

resetButton.addEventListener("click", resetGrid);
document.body.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.body.addEventListener("mouseup", () =>{
    mouseDown = false;
})

toggleButton.addEventListener("click", () =>{
    let boxes = grid.children;
    for(let i =0; i < gridSize * gridSize; i++){
        boxes[i].classList.toggle('hidden');
    }
})


colorWheel.addEventListener("change", () =>{
    color = colorWheel.value;
})

gridSlider.addEventListener("input", () =>{
    gridSize = gridSlider.value;
    document.getElementById("size-label").innerHTML = `Grid Size: ${gridSize} x ${gridSize}`;
    console.log(gridSize);
    removeBoxes();
    createGrid(gridSize);
})

createGrid(gridSize);

function createGrid(size){
    for(let i=0; i < size * size; i++){
        const box = document.createElement('div');
        box.classList.add("box");
        grid.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
        box.addEventListener("click", (e) =>{
            e.target.style.backgroundColor = color;
        })
        box.addEventListener("mouseover", (e) =>{
            if(mouseDown){
                e.target.style.backgroundColor = color;
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

