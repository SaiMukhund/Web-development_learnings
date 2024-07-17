let imgHover=document.querySelectorAll(".selector");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let resultText=document.querySelector(".result");
imgHover.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        val.classList.add("hovered");
    });
    val.addEventListener("mouseout",()=>{
        val.classList.remove("hovered");
    });
}
);

let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let rock=document.querySelector("#rock");
console.log(rock);

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
        resultText.classList.remove("won");
        resultText.classList.remove("lost");
    }
    else if(num===1){
        comp_score+=1;
        compScore.innerHTML=comp_score;
        resultText.innerHTML="The computer Won, Paper beats the Rock";
        if (resultText.classList.contains("won")) {
            resultText.classList.remove("won");
        }
        resultText.classList.add("lost");
        
    }
    else{
        user_score+=1;
        userScore.innerHTML=user_score;
        resultText.innerHTML="You have won, Rock beats the Scissors ";
        if (resultText.classList.contains("lost")) {
            resultText.classList.remove("lost");
        }
        resultText.classList.add("won");
        console.log(resultText);
    }
});

paper.addEventListener("click",()=>{
    let num=getRandomNumber();
    if (num===1){
        resultText.innerHTML="Draw, play again !!";
        resultText.classList.remove("won");
        resultText.classList.remove("lost");
    }
    else if(num===2){
        comp_score+=1;
        compScore.innerHTML=comp_score;
        resultText.innerHTML="The computer Won, Scissors beats the Paper";
        if (resultText.classList.contains("won")) {
            resultText.classList.remove("won");
        }
        resultText.classList.add("lost");
        
    }
    else{
        user_score+=1;
        userScore.innerHTML=user_score;
        resultText.innerHTML="You have won, Rock beats the Scissors ";
        if (resultText.classList.contains("lost")) {
            resultText.classList.remove("lost");
        }
        resultText.classList.add("won");
        console.log(resultText);
    }
});

scissor.addEventListener("click",()=>{
    let num=getRandomNumber();
    if (num===2){
        resultText.innerHTML="Draw, play again !!";
        resultText.classList.remove("won");
        resultText.classList.remove("lost");
    }
    else if(num===0){
        comp_score+=1;
        compScore.innerHTML=comp_score;
        resultText.innerHTML="The computer Won, Rock beats the Scissors";
        if (resultText.classList.contains("won")) {
            resultText.classList.remove("won");
        }
        resultText.classList.add("lost");
        
    }
    else{
        user_score+=1;
        userScore.innerHTML=user_score;
        resultText.innerHTML="You have won, Scissor beats the Paper ";
        if (resultText.classList.contains("lost")) {
            resultText.classList.remove("lost");
        }
        resultText.classList.add("won");
        console.log(resultText);
    }
})