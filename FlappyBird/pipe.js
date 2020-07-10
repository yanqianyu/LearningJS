class Pipe {
    // ES6 构造函数
    constructor(up_pipe, up_mod, down_pipe, down_mod) {
        this.up_pipe = up_pipe;
        this.up_mod = up_mod;
        this.down_pipe = down_pipe;
        this.down_mod = down_mod;

        // 随机生成上部分管体的长度
        this.up_height = Math.floor(Math.random() * 60);
        // up + down = 180
        this.down_height = (60 - this.up_height) * 3;
        this.posX = 300;
        this.up_posY = this.up_height * 3 + this.up_pipe.height;
        this.down_posY = 362 - this.down_height;
        // 是否被超越
        this.hadSkipped = false;
        // 保证只被超过一次
        this.hadSkippedChanged = false;
    }

    drawPipe() {
        ctx.drawImage(this.up_pipe, this.posX, this.up_height * 3);
        ctx.drawImage(this.down_pipe, this.posX, 362 - this.down_height);
    }

    drawMod() {

        for(let i = 0; i < this.up_height; i++) {
            ctx.drawImage(this.up_mod, this.posX, i * 3);
        }
        
        for(let i = 0; i < this.down_height; i++) {
            ctx.drawImage(this.down_mod, this.posX, 362 - this.down_height + this.down_pipe.height + i);
        }
    }

    move() {
        this.posX -= 6;
        this.drawMod();
        this.drawPipe();
    }
}