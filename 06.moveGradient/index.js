import { Particle } from "./js/Particle.js";


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const dpr = window.devicePixelRatio < 1 ? 2 : 1;

let canvasWidth = innerWidth;
let canvasHeight = innerHeight;

const interval = 1000 / 60;

// 총 파티클 갯수 : 화면 사이즈가 달라져도 비슷한 비율 유지하기
const totalParticles = canvasWidth / 100;
// 파티클 인스턴스 담을 배열
const particles = [];

// 초기화 함수 : 처음 로드될 때, 리사이즈될 때 실행
function init(){
    // 캔버스 사이즈 업데이트
    canvasWidth = innerWidth;
    canvasHeight = innerHeight;

    // 캔버스 고유 사이즈 적용
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    // 캔버스 사이즈 CSS 스타일 적용
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";

    // 기기마다 선명도 차별 적용
    ctx.scale(dpr, dpr);


    // 파티클 생성
    for(let i = 0; i < totalParticles; i++ ){
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const radius = Math.random() * (900, 400) + 400;

        const particle = new Particle(x, y, radius);

        particles.push(particle);
    }
}




// 렌더 함수
function render(){
    let now, delta;
    let then = Date.now();

    // 프레임 함수
    const frame = ()=>{
        requestAnimationFrame(frame);

        now = Date.now();
        delta = now - then;

        if(delta < interval) return;
        ///////////////////////////////////////////////
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // 파티클 관련
        for(let i = 0; i < totalParticles; i++){
            // 파티클 그리기
            particles[i].draw(ctx);
        }
        
        ///////////////////////////////////////////////
        then = now - (delta % interval);
    };
    // 프레임 함수 호출해서 트리거 걸기
    requestAnimationFrame(frame);
}




// 윈도우 리사이즈시 초기화 함수 실행
window.addEventListener("resize", init);

// 윈도우 로드시 초기화, 렌더 함수 실행
window.addEventListener("load", ()=>{
    init();
    render();
});