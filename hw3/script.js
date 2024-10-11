// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#0095DD";
let x2 = 100, y2 = 100, dx2 = 5, dy2 = 5, r2 = 30, color2 = "#0095DD";

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
	x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞牆壁(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if (x > canvas.width || x<0)		dx= -dx,	color = "red";
	if (y > canvas.height || y<0)		dy = -dy;
	
	if (x2 + r2 > canvas.width || x2 - r2< 0)		dx2= -dx2,	color2 = "blue";
	if (y2 + r2 > canvas.height || y2 - r2 < 0)			dy2 = -dy2;
    drawBall(x, y, r, color);
    drawBall(x2, y2, r2, color2);
	
	//交換兩球速度
	if ((x-x2)*(x-x2) + (y-y2)*(y-y2) <= (r+r2)*(r+r2))	[dx, dy, dx2, dy2]=[dx2, dy2, dx, dy];
	
    requestAnimationFrame(draw);
}
draw();