const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("#grid-size-button");
const resetButton = document.querySelector("#reset-button");
let gridSize = 16;

drawGrid(gridSize);

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

gridSizeButton.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100 || gridSize < 2) {
        alert("Number must be between 2 and 100!");
        gridSize = 16;
    }
    
    container.textContent = "";
    
    drawGrid(gridSize);
});

resetButton.addEventListener("click", e => {
    const divs = document.querySelectorAll(".container div");
    
    divs.forEach(item => {
        item.style.backgroundColor = "#FCFCFC";
    })
});

const rainbowButton = document.querySelector("#rainbow-button");

document.body.addEventListener("mousemove", e => {
    rainbowButton.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 250)`;
});

