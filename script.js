const coloredDiv = document.querySelector("div"),
  para = document.querySelector("p"),
  hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"],
  colorParts = [];

for (let i = 0; i < 6; i++) {
  colorParts.push(hexArr[Math.floor(Math.random() * hexArr.length)]);
}

const finalColor = `#${colorParts.join("")}`;

para.textContent = finalColor;
coloredDiv.style.backgroundColor = finalColor;
para.style.border = `1px solid ${finalColor}`;
