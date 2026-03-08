const container = document.querySelector(".container");
const gridSize = 16;
const containerSize = 960;
const squareSize =containerSize/gridSize
for (let i = 0; i < gridSize ** 2; i++) {
  const square = document.createElement("div");
  square.style.background = "black";
  square.style.width = `${squareSize}px`
  square.style.height = `${squareSize}px`

  container.appendChild(square);
}
