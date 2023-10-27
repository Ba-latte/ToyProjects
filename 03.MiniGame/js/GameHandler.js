// 게임 핸들러 클래스

export default class GameHandler{
  constructor(){
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
    }
  }
  init(){
    // 대기 화면 구성요소 가져오기
    this.readyScreen = document.querySelector(".ready-screen");
    this.titleImage = this.readyScreen.querySelector(".title-img");
    this.playButton = this.readyScreen.querySelector(".play-img");

    // setter로 상태값 바꿔주기
    this.status = "READY";

    // 플레이 버튼 클릭시
    this.playButton.addEventListener("click", ()=>{
      console.log("플레이 버튼 클릭");
      // 준비 화면 숨기는 함수 호출
      this.hideReadyScreen();
    });

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
}