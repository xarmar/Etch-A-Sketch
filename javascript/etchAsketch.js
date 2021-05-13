document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#gridContainer");
    grid(16);

const introductionId = document.querySelector("#introduction");

// Listen for Clicks on "Reset Grid" Button
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetPrompt);

function resetPrompt() {
    resetButton.style.cssText = "visibility: hidden";
    // Creates Textfield for User Input and a Submit Button
    let promptUser = document.createElement("input");
    promptUser.placeholder = " Number '10' =  10x10 grid"
    promptUser.classList.add("input")
    introductionId.appendChild(promptUser);
    let submitButton = document.createElement("button");
    submitButton.innerText = "Create"
    submitButton.classList.add("submitButton");
    introductionId.appendChild(submitButton);
    submitButton.addEventListener("click", fullReset);

    function fullReset(){
        let userInput = promptUser.value;
        if (isNaN(userInput) || userInput > 100){
            alert("Only numbers equal to or smaller than 100 are valid.")
        }
        else {
            resetButton.style.cssText = "visibility: visible";
            // Deletes previous grid
            deleteGrid();
            // Creates new grid with userInput
            grid(userInput);
            listenForSquareHover();
        }
    }    

    function deleteGrid() {
        promptUser.remove();
        submitButton.remove();
        let allVerticalDivs = document.querySelectorAll(".verticalDiv");
        allVerticalDivs.forEach(verticalDiv => {
            verticalDiv.remove();
        });
        let allHorizontalDivs = document.querySelectorAll(".horizontalDiv");
        allHorizontalDivs.forEach(horizontalDiv => {
            horizontalDiv.remove();
        });    
    }
}


// Creates a standard "number by number" grid of squares.
function grid(number) {
    for (i = 0; i < number; i++) {
        let verticalDiv = createVerticalDiv();
        verticalDiv.classList.add("verticalDiv")
        for (z = 0; z < number; z++) {
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

// Listens for hover on each div square. 
listenForSquareHover();
function listenForSquareHover() {
    let squares = document.querySelectorAll(".horizontalDiv");
    squares.forEach(square => {
        square.addEventListener("mouseenter", colorise)
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