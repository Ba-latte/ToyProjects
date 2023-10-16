// 플레이어
import App from "./App.js";
import BoundingBox from "./BoundingBox.js";

export default class Player{
    constructor(){
        // 이미지 불러오기
        this.img = document.querySelector("#bird-img");

        this.x = App.width * 0.1;
        this.y = App.height * 0.5;

        this.width = 100;
        this.height = this.width * (96 / 140);

        // 충돌 감지용 박스 만들기
        this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);

        // 프레임넘버
        this.frameX = 0;
        // 프레임넘버 넘어가는 속도 조절
        this.counter = 0;

        // 상승 속도
        this.vy = -10;
        // 중력
        this.gravity = 0.2;

        // 클릭 이벤트 연결
        App.canvas.addEventListener("click", ()=>{
            // 클릭시 위쪽으로 이동하게 하기
            this.vy += -5;
        })

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

        // 클릭시 날아오르기
        this.vy += this.gravity;
        this.y += this.vy;

        // 바운딩 박스의 y좌표값 업데이트하기
        this.boundingBox.y = this.y;

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

        // 충돌 감지용 박스 그리기
        this.boundingBox.draw();
    }
}