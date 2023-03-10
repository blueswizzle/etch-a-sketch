const grid = document.getElementById("grid-container");
let mouseDown = false;
let gridSlider = document.getElementById("grid-size");
let size = 8;
document.body.addEventListener("mousedown", () => {
    mouseDown = true;
    console.log(mouseDown);
});
document.body.addEventListener("mouseup", () =>{
    mouseDown = false;
    console.log(mouseDown);
})
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let j = 0; j < 16; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      
      row.appendChild(box);
    }
    
    grid.appendChild(row);
}

gridSlider.oninput = () =>{
    size = gridSlider.value;
    document.getElementById("size-label").innerHTML = `Grid Size: ${size} x ${size}`;
}
  
  