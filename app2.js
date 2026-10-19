let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winning_result = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let newgamebtn = document.querySelector(".new");
let heading = document.querySelector(".heading");
let msg = document.querySelector(".msg");
let turnO = true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();

    })
})

let checkwinner = ()=>{
    for( let p of winning_result){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1 == pos2 && pos2==pos3){
                console.log("winner");
                winner(pos1);
            }

        } 

    }
}

let winner = (pos1)=>{
    
    heading.innerText = `winner is ${pos1}`;
    msg.classList.remove("hide");
    disablebox();
}
let disablebox = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

let enablebox = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let reset = () =>{
    turnO = true;
    enablebox();
    msg.classList.add("hide");

}
resetbtn.addEventListener("click",reset);
newgamebtn.addEventListener("click",reset);


