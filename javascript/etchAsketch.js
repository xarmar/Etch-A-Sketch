document.addEventListener("DOMContentLoaded", function () {
    const gridInfo = document.querySelector("#gridInfo");
    const gridContainer = document.querySelector("#gridContainer");
    setGrid(10);
    grid(10);
    gridInfo.innerText = (`10 x 10 grid`)

// Listen for Clicks on "Reset Grid" Button
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetPrompt);

const introductionId = document.querySelector("#introduction");

function resetPrompt() {
    resetButton.style.cssText = "visibility: hidden";
    // Creates Textfield for User Input and a Submit Button
    let promptUser = document.createElement("input");
    promptUser.placeholder = " Number '10' =  10x10 grid"
    promptUser.classList.add("input");
    introductionId.appendChild(promptUser);
    let submitButton = document.createElement("button");
    submitButton.innerText = "Create"
    submitButton.classList.add("submitButton");
    introductionId.appendChild(submitButton);
    promptUser.addEventListener("keydown", enterKeyCheck);
    submitButton.addEventListener("click", fullReset);

    function enterKeyCheck(e) {
        if (e.code === "Enter") {
            fullReset()
        }
    }

    function fullReset(){
        let userInput = promptUser.value;
        if (isNaN(userInput) || userInput > 100 || userInput === "" || userInput < 1){
            alert("Only numbers equal to or smaller than 100 are valid.")
        }
        else {
            resetButton.style.cssText = "visibility: visible";
            // Deletes previous grid
            deleteGrid();
            // Creates new grid with userInput
            setGrid(userInput);
            grid(userInput);
            listenForSquareHover();
        }
    }    

    function deleteGrid() {
        promptUser.remove();
        submitButton.remove();
        let elements = document.querySelectorAll(".element");
        elements.forEach(element => {
            element.remove();
        });
    }
}

function setGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridInfo.innerText = `${size} x ${size} grid`
    }

// Creates a standard "number by number" grid of squares.
function grid(number) {
    let numberSquare = number * number;
    for (i = 0; i < numberSquare; i++) {
        let element = createElement();
        element.classList.add("element");
        gridContainer.appendChild(element);
    }
}

function createElement() {
    let newElement = document.createElement('div');
    return newElement
}

// Listens for hover on each div square. 
listenForSquareHover();
function listenForSquareHover() {
    let squares = document.querySelectorAll(".element");
    squares.forEach(square => {
        square.addEventListener("mouseenter", colorise);
    });
}

// Adds random colour to each square.
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