const container = document.querySelector(".container");
let gridSize = 16;

drawGrid(gridSize);

const button = document.querySelector("#grid-size-button");

button.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100) {
        alert("Number can't be larger than 100!");
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
            div.setAttribute("style", `width: ${600 / size}px; height: ${600 / size}px;`);
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
