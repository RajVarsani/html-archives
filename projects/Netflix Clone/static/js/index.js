let q = document.getElementsByClassName("question");
var t = 0;

for (let i = 0; i < q.length; i++)
{
  q[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus"))
    {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
      t += 1;

      if (t > 1)
      {
        for (let j = 0; j < q.length; j++)
        {
          if (i != j)
          {
            if ((q[j].childNodes[1].classList.contains("fa-times")))
            {
              q[j].childNodes[1].classList.remove("fa-times");
              q[j].childNodes[1].classList.add("fa-plus");
              t -= 1;
            }

            let c = q[j].nextElementSibling;
            if (c.style.maxHeight)
            {
              c.style.maxHeight = null;
            }

            if (t == 1)
            {
              break;
            }
          }
        }
      }
    }
    else
    {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    }
    else
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}