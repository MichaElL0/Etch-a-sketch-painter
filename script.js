const container = document.querySelector(".container");
const button = document.querySelector("#grid-size-button");
let gridSize = 16;

drawGrid(gridSize);

console.log(container.clientHeight);

button.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100 || gridSize < 2) {
        alert("Number must be between 2 and 100!");
        gridSize = 16;
    }
    
    container.textContent = "";
    
    drawGrid(gridSize);
});

function drawGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let x = 1; x <= size; x++) {
            const div = document.createElement("div");
            div.className = `cell`;
            div.setAttribute("style", `width: ${(container.clientHeight) / size}px; height: ${(container.clientWidth) / size}px;`);
            container.appendChild(div);
        }
    }
    

const divs = document.querySelectorAll(".container div");

divs.forEach(item => {
    let opacity = 100;
    item.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 255)}, 100%, ${opacity-=10}%)`;
    })
});
}
