var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

for (var i=0; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();// for preventing other events
        var targetSectionID =this.textContent.trim().toLowerCase();//for coventing name to it id
        var targetSection=document.getElementById(targetSectionID);
        
        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top<=0){
               
                clearInterval(interval);
                return;

            }
            window.scrollBy(0,50);

        },25);

    });

}

/*-----auto fill bars---*/

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById("skill-container");
window.addEventListener("scroll",chkscroll);
var animationd= false;

function intilize_bars(){
    for (let bar of progressBars){
        bar.style.width=0+'%';
    }
}
intilize_bars();


function fillbars(){
    for (let bar of progressBars){
        let target_width=bar.getAttribute('data-width-value');
        let current_width=0;
        let intervall=setInterval(function(){
            if (current_width>target_width){
                clearInterval(intervall);
                return;
            }
            current_width++;
            bar.style.width=current_width+'%';

        },5);
    }
}
function chkscroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if (!animationd && coordinates.top <=window.innerHeight){
        animationd=true;
        fillbars();

    }
    else if( coordinates.top > window.innerHeight){
        animationd=false;
    }
}