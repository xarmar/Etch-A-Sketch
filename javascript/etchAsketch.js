document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#gridContainer");
    grid();

function grid() {
    for (i = 0; i < 16; i++) {
        let verticalDiv = createVerticalDiv();
        verticalDiv.classList.add("verticalDiv")
        for (z = 0; z < 16; z++) {
            let horizontalDiv = createHorizontalDiv()
            verticalDiv.appendChild(horizontalDiv);
        } 
        container.appendChild(verticalDiv);
    }
}

function createVerticalDiv() {
    let verticalDiv = document.createElement('div');
    verticalDiv.classList.add("verticalDiv");
    return verticalDiv
}

function createHorizontalDiv() {
    let horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add("horizontalDiv");
    return horizontalDiv
}

})