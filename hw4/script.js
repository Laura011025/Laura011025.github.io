// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 0.5, dy = 0.5, i = 0, N = 15;  //20張圖週期變化

// 預載藍色火焰移動圖片
let burning = [];
for(let i = 0; i < N; ++i)
{
	burning[i] = new Image();
	burning[i].src = "img/burning_"+ i +".png";     //"資料夾名稱/圖片名字"
}

// 預載白色火焰反向移動圖片
let rburning = [];
for(let i = 0; i < N; ++i)
{
	rburning[i] = new Image();
	rburning[i].src = "rimg/burning_w" + i + ".png";    //"資料夾名稱/圖片名字"
}

// 貼上圖片
function drawImg() 
{    
	// parseInt(i/2) 讓兩時間格共用一張圖片，以讓動作更換不要過於頻繁
	// 編號 i：0, 1, 2, 3, 4, 5, 6, 7, ...
	// 對應圖：0, 0, 1, 1, 2, 2, 3, 3, ...
    if(dx > 0)   	ctx.drawImage(burning[parseInt(i/1.5)%N], x, y, 200, 200);
    else          	ctx.drawImage(rburning[parseInt(i/1.5)%N], x, y, 200, 200);
}

// 更新畫布
function draw() 
{	
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    x += dx;
    y += dy;
    ++i;

    if(x < 0 || x+200 > canvas.width)     dx = -dx;
    if(y < 0 || y+200 > canvas.height)    dy = -dy;
    
    drawImg();
    requestAnimationFrame(draw);
}
draw();