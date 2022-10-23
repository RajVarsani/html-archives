let allsub = document.querySelectorAll(".sub");
let flag = true,drawnumber = 0;
let Stop = true;
let p1wins = 0;
let p2wins = 0;
let tie  = 0;
let p1count = 0;
let p2count = 0;
let drawcount = 0;
let Rounds = document.querySelector(".Round");Rounds.innerHTML = "ROUND 1";
let resultbeta = document.querySelector(".result1")
let resultx = document.querySelector(".result")
let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
let score3 = document.querySelector(".score3")
let leading =   document.querySelector(".leading")
allsub.forEach(sub=>{
   
    sub.addEventListener("click",()=>{
    var x = document.querySelector(`.b${sub.classList[1]}`);
    if(x.id!="circle" && x.id!="cross"&& Stop){
        // console.log(x.classList)
      
        if(flag ){
           x.classList.add("circle");
           x.setAttribute("id","circle");
           flag = false;
           resultx.innerHTML = `Now - ${p2.value}'s Turn ( X )`


        }
        else{
            x.classList.add("b")
            x.childNodes[0].classList.add("mainline");
            x.childNodes[0].classList.add("xline");
            x.childNodes[1].classList.add("mainline");
            x.childNodes[1].classList.add("yline");
            x.setAttribute("id","cross");
            resultx.innerHTML = `Now - ${p1.value}'s Turn ( O )`
            flag = true;
        }
        drawnumber++;
        let Result = Checking();
        if(Result == 'Circle Wins'){

            resultx.innerHTML = `${p1.value} Won`
            p1count++;

        }
        else if(Result == "Cross Wins"){
           resultx.innerHTML =`${p2.value} Won`
           p2count++;

        }
        else if(Result == 'Draw'){
            resultx.innerHTML = `Draw`
            drawcount++;
        }
        score1.innerHTML  = p1count; 
        score3.innerHTML  = p2count;
        score2.innerHTML  = drawcount; 
        if(p1count>p2count && p1count>drawcount)
         leading.innerHTML = `${p1.value} is in lead`
         else if(p2count>p1count && p2count>drawcount)
         leading.innerHTML = `${p2.value} is in lead`
         else if(p2count>drawcount && p1count> drawcount && p1count==p2count)
         leading.innerHTML = `Draw For Now`
         else if(drawcount>p1count && drawcount>p2count)
         leading.innerHTML = `Draw For Now`
         else{
             leading.innerHTML = `Draw For Now`
         }

 

        // if(Result){
        //    resultbeta.innerHTML = Result; 
        //    //console.log(p1wins,tie,p2wins)
        // }
    }
      darkformarkers()
    })

});
//Check
function Checking(){
    let Check11,Check12,Check21,Check22,diagonal1,diagonal2;
    for(let i = 1; i <=3;i++){
        Check11 = 0;
        Check12 = 0;
        Check21 =0;
        Check22 =0;
        diagonal1 = 0;
        diagonal2 = 0;
        for(let j = 1;j<=3;j++){
                    var c = document.querySelector(`.b${i}${j}`).id;
                    var d  = document.querySelector(`.b${j}${i}`).id;
                   
                     if(c=="circle"){
                         Check11++;
                     }
                     if(c=="cross"){
                         Check12++;
                     }
                     if(d=="circle"){
                         Check21++;
                     }
                     if(d=="cross"){
                         Check22++;
                     }
                    }
                    if(Check11==3){
                        p1wins++;   
                        Stop = false;
                        flag = true;
                        return "Circle Wins";
                   }
                   if(Check12==3){
                        p2wins++;   
                        Stop = false;
                        flag = false;
                        return "Cross Wins"
                   }
                   if(Check21==3){
                        p1wins++;
                        Stop = false;
                    flag = true;
                        return "Circle Wins";
                }
                if(Check22==3){
                        p2wins++;
                        Stop = false;
                        flag = false
                        return "Cross Wins"
                }
                    
                }
               
                for(let i = 1;i<=3;i++){
                    var  c  = document.querySelector(`.b${i}${i}`).id;
                if(c == "circle"){
                    diagonal1++;
                }
                if(c =="cross"){ 
                    diagonal2++
                }
           }
         
        if(diagonal1 == 3){
                p1wins++;
                Stop = false;
            flag = true;
                return "Circle Wins";
        }
        if(diagonal2==3){
                p2wins++;
                Stop = false;
                flag = false
                return "Cross Wins";
        }
  
  var  a  = document.querySelector(`.b13`).id;
  var  b  = document.querySelector(`.b22`).id;
  var  c  = document.querySelector(`.b31`).id;
  if(a=="circle"&&b=="circle"&&c=="circle"){
    p1wins++;
    Stop = false;
    flag = true;
    return "Circle Wins";
  }
  else if(a=="cross"&&b=="cross"&&c=="cross"){
    p2wins++; 
    Stop = false;
        flag = false 
    return "Cross Wins";
  }
 if(drawnumber == 9){
     tie++;
     Stop = false;
     return "Draw"
}}   


