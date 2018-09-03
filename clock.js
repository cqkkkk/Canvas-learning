
function drawclockpoint(){
    var canvas = document.getElementById("clockpoint");
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(25,25,20,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(25,25,15,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
};

function drawclock(){
    var canvas = document.getElementById("clock");
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(250,250,230,0,Math.PI*2);
    ctx.closePath();
    ctx.stroke();         
}

function drawall(){
    var canvas = document.getElementById("clockall");
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    //clear
    ctx.clearRect(0,0,500,500);

    //clock
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(250,250,230,0,Math.PI*2);
    ctx.closePath();
    ctx.stroke();

    ctx.save(); //save

    //translate
    ctx.translate(250,250);

    //time
    let time = new Date();

    //hourhand
    ctx.rotate(2 * Math.PI / 12 *time.getHours() + 2 * Math.PI / 720 * time.getMinutes());
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(-15,0);
    ctx.lineTo(-15,-150);
    ctx.lineTo(0,-180);
    ctx.lineTo(15,-150);
    ctx.lineTo(15,0);
    ctx.lineTo(-15,0);
    ctx.closePath();
    ctx.fill();

    //minutehand
    ctx.rotate(2 * Math.PI / 60 * time.getMinutes() + 2 * Math.PI / 3600 * time.getSeconds());
    ctx.fillStyle = "#3f4347";
    ctx.beginPath();
    ctx.moveTo(-10,0);
    ctx.lineTo(-10,-150);
    ctx.lineTo(0,-200);
    ctx.lineTo(10,-150);
    ctx.lineTo(10,0);
    ctx.lineTo(-10,0);
    ctx.closePath();
    ctx.fill();
    
    //secondhand
    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds());
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.fillRect(-3,-205,6,205);
    ctx.closePath();

    //clockpoint
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(0,0,20,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0,0,15,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();

    //restore
    ctx.restore();

    requestAnimationFrame(drawall);
 
}

function init() {
    window.onload = function () {
        drawall();
        // drawclock();
        // drawclockpoint();
    }
}

init();