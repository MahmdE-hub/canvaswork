const myCanvas = document.getElementById("myDrawing");
const myContext = myCanvas.getContext("2d");
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    myContext.save();
    myContext.fillStyle = "rgb(255, " + (200-30*i) + ", " + (100+30*j) + ")";
    myContext.translate(20 + i * 70, 20 + j * 70);
    myContext.fillRect(0, 0, 30,30);
    myContext.restore();
 }
}

