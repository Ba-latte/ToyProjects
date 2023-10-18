import Particle from "./Particle";


// idnex.js에서 바로 작업하는 것이 아닌, 클래스 형태의 App을 만들고 캔버스를 만들고 index.js로 임포트 하는 방식
export default class App{
    // 고정된 static 변수 선언
    static canvas = document.querySelector("canvas");
    static ctx = App.canvas.getContext("2d");

    static dpr = devicePixelRatio > 1 ? 2 : 1;
    static interval = 1000 / 60;

    static width = innerWidth;
    static height = innerHeight;

    constructor(){
        // 파티클 불러오기
        this.particles = new Particle(
            Math.random() * App.width,
            Math.random() * App.height,
            Math.random() * (900 - 400) + 400,
        );
    }

    // 리사이즈
    resize(){
        // 캔버스 고유 사이즈 적용
        App.canvas.width = App.width * App.dpr;
        App.canvas.height = App.height * App.dpr;

        // 캔버스 사이즈 CSS 스타일 적용
        App.canvas.style.width = App.width + 'px';
        App.canvas.style.height = App.height + 'px';

        // 기기별 선명도 차별 적용
        App.ctx.scale(App.dpr, App.dpr);
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
            ///////////////////////////////////////////
            App.ctx.clearRect(0, 0, App.width, App.height);
            
            // 테스트용 박스 그리기
            // App.ctx.fillRect(0, 0, 100, 100);
            
            // 원 생성 관련
            
            ///////////////////////////////////////////
            then = now - (delta % App.interval);
        };

        // 프레임 함수 호출
        requestAnimationFrame(frame);
    }
}