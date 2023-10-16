// 충돌 감지 위한 바운딩 박스 클래스
import App from "./App.js";

export default class BoundingBox{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // 색상
        this.color = "rgba(255, 0, 0, 0.3)";
    }
    update(){

    }
    draw(){
        // 박스 스타일 지정하기
        App.ctx.fillStyle = this.color;
        // 박스 그리기
        App.ctx.fillRect(
            this.x, this.y, this.width, this.height
        );
    }
}