let vos = {
    x:0,y:0
};
let wholesnake = [
    {
        x: 8, y:8
    }
   
    ,{
        x: 7, y:5
    }
   
    
]
let xa= Math.floor((Math.random()*255)),yb= Math.floor((Math.random()*255)),zc=Math.floor((Math.random()*255));

let flag =  false
let fobj = {x:Math.floor(Math.random()*14)+2,y:Math.floor(Math.random()*14)+2}
const main =  document.querySelector(".main")
const reqSpeed = 7;
let Ltime = 0;
let bTime;
const eqtime = (time)=>{
    window.requestAnimationFrame(eqtime);

    if((time - Ltime)/1000 < (1/reqSpeed)){
        return;
    }
    Ltime = time
    bTime = Ltime-time
    Game();

}
const over = () =>{
    for(let i = 4;i<wholesnake.length;i++){
        console.log( wholesnake[0].x + " " +wholesnake[0].y +" "+i+ " Cooridnates " + wholesnake[i].x + " " +wholesnake[i].y )
        if(wholesnake[0].x === wholesnake[i].x && wholesnake[0].y === wholesnake[i].y && flag){
            alert("Cooridnates " + wholesnake[0].x + " " +wholesnake[0].y +" "+i+ " Cooridnates " + wholesnake[i].x + " " +wholesnake[i].y 
            +" "+flag)
            return true
        }
     
    }
    if(wholesnake[0].x >20||wholesnake[0].x<0||wholesnake[0].y >20||wholesnake[0].y<0){
        alert("Wall hit")
        return true
    }
     
    return false;
}
let score = 0;
let newflag = true;
let eat = new Audio("./Assets/eat.mp3")
let hit = new Audio("./Assets/hit.mp3")
const Game = ()=>{
    //
   
    if(wholesnake[0].x  === fobj.x && wholesnake[0].y == fobj.y){
        //Unshift is for adding element in objects
        eat.play();
        score++;
        if(score==10 && newflag){
            newflag = false;
            document.querySelector(".tastyapple").classList.add("tastyappleanime");
            setTimeout(()=>{
                console.log(document.querySelector(".tastyapple").classList.remove("tastyappleanime"))  
                
            },6000)

        }

        document.querySelector(".Score").style.transform = "scale(1.2)"
        setTimeout(()=>{
            document.querySelector(".Score").style.transform = "scale(1)"
        },400) 

        document.querySelector("p").innerHTML = " "+score;
        
        wholesnake.unshift({
            x:wholesnake[0].x + vos.x,
            y:wholesnake[0].y + vos.y,
        });
        let rx;
        let ry;
        while(1){
             rx =  Math.floor(Math.random()*14)+2
             ry =  Math.floor(Math.random()*14)+2
            if(rx!=fobj.x && ry!=fobj.y){
                break
            }
        }
        fobj = {x: rx,y:ry }
        

    }
  
    //
    for(let i =wholesnake.length-2;i>=0;i--){
        wholesnake[i+1] = {...wholesnake[i]};

    }
    wholesnake[0].x += vos.x;
    wholesnake[0].y += vos.y;
    
    //
  main.innerHTML = ""
  wholesnake.forEach((event , pos)=>{
    newelment  =  document.createElement("div");
    
    newelment.style.gridRowStart = event.y;
    newelment.style.gridColumnStart = event.x;
   
    if(pos===0){
        
        newelment.classList.add("head");
    }
    else{
        newelment.classList.add("wholesnake");
        newelment.style.background = `rgb(${xa},${yb},${zc})`
        newelment.style.border = `0.5px solid white`

    }
    main.append(newelment);
   
 
})
if(over() ){

    score = 0
    newflag = true;
    xa= Math.floor((Math.random()*255)),yb= Math.floor((Math.random()*255)),zc=Math.floor((Math.random()*255));
    document.querySelector("p").innerHTML = " "+score;

    vos = {x:0,y:0}
    wholesnake = [{
        x:8,y:8
    }
    ,{
     x: 8, y:8
 }];
 flag = false
}
 //
felement  =  document.createElement("img");
felement.src = "./Assets/apple.png"
felement.style.gridRowStart = fobj.y;
felement.style.gridColumnStart = fobj.x;
felement.classList.add("food");
 main.append(felement);
}
let up = true
let down = true
let right = true
let left = true
window.requestAnimationFrame(eqtime);
window.addEventListener("keydown", event =>{
    setTimeout(()=>{
        vos = {x:0,y:0}
        flag = true
       switch (event.key){
           case "ArrowUp":
               if(down){
                //38 == up
                vos.x = 0;
                vos.y = -1;
              up = false
              down = true
              right = true
              left = true
               }
               break
            case 'w':
                if(down){
                    //38 == up
                    vos.x = 0;
                    vos.y = -1;
                  up = false
                  down = true
                  right = true
                  left = true
                   }
                   break
    
            case "ArrowLeft" :
                if(right){
                 //37 == left
            vos.x = -1;
            vos.y = 0;
            up = true
            down = true 
            right = true
            left =false
                }
                break
                case "a" :
                    if(right){
                     //37 == left
                vos.x = -1;
                vos.y = 0;
                up = true
                down = true 
                right = true
                left =false
                    }
                    break
           case "ArrowRight" :
                    if(left){
                    //39 == right
            vos.x = 1;
            vos.y = 0;
            up = true
            down = true
            right = false
            left = true
                    }
                    break
                    case "d" :
                        if(left){
                        //39 == right
                vos.x = 1;
                vos.y = 0;
                up = true
                down = true
                right = false
                left = true
                        }
                        break
           case "ArrowDown" :
                 if(up){
               //40 == down
            vos.x = 0;
            vos.y = 1;
            up = true
            down = false
            right = true
            left = true
    
                        }
                        break
                        case "s" :
                 if(up){
               //40 == down
            vos.x = 0;
            vos.y = 1;
            up = true
            down = false
            right = true
            left = true
    
                        }
                        break
            default :
            break }
       
    
        if(!left){
            vos.x = -1;
            vos.y = 0;   
        }
        else if(!right){
            vos.x = 1;
            vos.y = 0;   
        }
        else if(!up){
            vos.x = 0;
            vos.y = -1;   
        }
        else if(!down){
            vos.x = 0;
            vos.y = 1;   
        }
    },Math.abs(bTime))
   
},)
//Ryuk

