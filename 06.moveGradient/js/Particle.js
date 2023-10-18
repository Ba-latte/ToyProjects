// 그라데이션을 위한 파티클(원) 클래스

export class Particle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

    }
    update(){
        
    }
    draw(ctx){

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
            this.x, this.y, this.radius * 0.1, 
            this.x, this.y, this.radius
        );

        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'blue');

        ctx.fillStyle = gradient;

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        ctx.fill();
    }
}