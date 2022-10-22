const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')
const url = 'https://api.quotable.io/random'

async function getData(){
    const req = await fetch('https://api.quotable.io/random') // fetching quote from quoteable
    const res = await req.json() // change fethed data into json
    if(req.ok){ // if request is success
        quote.textContent = res.content;
        author.textContent = `- ${res.author}`;
    }
}
getData()
btn.addEventListener("click",getData);