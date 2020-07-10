var cvs = document.getElementById('canvas'); // canvas节点
var ctx = cvs.getContext('2d'); // 画布上下文
var v = 0; // 草坪滚动的速度
var score = 0; // 当前得分

//禁止页面滚动
document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);

// 创建图片集合
var imgs = {
 bg: new Image(),
 grass: new Image(),
 title: new Image(),
 bird0: new Image(),
 bird1: new Image(),
 up_bird0: new Image(),
 up_bird1: new Image(),
 down_bird0: new Image(),
 down_bird1: new Image(),
 startBtn: new Image(),
 up_pipe: new Image(),
 up_mod: new Image(),
 down_pipe: new Image(),
 down_mod: new Image(),
 score0: new Image(),
 score1: new Image(),
 score2: new Image(),
 score3: new Image(),
 score4: new Image(),
 score5: new Image(),
 score6: new Image(),
 score7: new Image(),
 score8: new Image(),
 score9: new Image(),
 // 加载图片
 loadImage: function(fn) {
     this.bg.src = './img/bg.jpg';
     this.grass.src = './img/banner.jpg';
     this.title.src = './img/head.jpg';
     this.bird0.src = './img/bird0.png';
     this.bird1.src = './img/bird1.png';
     this.up_bird0.src = './img/up_bird0.png';
     this.up_bird1.src = './img/up_bird1.png';
     this.down_bird0.src = './img/down_bird0.png';
     this.down_bird1.src = './img/down_bird1.png';
     this.startBtn.src = './img/start.jpg';
     this.up_pipe.src = './img/up_pipe.png';
     this.up_mod.src = './img/up_mod.png';
     this.down_pipe.src = './img/down_pipe.png';
     this.down_mod.src = './img/down_mod.png';
     this.score0.src = './img/0.jpg';
     this.score1.src = './img/1.jpg';
     this.score2.src = './img/2.jpg';
     this.score3.src = './img/3.jpg';
     this.score4.src = './img/4.jpg';
     this.score5.src = './img/5.jpg';
     this.score6.src = './img/6.jpg';
     this.score7.src = './img/7.jpg';
     this.score8.src = './img/8.jpg';
     this.score9.src = './img/9.jpg';

     var that = this;

     //添加定时器，判断图片是否加载完成
    var timer = setInterval(function() {
        if (that.bg.complete && that.grass.complete
          && that.title.complete && that.startBtn.complete
          && that.bird0.complete && that.bird1.complete
          && that.up_bird0.complete && that.up_bird1.complete
          && that.down_bird0.complete && that.down_bird1.complete
          && that.up_pipe.complete && that.up_mod.complete
          && that.down_mod.complete && that.down_pipe.complete
          && that.score0.complete && that.score1.complete
          && that.score2.complete && that.score3.complete
          && that.score4.complete && that.score5.complete
          && that.score6.complete && that.score7.complete
          && that.score8.complete && that.score9.complete) {
          //删除定时器
          clearInterval(timer);
          //图片全部加载完成后，运行此函数
          fn();
        }
      }, 50)
    }
};

var scoreImg = [imgs.score0, imgs.score1, imgs.score2, 
            imgs.score3, imgs.score4, imgs.score5,
            imgs.score6, imgs.score7, imgs.score8, imgs.score9]


// 画背景
function drawBackground() {
    ctx.drawImage(imgs.bg, 0, 0); 
}

// 草坪 需要重复调用
function drawGrass() {
    // 这几个数值怎么来的？
    ctx.drawImage(imgs.grass, 3*v--, 423);
    ctx.drawImage(imgs.grass, 337 + 3*v--, 423);
    if (3 * v < -343) {
        v = 0;
    }
}
// 清空
function clear() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

// 画标题
function drawTitle() {
    ctx.drawImage(imgs.title, 53, 97);
    ctx.drawImage(imgs.bird0, 250, 137);
}

//绘制开始按钮
function drawStartBtn() {
    ctx.drawImage(imgs.startBtn,130,300);
}

// 画分
function drawScore() {
    for(let i=0; i < score.toString().length; i++) {
        ctx.drawImage(scoreImg[parseInt(score.toString().substr(i, 1))], 147 + i * 23, 40);
    }
}

// 创建水管
var pipes = [];
var index = 0;
function createPipes() {
    let pipe = new Pipe(imgs.up_pipe, imgs.up_mod, imgs.down_pipe, imgs.down_mod);
    if (pipes.length < 3) {
        pipes.push(pipe);
    }
    else {
        pipes[index] = pipe;
        index++;
        if (index >= 3) {
            index = 0;
        }
    }
}

