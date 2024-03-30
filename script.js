const container = document.querySelector(".container");
const button = document.querySelector("#grid-size-button");
let gridSize = 16;

for (let i = 1; i <= 16; i++) {
    for (let x = 1; x <= 16; x++) {
        const div = document.createElement("div");
        div.className = `cell num-${i}-${x}`;
        container.appendChild(div);
    }
}

button.addEventListener("click", e => {
    gridSize = prompt("Input a number of squares per side: ", 16);
    if(gridSize > 100) {
        alert("Number can't be larger than 100!");
        gridSize = 16;
    }

    container.textContent = "";

    for (let i = 1; i <= gridSize; i++) {
        for (let x = 1; x <= gridSize; x++) {
            const div = document.createElement("div");
            div.className = `cell num-${i}-${x}`;
            container.appendChild(div);
        }
    }
});



const divs = document.querySelectorAll(".container div");

divs.forEach(item => {
    item.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "blue";
    })
});
