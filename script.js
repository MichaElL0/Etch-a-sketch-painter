const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
    for (let x = 1; x <= 16; x++) {
        const div = document.createElement("div");
        div.className = `grid-block num-${i}-${x}`;
        container.appendChild(div);
    }
}

// for(let i = 1; i <= 16; i++) {
//     console.log(i);
//     for(let x = 1; x <= 16; x++) {
//         console.log("\t" + x);
//     }
// }