var bird = {
    bird: [imgs.bird0, imgs.bird1],
    up_bird: [imgs.up_bird0, imgs.up_bird1],
    down_bird: [imgs.down_bird0, imgs.down_bird1],
    posX: 100,
    posY: 200,
    speed: 0, // 飞翔速度
    index: 0, // 切换图片
    alive: true, // 存活状态
    draw: function(bird) {
        ctx.drawImage(bird, this.posX, this.posY);
    },
    // 飞翔中
    fly: function() {
        this.posY += this.speed;
        this.speed++; // 加速度
        // 坠地
        if (this.posY >= 395) {
            this.speed = 0;
            this.draw(this.bird[this.index]);
            this.dead();
        }
        // 碰到顶就反弹
        if (this.posY <= 0) {
            this.speed = 6;
        }
        // 速度为正 表示向下飞
        if (this.speed > 0) {
            this.draw(this.down_bird[this.index]);
        }
        else if (this.speed == 0) {
            this.draw(this.bird[this.index]);
        }
        else {
            this.draw(this.up_bird[this.index]);
        }
    },
    // 挥动翅膀 切换图片
    wingWave: function() {
        this.index++;
        if(this.index > 1) {
            this.index = 0;
        }
    },
    dead: function() {
        this.alive = false;
    }
};

// 判断是否超过水管
function isSkipped(pipe) {
    if(bird.posX > pipe.posX + pipe.down_pipe.width) {
        pipe.hadSkipped = true;
        if (!pipe.hadSkippedChanged && pipe.hadSkipped) {
            score++;
            pipe.hadSkippedChanged = true;
        }
    }
}

// 是否撞到了
function isHit(pipe) {
    if(bird.posX + bird.bird[0].width > pipe.posX && bird.posX < pipe.posX + pipe.down_pipe.width) {
        if ( bird.posY < pipe.up_posY || bird.posY + 30 > pipe.down_posY) {
            bird.dead();
        }
    }
}

// 开始界面
var startTimer; // 开始界面的定时器
var startTime = 0;
function startLayer() {
    startTimer = setInterval(function() {
        clear();
        drawBackground();
        drawGrass();
        drawTitle();
        drawStartBtn();
        startTime++;
    }, 24);
}

var gameTimer; // 游戏界面的定时器
var gameTime = 0;
// 游戏界面
function gameLayer() {
    gameTimer = setInterval(function() {
        clear();
        drawBackground();
        drawGrass();
        if (gameTime % 5 == 0) {
            if (gameTime == 30) {
                createPipes();
                gameTime = 0;
            }
            bird.wingWave();
        }
        gameTime++;
        for(let i = 0; i < pipes.length; i++) {
            pipes[i].move();
            isHit(pipes[i]);
            isSkipped(pipes[i]);
        }

        drawScore();
        bird.fly();

        if(!bird.alive) {
            gameOver();
            reset();
        }
    }, 24);
}

//键盘点击事件
function kd(e) {
    if (e.keyCode === 32) {
        bird.speed = -10;
    }
}

// 鼠标点击事件
function cs(e) {
    bird.speed = -10;
}

//触屏事件
function ts() {
    bird.speed = -10;
}

function gameOver() {
    clearInterval(gameTimer);
    window.removeEventListener('keydown', kd, false);
    window.removeEventListener('touchstart', ts, false);
    window.removeEventListener('click', cs, false);
    //绘制GAME OVER
    ctx.font = "50px blod";
    ctx.fontWeight = '1000'
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER", 20, 200);
    drawStartBtn();
}

function reset() {
    bird.posY = 200;
    bird.speed = 0;
    bird.alive = true;
    pipes = [];
    score = 0;
    cvs.addEventListener('click', startBtn_click , false);
}

// start 点击时间
function startBtn_click(e) {
    //判断点击位置
    if(e.clientX > cvs.offsetLeft + cvs.width/2 - imgs.startBtn.width/2
        && e.clientX < cvs.offsetLeft + cvs.width/2 + imgs.startBtn.width/2
        && e.clientY < cvs.offsetTop + 300 + imgs.startBtn.height
        && e.clientY > cvs.offsetTop + 300){
        clear();
        //清除开始界面定时器
        clearInterval(startTimer);
        gameLayer();
        //添加响应事件
        window.addEventListener('keydown', kd, false)
        window.addEventListener('touchstart',ts,false)
        window.addEventListener('click', cs, false);
        //删除start按钮响应事件
        cvs.removeEventListener('click', startBtn_click, false);
      }
}

// 初始化
function init() {
    console.log('init...');
    imgs.loadImage(startLayer);
}

cvs.addEventListener('click', startBtn_click , false);
//开始了
init(); 
