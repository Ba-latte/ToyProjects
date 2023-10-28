import { Application } from '@splinetool/runtime';


window.addEventListener("load", ()=>{
  const width = innerWidth;
  const height = innerHeight;
  
  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  
  app.canvas.width = width;
  app.canvas.height = height;
  
  app.load('https://prod.spline.design/POvPe-b5AssZHpOX/scene.splinecode');
});
