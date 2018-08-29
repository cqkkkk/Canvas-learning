var ctx;
function draw() {
    var canvas = document.getElementById('tutorial1');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(20, 20, 100, 100);
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(170, 150);
    ctx.lineTo(175, 145);
    ctx.lineTo(180, 150);
    ctx.lineTo(185, 150);
    ctx.lineTo(190, 100);
    ctx.lineTo(200, 175);
    ctx.lineTo(205, 150);
    ctx.lineTo(218, 150);
    ctx.lineTo(225, 140);
    ctx.lineTo(235, 150);
    ctx.lineTo(250, 150);
    ctx.stroke();
}
draw();