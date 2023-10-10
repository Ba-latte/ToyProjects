// 장애물 벽

import App from "./App.js";
import { randomNumBetween } from "./util.js"

export default class Wall{
    constructor(config){
        // 이미지 불러오기
        this.img = document.querySelector("#wall-img");

        // 벽 타입 정의하기
        this.type = config.type; // 'BIG', 'SMALL'
        // 장애물 타입에 따라 정의하기
        switch (this.type) {
            case 'SMALL':
                this.sx = this.img.width * (0 / 30);
                this.sizeX = 9 / 30;
                break;
            case 'BIG' : 
                this.sx = this.img.width * (10 / 30);
                this.sizeX = 17 / 30;
                break;
        }

        // 가로, 세로값
        this.width = App.height * this.sizeX;
        this.height = App.height;
        
        // 사이 여백(갭) 너비
        this.gapY = randomNumBetween(App.height * 0.23, App.height * 0.38);

        // x값
        this.x = 0;

        // y값
        this.y1 = -this.height + randomNumBetween(50, App.height - this.gapY - 50);
        this.y2 = this.y1 + this.height + this.gapY;

    }
    update(){

    }
    draw(){
        // 이미지 그리기
        App.ctx.drawImage(
            this.img,
            this.sx, 0, this.img.width * this.sizeX, this.img.height,
            this.x, this.y1,
            this.width, this.height
        );
        App.ctx.drawImage(
            this.img,
            this.sx, 0, this.img.width * this.sizeX, this.img.height,
            this.x, this.y2,
            this.width, this.height
        );
    }
}