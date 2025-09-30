const gridContainer = document.querySelector(".grid-container");
const gridContHeight = gridContainer.offsetHeight;
const gridContWidth = gridContainer.offsetWidth;

function createGrid(squares) {
  const totalSquares = squares * squares;

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
  let squOpa = parseFloat(e.target.style.opacity) || 0;
  console.log(squOpa);

  if (e.target.classList.contains("grid-square")) {
    e.target.style.backgroundColor = "red";
    squOpa += 0.1;
    // restrict opacity from going beyond 1
    if(squOpa >= 1){
        squOpa = 1;
    }
    e.target.style.opacity = squOpa;
  }
});

console.log(createGrid(32));
