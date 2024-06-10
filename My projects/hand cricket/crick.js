let  score=0;
let cmpS=0;
let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#msg");
// console.log(msg.innerText)
let us=document.querySelector("#user-score")
let cs=document.querySelector("#comp-score")
// console.log(cmpsc.innerText)
let pl=document.querySelector("#turn");
// pl.innerText="hggh"


let compSelect=()=>
    {
        let select=Math.floor(Math.random()*10);
        return select;
    }
    let stop2=(cmpS)=>
        {
            console.log(cmpS)
           cs.innerText=cmpS;
           console.log(score)
           if(score>cmpS)
            {
              msg.innerText="You won!"
            }
            else
            {
                msg.innerText="You los!. Comp won!"

            }
           

        }
    const compGame=(userChoice)=>
        {
            let compChoice2=compSelect();
            let  toInt3=parseInt(compChoice2);
            console.log( `comp choice: ${toInt3}`);
            let toInt4=parseInt(userChoice);
            console.log( `user choice : ${toInt4}`);
            if(toInt3===toInt4)
                {
                    stop2(cmpS);
                }
               
            cmpS=cmpS + toInt3 + toInt4;


        }
     const stop=(score,toInt1)=>
        {
            
             
             us.innerText=score;
             turn0=false;

             console.log("##****##")
             


        }

  let yourPlayGame=(userChoice)=>
    {
        let toInt1=parseInt(userChoice);
        console.log( `user choice is : ${userChoice}`);
        let compChoice=compSelect();
        console.log(`computer choice is : ${compChoice}`);
        let toInt2=parseInt(compChoice);
        
        if(toInt1===toInt2)
            {
                 stop(score,toInt1);
            }
            else if(toInt1!==toInt2)
                {
                    score=score+toInt1 + toInt2;
                }
            
            console.log(score)
            
            
        
    }

let  turn0=true;
boxes.forEach((box)=>{
 
    box.addEventListener("click",()=>
    {
        const userChoice=box.getAttribute("id")
        if(turn0===true)
            {
                yourPlayGame(userChoice);
            }
            else if(turn0==false)
                {
                    compGame(userChoice)
                }
               
                 
                
    })
        // console.log("clicked")
      
    
})
function myFunction() 
{
   score=0;
   cmpS=0;
   msg.innerText="Winner";
}