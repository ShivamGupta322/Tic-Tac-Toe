let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector("#draw");
let p=document.querySelector("p");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        gameDraw();
    });
});


const checkWinner=()=>{
    for( pattern of winPatterns){

        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;

        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
           if(pos1Value===pos2Value && pos2Value===pos3Value){
            console.log("winner",pos1Value);  
            showWinner(pos1Value);
           }
        }
    }
};

const showWinner=()=>{
    msg.innerText='CONGRATULATIONS, YOU WIN';
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

let count=0;
const gameDraw=()=>{
    
        count++;
        console.log(count);
        if(count%9===0){
            msgContainer.classList.add("draw");
           p.textContent="game drawn" ;
        }
    

};



var tl=gsap.timeline()

tl.from(" h1",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.6,
    stagger:0.2
})

tl.from(" h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.6,
    stagger:0.2
})


tl.from(" button",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    rotation:45,
    stagger:0.2
})

