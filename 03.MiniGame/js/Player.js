// 플레이어
import App from "./App.js";

export default class Player{
    constructor(){
        // 이미지 불러오기
        this.img = document.querySelector("#bird-img");

        this.x = App.width * 0.1;
        this.y = App.height * 0.5;

        this.width = 100;
        this.height = this.width * (96 / 140);

        // 프레임넘버
        this.frameX = 0;
        // 프레임넘버 넘어가는 속도 조절
        this.counter = 0;

    }
    update(){
        // 프레임넘버 넘어가는 속도 조절하기
        this.counter += 1;
        if(this.counter % 2 === 0) {
            // 프레임 넘버 넘기기
            this.frameX += 1;
            
            // 프레임 넘버 반복시키기
            if(this.frameX === 15) this.frameX = 0;
        }

    }
    draw(){
        // 이미지 그리기
        App.ctx.drawImage(
            this.img,
            this.img.width / 15 * this.frameX, 0,
            this.img.width / 15, this.img.height,
            this.x, this.y,
            this.width, this.height
        );
    }
}