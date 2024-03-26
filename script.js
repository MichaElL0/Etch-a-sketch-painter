const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
    for (let x = 1; x <= 16; x++) {
        const div = document.createElement("div");
        div.className = `cell num-${i}-${x}`;
        container.appendChild(div);
    }
}

const divs = document.querySelectorAll(".container div");

divs.forEach(item => {
    item.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "blue";
    })
});

// for(let i = 1; i <= 16; i++) {
//     console.log(i);
//     for(let x = 1; x <= 16; x++) {
//         console.log("\t" + x);
//     }
// }