
window.addEventListener("DOMContentLoaded", ()=>{
    const headerButtons = document.querySelectorAll(".header__nav .header__button");
    const mountain01 = document.querySelector("#mountain01");
    const mountain02 = document.querySelector("#mountain02");
    const mountain03 = document.querySelector("#mountain03");
    const mountain04 = document.querySelector("#mountain04");
    const mainTitle = document.querySelector(".main__title");
    const string = "MOUNTAIN";

    for(txt of string){
        console.log(txt);
        mainTitle.innerHTML += `<span class="txt">${txt}</span>`;
    }

    const txts = document.querySelectorAll(".main__title .txt");

    console.log(txts);



    headerButtons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            // 기존 active 클래스 지우기
            document.querySelector(".header__button--active").classList.remove("header__button--active");

            // 지금 클릭된 요소에 active 클래스 부여하기
            button.classList.add("header__button--active");
        });
    });

    window.addEventListener("scroll", ()=>{
        const scrollY = window.scrollY;
        // console.log(scrollY);

        mountain01.style.transform = `translateY(${scrollY * 0.95}px)`;
        mountain02.style.transform = `translateY(${scrollY * 0.7}px)`;
        mountain03.style.transform = `translateY(${scrollY * 0.5}px)`;
        mountain04.style.transform = `translateY(${scrollY * 0.3}px)`;
        
    });

});