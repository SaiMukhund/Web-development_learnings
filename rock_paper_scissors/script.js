let imgHover=document.querySelectorAll(".selector");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let resultText=document.querySelector("#result");

imgHover.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        val.classList.add("hovered");
    });
    val.addEventListener("mouseout",()=>{
        val.classList.remove("hovered");
    });
}
);