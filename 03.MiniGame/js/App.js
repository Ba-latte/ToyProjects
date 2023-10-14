import Background from "./Background.js";
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
                console.log(this.walls[i].isOutside);
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
                    this.walls.push(new Wall({ type : Math.random() > 0.4 ? 'SMALL' : 'BIG' }));
                }
            }

            // 플레이어 관련
            this.player.update();
            this.player.draw();


            ////////////////////////////////////////////
            then = now - (delta % App.interval);
        }; //////////// 프레임 함수 ////////////

        // 프레임 함수 호출
        requestAnimationFrame(frame);
    }
}