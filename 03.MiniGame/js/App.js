import Background from "./Background.js";
import Coin from "./Coin.js";
import Player from "./Player.js";
import Wall from "./Wall.js";

export default class App{
    // 전역으로 쓰이는 변수 선언
    static canvas = document.querySelector("canvas");
    static ctx = App.canvas.getContext("2d");
    static dpr = devicePixelRatio > 1 ? 2 : 1;
    static interval = 1000 / 60;
    static width = 1024;
    static height = 768;

    constructor(){
        // 배경 불러오기
        // this.background = new Background();
        this.backgrounds = [
            new Background({ img : document.querySelector("#bg1-img"), speed : -1 }),
            new Background({ img : document.querySelector("#bg2-img"), speed : -2 }),
            new Background({ img : document.querySelector("#bg3-img"), speed : -3 }),
            new Background({ img : document.querySelector("#bg4-img"), speed : -5 }),
            new Background({ img : document.querySelector("#bg5-img"), speed : -7 }),
            new Background({ img : document.querySelector("#bg6-img"), speed : -9 }),
        ];

        // 벽 불러오기
        this.walls = [new Wall({ type : 'SMALL' })];

        // 플레이어 불러오기
        this.player = new Player();

        // 코인 불러오기
        // this.coins = [new Coin(700 + this.walls[0].width / 2, this.walls[0].y2 - this.walls[0].gapY / 2)]; // 테스트용
        this.coins = [];
    }

    // 리사이즈
    resize(){
        App.canvas.width = App.width * App.dpr;
        App.canvas.height = App.height * App.dpr;
        App.ctx.scale(App.dpr, App.dpr);

        // 화면 비율 정하기
        const width = innerWidth > innerHeight ? innerHeight * 0.9 : innerWidth * 0.9;
        App.canvas.style.width = width + 'px';
        App.canvas.style.height = width * (3 / 4) + 'px';
    }

    // 렌더
    render(){
        let now, delta;
        let then = Date.now();

        // 프레임 함수
        const frame = ()=>{
            requestAnimationFrame(frame);

            now = Date.now();
            delta = now - then;

            if(delta < App.interval) return;
            ////////////////////////////////////////////
            App.ctx.clearRect(0, 0, App.width, App.height);

            // 배경이미지 생성 관련
            this.backgrounds.forEach((background)=>{
                // 배경이미지 움직이도록 업데이트
                background.update();
                // 배경이미지 생성
                background.draw();
            });

            // 벽 생성 관련
            for(let i = this.walls.length -1; i >= 0; i--){
                this.walls[i].update();
                this.walls[i].draw();

                // 벽이 화면 밖으로 나갔는지 확인
                // console.log(this.walls[i].isOutside);
                // 화면 밖으로 나가면 배열에서 지우기
                if(this.walls[i].isOutside) {
                    this.walls.splice(i, 1);
                    continue
                }

                // 다음 벽 만들기
                if(this.walls[i].canGenerateNext){
                    // 벽 1개만 만들도록 막아두기
                    this.walls[i].canGeneratedNext = true;

                    // 벽 만들기
                    const newWall = new Wall({ type : Math.random() > 0.4 ? 'SMALL' : 'BIG' });
                    this.walls.push(newWall);

                    // 랜덤 확률로 코인 생성하기
                    if(Math.random() < 1){
                        const x = newWall.x + newWall.width / 2;
                        const y = newWall.y2 - newWall.gapY / 2;
                        this.coins.push(new Coin(x, y, newWall.vx));
                    }
                }

                // 생성된 벽과 플레이어간 충돌 감지
                if(this.walls[i].isColliding(this.player.boundingBox)){
                    // 충돌 체크
                    console.log("충돌!");

                    // 충돌시 플레이어 바운딩박스 색상 변경
                    this.player.boundingBox.color = `rgba(255, 0, 0, 0.5)`;
                }
                else{
                    // 충돌하지 않았을 경우 : 플레이어 바운딩박스 파란색
                    this.player.boundingBox.color = `rgba(0, 0, 255, 0.5)`;
                }
            }

            // 플레이어 관련
            this.player.update();
            this.player.draw();

            // 코인 관련
            for(let i = this.coins.length -1; i >= 0; i--){
                this.coins[i].update();
                this.coins[i].draw();

                // 코인이 화면 밖으로 나가면 배열에서 지우기
                if(this.coins[i].x + this.coins[i].width < 0){
                    this.coins.splice(i, 1);
                    // 코인 지운 후에 아래 코드 실행되지 않도록 막기
                    continue
                }

                // 플레이어와 코인 사이에서의 충돌 감지하기
                if(this.coins[i].boundingBox.isColliding(this.player.boundingBox)){
                    console.log("플레이어와 코인 충돌!");

                    // 충돌한 코인 배열에서 지우기
                    this.coins.splice(i, 1);
                }
            }


            ////////////////////////////////////////////
            then = now - (delta % App.interval);
        }; //////////// 프레임 함수 ////////////

        // 프레임 함수 호출
        requestAnimationFrame(frame);
    }
}