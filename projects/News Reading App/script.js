let ham = Query(".ham");
let Navi = Query(".navigation-selectors-wrapper");
ham.addEventListener("click", () => {
  if (!Navi.classList.contains("NaviActive")) {
    Navi.classList.toggle("NaviActive");
  } else {
    Navi.classList.add("NaviActiveDown");
    setTimeout(() => {
      Navi.classList.toggle("NaviActive");
      Navi.classList.remove("NaviActiveDown");
    }, 500);
  }
});

Query("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("S");
  window.location.replace(
    `?q=${Query("#search-input").value}&language=${Query("#lang").value}`
  );
});

let url = new URL(location.href);

let searchParamsQuery = url.searchParams.get("q");
let countryParams = url.searchParams.get("country");
let categoryParams = url.searchParams.get("category");
let langParams = url.searchParams.get("language");
let currentPageParamsIndex = parseInt(url.searchParams.get("p"));

currentPageParamsIndex = currentPageParamsIndex ? currentPageParamsIndex : 1;

try {
  searchParamsQuery = searchParamsQuery.replace(" ", "-");
} catch {}

let TotalPages;
let date = new Date();
let newsLink;
if (currentPageParamsIndex == 1) {
  Query(".previous").style.opacity = 0.5;
}

Query(".PageNumber").innerHTML = currentPageParamsIndex;
if (searchParamsQuery) {
  newsLink = `https://newsapi.org/v2/everything?q=${searchParamsQuery}&apiKey=f8f444fcb36243659b68f63007d6f67f&language=${
    langParams ? langParams : "en"
  }&page=${currentPageParamsIndex ? currentPageParamsIndex : 1}`;
} else {
  newsLink = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f8f444fcb36243659b68f63007d6f67f&language=${
    langParams ? langParams : "en"
  }&page=${currentPageParamsIndex ? currentPageParamsIndex : 1}`;
}

console.log(newsLink);
fetchNewsData(newsLink);

//Changes from Queries
Query("#lang").value = langParams ? langParams : "en";
let goBtn = Query(".go");

goBtn.addEventListener("click", () => {
  if (goBtn.id) {
    location.replace(
      `?language=${goBtn.id}&q=${
        searchParamsQuery ? searchParamsQuery : "Latest"
      }`
    );
  }
});



Query(".next").addEventListener("click", () => {
  let newURL = new URL(location.href);
  console.log(currentPageParamsIndex, TotalPages);

  if (currentPageParamsIndex < TotalPages) {
    currentPageParamsIndex = currentPageParamsIndex + 1;
    newURL.searchParams.set("p", currentPageParamsIndex);
    location.replace(newURL);
  }
});

Query(".previous").addEventListener("click", () => {
  let newURL = new URL(location.href);
  console.log(currentPageParamsIndex, TotalPages);

  if (currentPageParamsIndex > 1) {
    currentPageParamsIndex = currentPageParamsIndex - 1;
    newURL.searchParams.set("p", currentPageParamsIndex);
    location.replace(newURL);
  }
});

function fetchNewsData(newsLink) {
  let req = new XMLHttpRequest();
  req.open("GET", newsLink);
  req.send();
  req.onload = () => {
    if (req.status == 200) {
      let response = JSON.parse(req.response);

      TotalPages =
        Math.ceil(response.totalResults / 20) > 5
          ? 5
          : Math.ceil(response.totalResults / 20);

      if (currentPageParamsIndex == TotalPages && TotalPages) {
        console.log(TotalPages);
        Query(".next").style.opacity = 0.5;
      }
      for (const [key, value] of Object.entries(response.articles)) {
        addNewsDataCard(value);
      }
    } else {
    }
  };
}

function addNewsDataCard(value) {
  let title;
  let urltoImage;
  let content;
  let href;
  for (const [keys, values] of Object.entries(value)) {
    if (keys === "title") {
      title = values;
    } else if (keys == "urlToImage") {
      urltoImage = values;
    } else if (keys == "description") {
      content = values;
    } else if (keys == "url") {
      href = values;
    }
  }
  if (urltoImage) {
    // let mainDiv = document.createElement('div');
    let img = document.createElement("img");
    let desc = document.createElement("desc");
    let titles = document.createElement("span");

    titles.innerHTML = title;
    desc.innerHTML = content;
    img.src = urltoImage;

    let a = document.createElement("a");
    titles.classList.add("spand");
    desc.classList.add("desc");
    img.classList.add("postImage");
    img.setAttribute("lazyload", "true");

    a.classList.add("post");
    a.href = href;

    a.append(titles, img, desc);
    Query(".hello").append(a);
  }
}

function Query(Q) {
  return document.querySelector(Q);
}

const handleLanguageSelectionChange = () => {
  if (Query("#lang").value == langParams) {
    goBtn.style.background = "grey";
  } else {
    goBtn.id = Query("#lang").value;
    goBtn.style.background = "blue";
  }
};