//Re Start
function Restart(){
        let allsub = document.querySelectorAll(".sub");
        allsub.forEach(sub=>{
        var x =document.querySelector(`.b${sub.classList[1]}`);
        x.classList.remove("circle");
        x.id = "";
        x.childNodes[0].classList.remove("mainline");
        x.childNodes[0].classList.remove("xline");
        x.childNodes[1].classList.remove("mainline");
        x.childNodes[1].classList.remove("yline");
        Stop = true;
        drawnumber = 0;
        Rounds.innerHTML = `ROUND ${drawcount +p1count + p2count+1}`;
        resultbeta.innerHTML=""
        if(flag) 
        resultx.innerHTML = `Now - ${p1.value}'s Turn ( O )`

        else 
        resultx.innerHTML =  `Now - ${p2.value}'s Turn ( X )`

     
  
    })
}
//Dark mode
var darkbutton = document.querySelector(".darkmode");
darkbutton.addEventListener("click",()=>{
   
    document.querySelector("body").classList.toggle("BLACK")
    document.querySelector(".main").classList.toggle("anime")
    darkformarkers()
    document.querySelector(".Round").classList.toggle("WHITE")
    document.querySelector(".Round").classList.toggle("darkforth")
    document.querySelector(".result").classList.toggle("WHITE")
    document.querySelector(".s1").classList.toggle("WHITE")
    document.querySelector(".s2").classList.toggle("WHITE")
    //  p1.classList.toggle("WHITE")
    //  p1.classList.toggle("WHITE")
    document.querySelector(".leading").classList.toggle("WHITE")
    document.querySelector(".p11").classList.toggle("WHITE")
    document.querySelector(".p12").classList.toggle("WHITE")
    document.querySelector(".drawcount").classList.toggle("WHITE")
    document.querySelector(".title").classList.toggle("WHITE")
    p1.classList.toggle("xw")
    p2.classList.toggle("xw")
    
    document.querySelector("submit")
    resultbeta.classList.toggle("WHITE")
    document.querySelectorAll(".sub").forEach(sub=>{
        sub.classList.toggle("darkfirst")
        sub.classList.toggle("WHITE")
    })   

    document.querySelectorAll(".restart").forEach(sa=>{
        sa.classList.toggle("WHITE");
        sa.classList.toggle("down");
    })

    // document.querySelector(".reandne").classList.toggle("WHITE")

    
});
function darkformarkers(){
    if(document.querySelector("body").classList.contains("BLACK")){
     document.querySelector(".firstimg").src = "./return-button-dark.png"
     document.querySelector(".secondimg").src = "./Nightmodedark.png"
        document.querySelectorAll(".mainline").forEach(x=>{
            if(!x.classList.contains("darksecond")){
                x.classList.add("darksecond")
            }
          
        })   
           
        document.querySelectorAll(".circle").forEach(x=>{
            if(!x.classList.contains("WHITE")){
                x.classList.add("WHITE")
            }
          
        })   
    }
    else{
    document.querySelector(".firstimg").src = "./return-button-png.png" 
    document.querySelector(".secondimg").src = "https://img.icons8.com/ios/452/day-and-night.png" 
        document.querySelectorAll(".mainline").forEach(x=>{
            if(x.classList.contains("darksecond")){
                x.classList.remove("darksecond")
            }
          
        })   
           
        document.querySelectorAll(".circle").forEach(x=>{
            if(x.classList.contains("WHITE")){
                x.classList.remove("WHITE")
            }
          
        })   
    }
   
}
function checker(){
   
   
}
//Player
Rounds.style.opacity = 0
let header  = document.querySelector(".header")
let main = document.querySelector(".main")
// header.style.margin = "0px 0px 100px 0px"
let playerinfo = document.querySelector(".playerinfo")
let body = document.querySelector("body")
body.style.overflow = "hidden"
let form = document.querySelector("form")
 let p1 = document.querySelector(".text1");
 let p2 = document.querySelector(".text2");
form.addEventListener("submit",(e)=>{
e.preventDefault()
// header.style.margin = "0px 0px 100px 0px"
    resultx.innerHTML = `Now - ${p1.value}'s Turn ( O )`
       document.querySelector(".player1").innerHTML = `${p1.value}`
       document.querySelector(".player2").innerHTML = `${p2.value}`
       PlayerAfter();

})
function PlayerAfter(){
    playerinfo.style.height = "0vh"
    playerinfo.style.opacity = "0"
    document.querySelector(".game").style.display = "block"
    document.querySelector(".mainboard").style.display ="flex" 
    document.querySelector(".title").style.display ="flex" 
    setTimeout(()=>{
    playerinfo.style.display = "none"
    body.style.overflowY = "scroll"
    Rounds.style.opacity = 1
    

},2000)
}
//

// New Match
let newmatchx = document.querySelector(".newmatch");
newmatchx.addEventListener("click",()=>{
    newmatchy = confirm("You sure want to go ahead , data of your this game will be Erased?");
    if(newmatchy){
        p1count = 0;
        p2count = 0;
        drawcount = 0;
        score1.innerHTML = 0;
        score2.innerHTML = 0
        score3.innerHTML = 0;
        resultx.innerHTML = `Now - ${p1.value}'s Turn ( O )`
        flag = true;
        leading.innerHTML = ""
        Rounds.innerHTML = "ROUND 1";

        Restart();
    }
    })
