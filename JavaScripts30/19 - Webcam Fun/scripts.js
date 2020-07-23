const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            audio: false,
            video: {
                width: 300,
                height: 200
            }
        }, function(stream) {
            //若成功
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            }
        }, function(err) {
            console.log('Error occured:' + err.name);
        });
    } else {
        console.log('this navigator doesn\'t support webcam!');
    }
}

function printToCanvas() {
     let width = video.videoWidth;
     let height = video.videoHeight;
     canvas.height = height;
     canvas.width = width; 
     console.log(width,height);
     return setInterval(() => {
         ctx.drawImage(video,0,0,width,height);
         // get the image data
         let imagedata = ctx.getImageData(0,0,width,height);
         imagedata = greenScreen(imagedata);
         // put the image data back
         ctx.putImageData(imagedata,0,0);
    },16);
}

function takePhoto(){
    // 播放音效
    snap.currentTime = 0;
    snap.play();
    
    // 获取图像数据
    let data = canvas.toDataURL('image/jpeg');
    // console.log(data);
    let link = document.createElement('a');
    link.href = data;
    link.setAttribute('downlond','handsome');
    link.innerHTML = `<img src=${data} alt=handsome>`
    strip.insertBefore(link,strip.firstChild);
}

// 红色特效滤镜
function redEffect(imagedata){
    for(let i = 0;i<imagedata.data.length;i+=4){
        imagedata.data[i + 0] += 200; // red
        imagedata.data[i + 1] -= 50; // green
        imagedata.data[i + 2] *= 0.5; // blue
    }
    return imagedata;
}

// RGB分离
function rgbsplit(imagedata){
    for(let i = 0;i<imagedata.data.length;i+=4){
        imagedata.data[i - 100] = imagedata.data[i + 0]; // red
        imagedata.data[i + 150] = imagedata.data[i + 1]; // green
        imagedata.data[i - 150] = imagedata.data[i + 2]; // blue
    }
    return imagedata;
}

// 绿屏（部分消失）
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', printToCanvas);