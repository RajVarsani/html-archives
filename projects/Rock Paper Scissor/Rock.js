let Roundscount = document.querySelector(".ROUNDS"); 
let Countwin = document.querySelector(".Wscore");   
let CountTies = document.querySelector(".Tscore");   
let CountLost = document.querySelector(".Lscore");  
let All =  document.querySelectorAll(".Ps");
let Roundcontainer  =  document.querySelector("#RouDetail")
let gamecount = 0;
let ShRounds= ["0"];
let Flag = true;
let body = document.querySelector("body");
let Fordarkmode = "";


All.forEach(elment =>{
    elment.addEventListener("click",()=>{
       if(Flag){ 
           Flag = false;
          gamecount++;
       Roundscount.innerHTML = `ROUND ${gamecount}`;
       
        document.querySelector(".OUR").src = `Images/Rock${Fordarkmode}.png`
        document.querySelector(".BOT").src = `Images/RockRotate${Fordarkmode}.png`
        document.querySelector(".OUR").classList.add("OURJS")
        document.querySelector(".BOT").classList.add("BOTJS")
        setTimeout(()=>{
        
            document.querySelector(".S").classList.add("Newanime")
            let Random =Math.floor(Math.random()*3);
            document.querySelector(".BOT").src = `Images/${All[Random].id}Rotate${Fordarkmode}.png`
            document.querySelector(".OUR").src = `Images/${elment.id}${Fordarkmode}.png`
                    
            ShRounds[gamecount] = document.createElement("span");

            if(elment.id== All[Random].id){/*console.log ( "Draw")*/CountTies.innerHTML++ ;CountTies.classList.add("countT"); ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Ties`;ShRounds[gamecount].classList.add("spant")};           
            if(elment.id == "Rock"&& All[Random].id === "scissors" ){/*console.log ( "Won")*/Countwin.innerHTML++ ;Countwin.classList.add("countW"); ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Won`;ShRounds[gamecount].classList.add("spanw")}
            if(elment.id == "Rock"&& All[Random].id === "Plam" ){/*console.log ( "Lost")*/CountLost.innerHTML++;CountLost.classList.add("countL"); ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Lost`;ShRounds[gamecount].classList.add("spanl")}
            if(elment.id == "scissors"&& All[Random].id === "Rock" ){/*console.log ( "Lost")*/CountLost.innerHTML++;CountLost.classList.add("countL"); ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Lost`;ShRounds[gamecount].classList.add("spanl")}
            if(elment.id == "scissors"&& All[Random].id === "Plam" ){/*console.log ( "Won")*/Countwin.innerHTML++;Countwin.classList.add("countW") ;ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Won`;ShRounds[gamecount].classList.add("spanw")}
            if(elment.id == "Plam"&& All[Random].id === "Rock" ){/*console.log ( "Won")*/Countwin.innerHTML++;Countwin.classList.add("countW") ;ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Won`;ShRounds[gamecount].classList.add("spanw")}
            if(elment.id == "Plam"&& All[Random].id === "scissors" ){/*console.log ( "Lost")*/CountLost.innerHTML++;CountLost.classList.add("countL"); ShRounds[gamecount].innerHTML =   `Round ${gamecount} -Lost`;ShRounds[gamecount].classList.add("spanl")}
            document.querySelector(".OUR").classList.remove("OURJS");
            document.querySelector(".BOT").classList.remove("BOTJS");
          
           
            if(gamecount!=1){
               Roundcontainer.insertBefore(ShRounds[gamecount],ShRounds[gamecount-1]); }
            else{ Roundcontainer.appendChild(ShRounds[1]);
                }
                Flag = true;
        
          
        },1550);
       
        setTimeout(()=>{
            
                Countwin.classList.remove("countW");
                CountLost.classList.remove("countL");
                CountTies.classList.remove("countT");
        },3000);


        
    }
    
    })
});

//DarK Mode

let Darkbutton = document.querySelector(".DarkMode");
let h1 = document.querySelectorAll("h1");
let header = document.querySelector("#hea");
let Readop = document.querySelector(".ReadandOption");
let Arena = document.querySelector(".Arena");
let readsection = document.querySelector("#readmoresection");
let c =true;
Darkbutton.addEventListener("click",()=>{
    body.classList.toggle("DarkBody")
    h1.forEach(element =>{element.classList.toggle("Darkh1")});
    CountLost.classList.toggle("Darkh1");
    Countwin.classList.toggle("Darkh1");
    CountTies.classList.toggle("Darkh1");
    Roundscount.classList.toggle("Darkh1");
    Arena.classList.toggle("DarkArena");
    Roundcontainer.classList.toggle("NONE");
    header.classList.toggle("DarkRound");
    All.forEach((e)=>{
        e.classList.toggle("Darkall")
    }
    )
   Readop.classList.toggle("ReadDARK");
   readsection.classList.toggle("ReadDARK")
   if(c){
   Fordarkmode = "Darkmode";
    c = false;
}
   else{
       Fordarkmode=""
       c= true;
   }
   document.querySelector(".BOT").src = `Images/RockRotate${Fordarkmode}.png`
   document.querySelector(".OUR").src = `Images/Rock${Fordarkmode}.png`
    
});

