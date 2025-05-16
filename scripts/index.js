// import openTab from "../scripts/about.js"

const slideShow = document.getElementById("slideshow");

let currentIndex = 0;
let slideCount;

function swapImage(direction){
    let slides = slideShow.getElementsByClassName("image");
    currentIndex += direction;

    slideCount = slides.length;
    
    currentIndex < 0 ? currentIndex = slideCount + currentIndex : currentIndex
    currentIndex %= slideCount;
    for (let i = 0; i < slideCount; i++){
        slides[i].className = "image";
    }
    slides[currentIndex].className += " active";
    
    let title = slides[currentIndex].getAttribute("title");
    let text = slideShow.getElementsByTagName("p")[0];
    text.textContent = title;
    
}

const sidenav = document.getElementsByClassName("sidenav")[0];


function showSidenav(){
    const style = sidenav.style;
    if (style.visibility == "visible"){
        style.visibility = "hidden";
    }
    else{
        style.visibility = "visible";
    }
}


const htmlFileName = window.location.pathname.split('/').pop()

if (htmlFileName == "" || htmlFileName == "index.html"){
    let timer = setInterval(function(){
        swapImage(+1);
    }, 2000);
}


