var ctx;
function draw() {
    var canvas = document.getElementById('tutorial1');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    //清空画布
    ctx.clearRect(0, 0, 500, 500);
    //画黑色正方形
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(20, 20, 100, 100);
    ctx.closePath();

    //心跳
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

    //太阳
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.save();  //保存当前的状态

    //轨迹
    // 平移原点到太阳圆心处
    ctx.translate(300, 300);
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    // 创建date对象
    let time = new Date();
    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
    ctx.translate(100, 0);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();  //恢复原来保存的状态

    requestAnimationFrame(draw);

}
function init() {
    window.onload = function () {
        draw();
    }
}

init();
