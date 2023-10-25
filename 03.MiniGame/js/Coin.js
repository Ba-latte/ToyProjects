// 코인 클래스

import App from "./App.js";
import BoundingBox from "./BoundingBox.js";

export default class Coin{
    constructor(x, y, vx){
        // 이미지 불러오기
        this.img = document.querySelector("#coin-img");

        // 이미지
        this.width = 50;
        this.height = 50;
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;

        this.vx = vx;

        // 프레임 넘버
        this.frameX = 0;

        // 애니메이션 속도 조절
        this.counter = 0;

        // 바운딩박스 생성
        this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);
    }
    update(){
        // 1씩 증가되는 애니메이션 속도 조절 변수값이 6의 배수가 될 때
        if(++this.counter % 6 === 0){
            // 프레임 넘버 증가시켜서 애니메이션 만들기
            this.frameX += 1;
            // 한계값 도달시 0으로 초기화
            if(this.frameX === 5) this.frameX = 0;
        }

        // 코인 이동하기
        this.x += this.vx;

        // 바운딩박스 업데이트
        this.boundingBox.x = this.x;
    }
    draw(){
        // 이미지 그리기
        App.ctx.drawImage(
            this.img,
            this.img.width / 5 * this.frameX, 0, // sx, sy
            this.img.width / 5, this.img.height, // sw, sh
            this.x, this.y, // x, y
            this.width, this.height // w, h
        );

        // 바운딩박스 그리기
        // this.boundingBox.draw();
    }
}