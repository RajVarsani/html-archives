let input=document.querySelector('input')
let button=document.querySelector('.submit')

button.addEventListener('click',(e)=>{
    e.preventDefault();
    button.textContent="Downloading file..."
   
    fectchfile(input.value)
})
function fectchfile(url) {
    fetch(url).then(res=>res.blob()).then(file=>{
        
        let tempUrl=URL.createObjectURL(file);//make a string of url
       
        const a=document.createElement("a")//create element of a
        a.href=tempUrl
        a.download=url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(a)
        a.click()
        button.innerHTML="Download File"
        URL.revokeObjectURL(tempUrl)
        a.remove()
    }).catch(()=>{
        alert("Failed to Download")
        button.innerHTML="Download File"

    });
}



