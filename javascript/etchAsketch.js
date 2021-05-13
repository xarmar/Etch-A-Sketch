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

const squares = document.querySelectorAll(".horizontalDiv");
squares.forEach(square => {
    square.addEventListener("mouseenter", colorise)
});
    
function colorise(e) {
    let targetSquare = e.target;
    let colorPick = Math.floor((Math.random() * 10));
    switch (colorPick) {
        case 1:
            targetSquare.style.cssText = "background: orange;"
            break;
        case 2:
            targetSquare.style.cssText = "background: yellow;"
            break;
        case 3:
            targetSquare.style.cssText = "background: black;"
            break;
        case 4:
            targetSquare.style.cssText = "background: pink;"
            break;
        case 5:
            targetSquare.style.cssText = "background: cyan;"
            break;
        case 6:
            targetSquare.style.cssText = "background: magenta;"
            break;
        case 7:
            targetSquare.style.cssText = "background: brown;"
            break;
        case 8:
            targetSquare.style.cssText = "background: black;"
            break;
        case 9:
            targetSquare.style.cssText = "background: grey;"
            break;
        case 10:
            targetSquare.style.cssText = "background: red;"
            break;
        default:
            break;
    }
}

})