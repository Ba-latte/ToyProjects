// 게임 핸들러 클래스

export default class GameHandler{
  constructor(app){
    // App 전체 받아오기
    this.app = app;

    // 게임 진행 상태
    this._status = "READY"; // READY, PLAYING, FINISHED

    // 초기화 함수 실행
    this.init();
  }
  get status(){
    return this._status;
  }
  set status(value){
    this._status = value;
    // value값에 따라 게임 화면 바꾸기
    switch(value){
      case "READY" : this.showReadyScreen();
        break;
      case "FINISHED" : this.showFinishScreen();
        break;
    }
  }
  init(){
    // 대기 화면 구성요소 가져오기
    this.readyScreen = document.querySelector(".ready-screen");
    this.titleImage = this.readyScreen.querySelector(".title-img");
    this.playButton = this.readyScreen.querySelector(".play-img");

    // 플레이 버튼 클릭시
    this.playButton.addEventListener("click", ()=>{
      // console.log("플레이 버튼 클릭");
      // 준비 화면 숨기는 함수 호출
      this.hideReadyScreen();
    });

    // 종료 화면 구성요소 가져오기
    this.finishScreen = document.querySelector(".finish-screen");
    this.distanceText = this.finishScreen.querySelector(".distance");
    this.coinText = this.finishScreen.querySelector(".coin");
    this.replayButton = this.finishScreen.querySelector(".replay-img");

    // 리플레이 버튼 클릭시
    this.replayButton.addEventListener("click", ()=>{
      // console.log("리플레이 버튼 클릭");
      // 종료 화면 숨기는 함수 호출
      this.hideFinishScreen();
    });

    // setter로 상태값 바꿔주기
    this.status = "READY";
  }
  // 준비 화면 보여주기
  showReadyScreen(){
    gsap.to(this.titleImage, {
      scale : 1,
      rotation : 720,
      opacity : 1,
      duration : 0.5
    });
    gsap.to(this.playButton, {
      scale : 1,
      duration : 1,
      ease : Elastic.easeOut.config(2, 0.5),
      delay : 0.5
    });
  }
  // 준비 화면 숨기기
  hideReadyScreen(){
    gsap.to(this.readyScreen, {
      opacity : 0,
      pointerEvents : "none",
      duration : 0.3,
      // 완성 후 콜백
      onComplete : ()=>{
        // 상태 바꾸기
        this.status = "PLAYING";
      }
    });
  }
  // 종료 화면 보이기
  showFinishScreen(){
    // 총 이동 거리 보여주기
    this.distanceText.innerText = `${Math.floor(this.app.score.distCount)}m`;
    // 총 획득한 코인 수 보여주기
    this.coinText.innerText = `${this.app.score.coinCount}coin`;

    gsap.fromTo(this.finishScreen,
      // from옵션
      {
        opacity: 0
      },
      // to옵션
      {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "all"
      }
    );
      
    gsap.fromTo(this.distanceText,
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 1
      }
    );

    gsap.fromTo(this.coinText,
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 1.1
      }
    );

    gsap.fromTo(this.replayButton,
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 720,
        duration: 0.5,
        delay: 1.3
      }
    );
  }

  // 종료 화면 숨기기
  hideFinishScreen(){
    gsap.fromTo(this.finishScreen,
      {
        opacity: 1
      },
      {
        opacity: 0,
        duration: 0.1,
        pointerEvents: "none"
      }
    );

    // 게임 상태 변수 변경
    this.status = "PLAYING";

    // app 리셋 함수 호출
    this.app.reset();
  }
}