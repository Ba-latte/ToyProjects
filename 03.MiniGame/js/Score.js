// 점수 클래스
import App from './App.js';
import Coin from './Coin.js';

export default class Score{
  constructor(){
    // 코인 인스턴스 생성
    this.coin = new Coin(App.width - 50, 50, 0);

    // 획득 코인수
    this.coinCount = 0;

    // 이동거리
    this.distCount = 0;
  }
  update(){
    // 거리 이동하기
    this.distCount += 0.01;

  }
  draw(){
    // 코인 그리기
    this.coin.draw();

    // 텍스트 관련
    App.ctx.font="40px Noto Sans KR";
    App.ctx.fillStyle="#000000";
    App.ctx.textAlign="right";

    // 획득 코인수 그리기
    App.ctx.fillText(this.coinCount, App.width - 90, 65);

    // 이동 거리수 그리기
    App.ctx.textAlign="left";
    App.ctx.fillText(Math.floor(this.distCount) + "m", 20, 65);
  }
}