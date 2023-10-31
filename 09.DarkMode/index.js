

window.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector("body");
  const button = document.querySelector(".toggleButton");

  button.addEventListener("click", ()=>{
    body.classList.toggle("dark");
  });
});