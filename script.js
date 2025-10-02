const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset");
const resizeBtn = document.querySelector(".resize");
const resizeDiaglog = document.querySelector(".resize-dialog");
const sizeInput = document.querySelector(".size-box");
const doneBtn = document.querySelector(".done");
const error = document.querySelector(".error-message");

// getting the div's height and width set in css
const gridContHeight = gridContainer.offsetHeight;
const gridContWidth = gridContainer.offsetWidth;

function createGrid(squares) {
  const totalSquares = squares * squares;

  // making sure the div element is empty before dynamically creating something
  gridContainer.innerHTML = " ";

  for (let i = 0; i < totalSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.dataset.index = i;
    gridSquare.style.height = gridContHeight / squares + "px";
    gridSquare.style.width = gridContWidth / squares + "px";
    gridContainer.appendChild(gridSquare);
  }
  console.log("Grid created!");
}

gridContainer.addEventListener("mouseover", (e) => {
  // if there is a value make it a float if not consider it 0
  let squOpa = parseFloat(e.target.style.opacity) || 0;
  console.log(squOpa);

  if (e.target.classList.contains("grid-square")) {
    e.target.style.backgroundColor = "red";
    squOpa += 0.1;
    // restrict opacity from going beyond 1
    if (squOpa >= 1) {
      squOpa = 1;
    }
    // store it back into real opacity
    e.target.style.opacity = squOpa;
  }
});

resetBtn.addEventListener("click", () => {
  const getAllSquare = document.querySelectorAll(".grid-square");

  getAllSquare.forEach((squares) => {
    squares.style.backgroundColor = "";
    squares.style.opacity = "";
  });
});

function formValidation(sizeInput) {
  // convert the default string value to number
  let inputValue = Number(sizeInput.value);

  //input shouldn't be text or NaN
  if (isNaN(inputValue)) {
    // enable error message element
    error.style.display = "block";

    // set grid to default
    createGrid(16);
    // validation not complete
    return false;
  }

  error.style.display = "none";

  //input shouldn't be 0 or neg number
  if (inputValue <= 0) {
    inputValue = 1;
  }

  //input should be restricted to 100 max
  if (inputValue > 100) {
    inputValue = 100;
  }

  sizeInput.value = inputValue;
  console.log(inputValue);
  createGrid(inputValue);
  return true;
}

resizeBtn.addEventListener("click", () => {
  resizeDiaglog.showModal();
});

doneBtn.addEventListener("click", () => {
  const isValid = formValidation(sizeInput);

  if (isValid) {
    // close modal only if form is successfully validated
    resizeDiaglog.close();
  }
});

console.log(createGrid(16));
