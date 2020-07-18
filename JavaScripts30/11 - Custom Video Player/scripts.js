// 变量绑定
let video = document.querySelector('.viewer');
let progress = document.querySelector('.progress');
let toggle = document.querySelector('.toggle');
let player__slider = document.querySelectorAll('.player__slider');
let skip = document.querySelectorAll('[data-skip]');
let filled = document.querySelector('.progress__filled');
let progressBar = document.querySelector('.progress');

function videoPlay(e) {
    const method = video.paused ? 'play' : 'pause';
    // 使用中括号能够动态的传递变量进去，而使用点运算符不能传参
    video[method]();
}

// 播放暂停符号切换
function handleToggle(){
    let icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

// 播放速度控制 + 音量大小
// player__slider
function handlePlayerSlider(e){
    video[e.target.name] = e.target.value;
}

// 快进快退
// button data-skip
function handleSkip(e){
    let skiptime = parseFloat(this.dataset.skip);
    video.currentTime += skiptime;
}

function filledUpdate() {
    let portion = parseFloat(video.currentTime / video.duration) * 100;
    filled.style.flexBasis = `${portion}%`;
}

// 拖拽进度条
function handlefilled(e){    
    let pice = (e.offsetX / progressBar.offsetWidth) * video.duration;
    // let pice = (e.offsetX / progressBar.clientWidth) * video.duration;
    video.currentTime = pice;
}

video.addEventListener('click', videoPlay);
video.addEventListener('play', handleToggle);
video.addEventListener('pause', handleToggle);
video.addEventListener('timeupdate',filledUpdate);

toggle.addEventListener('click', videoPlay);
toggle.addEventListener('click', handleToggle);

// 只绑定mousemove的话，鼠标划过就会触发事件
// 设置标志位判断鼠标是否按下，只有按下了才触发事件
let mouseflag = false;
player__slider.forEach(item => item.addEventListener('click',handlePlayerSlider));
player__slider.forEach(item => item.addEventListener('mousedown',() => mouseflag = true));
player__slider.forEach(item => item.addEventListener('mouseup',() => mouseflag = false));
player__slider.forEach(item => item.addEventListener('mousemove',(e) => {
    if (mouseflag) {
        handlePlayerSlider(e);
    }
}));

skip.forEach(item => item.addEventListener('click',handleSkip));

let filledflag = false;
progressBar.addEventListener('click',handlefilled);
progressBar.addEventListener('mousemove',(e) => filledflag && handlefilled(e));
progressBar.addEventListener('mousedown',() => filledflag = true);
progressBar.addEventListener('mouseup',() => filledflag = false);