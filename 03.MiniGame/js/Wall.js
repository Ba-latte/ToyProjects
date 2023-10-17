// 장애물 벽

import App from "./App.js";
import BoundingBox from "./BoundingBox.js";
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
        this.x = App.width;

        // y값
        this.y1 = -this.height + randomNumBetween(50, App.height - this.gapY - 50);
        this.y2 = this.y1 + this.height + this.gapY;

        // 다음 벽 생성 가능 여부
        this.canGeneratedNext = false;
        // 다음 벽 생성 시점
        this.gapNextX = App.width * randomNumBetween(0.5, 0.7);

        // 충돌 감지위한 boundingBox 만들기
        this.boundingBox1 = new BoundingBox(this.x + 45, this.y1 + 30, this.width - 90, this.height - 65);
        this.boundingBox2 = new BoundingBox(this.x + 45, this.y2 + 45, this.width - 90, this.height - 65);

    }
    // 밖으로 나갔는지 확인
    get isOutside(){
        return this.x + this.width < 0
    }
    // 다음 벽 생성할 수 있는지 확인
    get canGenerateNext(){
        return(
            !this.canGeneratedNext && this.x + this.width < this.gapNextX
        )
    }
    // 충돌 감지 메서드
    isColliding(target){
        return(
            this.boundingBox1.isColliding(target) ||
            this.boundingBox2.isColliding(target)
        )
    }
    update(){
        // 벽 왼쪽으로 이동
        this.x += -4;

        // 충돌 감지용 바운딩박스의 x좌표값 업데이트하기
        this.boundingBox1.x = this.x + 45;
        this.boundingBox2.x = this.x + 45;

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

        // 충돌 감지용 바운딩박스 그리기
        this.boundingBox1.draw();
        this.boundingBox2.draw();
    }
}