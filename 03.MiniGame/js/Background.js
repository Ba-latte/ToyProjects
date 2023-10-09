// 배경화면
import App from "./App.js";

export default class Background {
    constructor(config){
        // 이미지 불러오기
        // this.img = document.querySelector("#bg1-img");
        this.img = config.img;

        // 이미지 가로, 세로값
        this.height = App.height;
        this.width = App.height * (this.img.width / this.img.height);

        // 이미지 위치
        this.leftPos = { x : 0, y : 0 };
        this.rightPos = { x : this.width, y : 0 };

        // 이동 속도
        this.speed = config.speed;
    }
    update(){
        // 왼쪽 이미지가 화면 밖으로 나가는지 체크
        if(this.leftPos.x + this.width < 0){
            // 오른쪽 이미지의 오른쪽 끝에 붙이기
            this.leftPos.x = this.rightPos.x + this.width;
        }
        // 오른쪽 이미지가 화면 밖으로 나가는지 체크
        if(this.rightPos.x + this.width < 0){
            // 왼쪽 이미지의 오른쪽 끝에 붙이기
            this.rightPos.x = this.leftPos.x + this.width;
        }

        // 왼쪽으로 이동시키기
        this.leftPos.x += this.speed;
        this.rightPos.x += this.speed;
    }
    draw(){
        // 왼쪽 이미지 그리기
        App.ctx.drawImage(
            this.img,
            this.leftPos.x, this.leftPos.y, 
            this.width, this.height
        );

        // 오른쪽 이미지 그리기
        App.ctx.drawImage(
            this.img,
            this.rightPos.x, this.rightPos.y,
            this.width, this.height
        );
    }
}