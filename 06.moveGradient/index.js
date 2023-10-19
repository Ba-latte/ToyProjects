import { Particle } from "./js/Particle.js";


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const dpr = window.devicePixelRatio < 1 ? 2 : 1;

let canvasWidth = innerWidth;
let canvasHeight = innerHeight;

const interval = 1000 / 60;

// 총 파티클 갯수 : 화면 사이즈가 달라져도 비슷한 비율 유지하기
// const totalParticles = canvasWidth / 100;
const totalParticles = 5;

// 파티클 인스턴스 담을 배열
const particles = [];

// 색상
const COLORS = [
    {r: 45, g: 74, b: 227}, // blue
    {r: 250, g: 255, b: 89}, // yellow
    {r: 60, g: 176, b: 255}, // #3cb0ff
    {r:255, g: 40, b: 87} // #ff2857
];

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

    // 색상 배열 갯수
    let colorCount = 0;

    // ctx.globalCompositeOperation = "saturation";

    // 파티클 생성
    for(let i = 0; i < totalParticles; i++ ){
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const radius = Math.random() * (900, 400) + 400;

        // 파티클 만들기
        const particle = new Particle(x, y, radius, COLORS[colorCount]);

        // 색상 배열 갯수 1씩 증가시키기
        colorCount = ++colorCount;
        // console.log(colorCount);
        
        // 색상 배열 갯수보다 많아질 경우 0으로 재설정
        if(colorCount >= COLORS.length) colorCount = 0;
        
        // 배열에 파티클 추가하기
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
            // 파티클 업데이트
            particles[i].update();
            // 파티클 그리기
            particles[i].draw(ctx);

            // 충돌 감지
            if(particles[i].isTouching(canvasWidth, canvasHeight) === "touchX"){
                // console.log("X방향 충돌");
                // 방향 바꾸기
                particles[i].vx *= -1;
                particles[i].x += particles[i].vx;
            }
            else if(particles[i].isTouching(canvasWidth, canvasHeight) === "touchY"){
                // console.log("Y방향 충돌");
                particles[i].vy *= -1;
                particles[i].y += particles[i].vy;
            }
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