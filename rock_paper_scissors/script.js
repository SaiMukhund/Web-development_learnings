let imgHover=document.querySelectorAll(".selector");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let resultText=document.querySelector("#result");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let rock=document.querySelector("#rock");
console.log(rock);
imgHover.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        val.classList.add("hovered");
    });
    val.addEventListener("mouseout",()=>{
        val.classList.remove("hovered");
    });
}
);
let user_score=0;
let comp_score=0;
function getRandomNumber(){
    let num=Math.floor(Math.random()*3);
    return num;
}
rock.addEventListener("click",()=>{
    let num=getRandomNumber();
    if (num===0){
        resultText.innerHTML="Draw, play again !!";
        resultText.
    }
    else if(num===1){
        comp_score+=1;
        compScore.innerHTML=comp_score;
        resultText.innerHTML="The computer Won against you";
        if (resultText.classList.contains("won")) {
            resultText.classList.remove("won");
        }
        resultText.classList.add("lost");
        
    }
    else{
        user_score+=1;
        userScore.innerHTML=user_score;
        resultText.innerHTML="You have won against the Computer";
        if (resultText.classList.contains("lost")) {
            resultText.classList.remove("lost");
        }
        resultText.classList.add("won");
    }
})