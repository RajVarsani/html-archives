
let mytxt = document.getElementById("mytxt")
let btn = document.getElementById("btnd")
let btnr = document.getElementById("btnr")
let search = document.getElementById("search")
let card = document.getElementsByClassName("card-text")
// shownotes();
btn.addEventListener('click', function(){
    let note1;
    let text = mytxt.value.length
    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesobj=[]
    }else{
        notesobj = JSON.parse(notes);
    }if(mytxt.value !=0){
    notesobj.push(mytxt.value)
    }else{
        alert("please write your note before adding your notes")
    }
    localStorage.setItem("notes", JSON.stringify(notesobj))
    mytxt.value=" "
    console.log(notesobj)
    shownotes();
})
shownotes();
function shownotes(){
    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesobj=[]
    }else{
        notesobj = JSON.parse(notes);
    }
    localStorage.setItem("notes", JSON.stringify(notesobj))
    let html=""
    notesobj.forEach((element,index) => {
        html+=`
        <div class="card mx-3 my-3 " style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id=" ${index}" onclick="delet(this.id)" class="btn btn-primary">delete</button>
                </div>
              </div>     
        `
    });
    let notelm = document.getElementById("note")
    if(notesobj.length !=0){
       notelm.innerHTML = html;
    }else{
        notelm.innerHTML=  `<h3 class="text-center text-capitalize text-secondary" >nothing in your notes </h3>`
    }
}
btnr.addEventListener('click', function(){
    if(notesobj.length !=0){
        localStorage.clear();
    shownotes();
    }else{
        alert("there was nothing in your data to delete")
    }
    
})
function delet(index){
  console.log(index);
  let notes = localStorage.getItem("notes")
    if(notes==null){
        notesobj=[]
    }else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index , 1);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    shownotes();

}
search.addEventListener('input', function(){
    console.log("running")
    let cards = document.getElementsByClassName("card-body")
    Array.from(cards).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0]
        console.log(cardtxt)
    });
})