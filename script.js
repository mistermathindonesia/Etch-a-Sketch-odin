function createGrid(gridSize) {
  const container = document.querySelector(".container");
  // reset container first
  container.innerHTML = "";
  const containerSize = 960;
  const squareSize = containerSize / gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement("div");
    square.style.background = "black";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.background = "red";
    });

    square.addEventListener("mouseout", () => {
      square.style.background = "black";
    });
  }
}
// function decralation can call before definition
createGrid(16);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const gridSize = Number(prompt("ENTER GRID SIZE"));
  if (gridSize > 0 && gridSize < 101) {
    createGrid(gridSize);
  } else {
    alert("INVALID VALUE, hanya masukkan angka 1-100 saja");
  }
});
