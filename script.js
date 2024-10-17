const myCanvas = document.getElementById("myDrawing");
const myContext = myCanvas.getContext("2d");


myContext.fillStyle = "blue";
myContext.beginPath();
myContext.arc(200, 110, 30, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "red";
myContext.beginPath();
myContext.arc(200, 180, 45, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(200, 270, 60, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(189, 110, 4, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(200, 110, 4, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "white";
myContext.beginPath();
myContext.arc(190, 105, 5, 4, Math.PI*2);
myContext.fill();
myContext.fillStyle = "white";
myContext.beginPath();
myContext.arc(201, 105, 5, 10, Math.PI*2);
myContext.fill();

//Draw mouth
myContext.fillStyle = "black";
myContext.beginPath();
myContext.rect(183, 118, 20, 3);
myContext.fill();

//Draw rectangle
myContext.fillStyle = "black";
myContext.beginPath();
myContext.rect(160, 80, 85, 7);
myContext.fill();

// Draw rectangle
myContext.fillStyle = "brown";
myContext.beginPath();
myContext.rect(170, 30, 60, 50);
myContext.fill();

//Draw rectangle
myContext.fillStyle = "black";
myContext.beginPath();
myContext.rect(57, 170, 100, 7);
myContext.fill();

//Draw rectangle
myContext.fillStyle = "black";
myContext.beginPath();
myContext.rect(244, 170, 100, 7);
myContext.fill();