const gridContainer = document.querySelector('.grid-container')
const gridContHeight = gridContainer.offsetHeight;
const gridContWidth = gridContainer.offsetWidth;

function createGrid(squares) {
    
    const totalSquares = squares * squares;

    gridContainer.innerHTML = ' ';

    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-square')
        gridSquare.dataset.index = i
        gridSquare.style.height = (gridContHeight / squares) + 'px';
        gridSquare.style.width = (gridContWidth / squares) + 'px';
        gridContainer.appendChild(gridSquare);
    }
    console.log('Grid created!')
}

console.log (createGrid(32));