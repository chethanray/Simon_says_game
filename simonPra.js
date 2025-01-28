let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
        if(started == false){
            console.log("Game started");
            started = true;

            levelUp();
        }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let idxId = Math.floor(Math.random() * 3);
    let idxColor = btns[idxId];
    let btnColor = document.querySelector(`.${idxColor}`);
    gameFlash(btnColor);
    gameSeq.push(idxColor);
    console.log(gameSeq);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash")
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    },250);
}


function btnCkeck() {
    let btn = this;
    userFlash(btn);
    userColr = btn.getAttribute("id");
    userSeq.push(userColr);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnCkeck);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
                if(userSeq.length == gameSeq.length) {
                    setTimeout(levelUp,1000);
                }
}else{
    h2.innerText = `Game Over ! Press any Key to Restart Your score was ${level}`;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor = "white";
    },150);
    reStart();
}
}

function reStart() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

