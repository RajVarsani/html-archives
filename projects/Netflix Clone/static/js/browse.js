const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100)
    {
        nav.classList.add('nav-black');
    }
    else
    {
        nav.classList.remove('nav-black');
    }
});

function home() {
    window.location.href = "../../index.html";
}

var gl_val = "films";

function sorf(val) {
  let u = document.getElementsByClassName("row");
  gl_val = val;
  if(val == "series")
  {
    u[0].childNodes[1].innerHTML = 'Comedies';
    u[1].childNodes[1].innerHTML = 'Feel Good';
    u[2].childNodes[1].innerHTML = 'Children';
    u[3].childNodes[1].innerHTML = 'Documentaries';
    u[4].childNodes[1].innerHTML = 'Crime';

    for(let i = 0; i < 5; i++)
    {
      while(u[i].childNodes[3].firstChild) {
        u[i].childNodes[3].removeChild(u[i].childNodes[3].lastChild);
      }

      for(let j = 1; j <= 5; j++)
      {
        var id = u[i].childNodes[3].getAttribute('id');
        var img = document.createElement("img");
        img.src = "../static/images/browse/series/"+id+"/"+j+"a.jpg";
        img.alt = id + "_poster";
        img.setAttribute("class", "row-poster");
        img.setAttribute("onclick", "card_disp('"+id+j+"')");
        var id_poster = document.getElementById(id);
        id_poster.appendChild(img);
      }
    }

    let q = document.getElementsByClassName("card");
    for(let i = 0; i < q.length; i++)
    {
      if(q[i].style.display != "none")
      {
        q[i].style.display = "none";
      }
    }
  }
  else if(val == "films")
  {
    u[0].childNodes[1].innerHTML = 'Drama';
    u[1].childNodes[1].innerHTML = 'Thriller';
    u[2].childNodes[1].innerHTML = 'Children';
    u[3].childNodes[1].innerHTML = 'Suspense';
    u[4].childNodes[1].innerHTML = 'Romance';

    for(let i = 0; i < 5; i++)
    {
      while(u[i].childNodes[3].firstChild) {
        u[i].childNodes[3].removeChild(u[i].childNodes[3].lastChild);
      }

      for(let j = 1; j <= 5; j++)
      {
        var id = u[i].childNodes[3].getAttribute('id');
        var img = document.createElement("img");
        img.src = "../static/images/browse/films/"+id+"/"+j+"a.jpg";
        img.alt = id + "_poster";
        img.setAttribute("class", "row-poster");
        img.setAttribute("onclick", "card_disp('"+id+j+"')");
        var id_poster = document.getElementById(id);
        id_poster.appendChild(img);
      }
    }

    let q = document.getElementsByClassName("card");
    for(let i = 0; i < q.length; i++)
    {
      if(q[i].style.display != "none")
      {
        q[i].style.display = "none";
      }
    }
  }
}

let q = document.getElementsByClassName("close");
for(let i = 0; i < q.length; i++)
{
  q[i].addEventListener("click", function () {
    let content = this.parentElement;
    if(content.style.display!="none")
    {
      content.style.display = "none";
    }
  });
}

let r = document.getElementsByClassName("banner-button");
for(let i = 0; i < r.length; i++)
{
  r[i].addEventListener("click", function () {
    let content = document.getElementById("vdo-div");
    if(content.style.display=="none")
    {
      content.style.display = "";
    }
  });
}

let t = document.getElementById("vdo-btn");
t.addEventListener("click", function () {
  t.parentElement.parentElement.style.display = "none";
});

function card_disp(val)
{ 
  let s = document.getElementsByClassName("row-posters");
  var card = s[parseInt(val.charAt(1))-1].parentElement.childNodes[5];
  card.style.backgroundImage = "url('../static/images/browse/"+gl_val+"/"+s[parseInt(val.charAt(1))-1].getAttribute('id')+"/"+parseInt(val.charAt(2))+"b.jpg')";
  card.style.display = "";
}