const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.style.width = "60px";
  square.style.height = "60px";
  square.style.backgroundColor = "black";
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
  // square.addEventListener("mouseout", () => {
  //   square.style.backgroundColor = "black";
  // });
}
