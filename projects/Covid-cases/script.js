const container= document.querySelector(".container");
const url="https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-2T22:13:30Z";
fetch(url)
  .then( (data) => {
    return data.text();
  } )
  .then((result) => {
    const array = JSON.parse(result);
    console.log(array);
    
array.forEach((ele)=> {

    const row = document.createElement("tr");
    row.classList.add("state");
    row.innerHTML = `<tr><td class="state">${ele.Province}</td><td>${ele.Confirmed}</td><td>${ele.Recovered}</td><td>${ele.Deaths}</td><td>${ele.Active}</td></tr>`;
    container.appendChild(row);
    
 });  
    
});