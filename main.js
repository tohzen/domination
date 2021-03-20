
function firstLine() {
    const lineThru = document.querySelector("ul li");
    lineThru.style.textDecoration = "line-through"
}

firstLine()





function URLpost(id,url) {
    document.getElementById(id).src = url;
    
}

URLpost("image-1","https://qph.fs.quoracdn.net/main-qimg-722ecfc93dbf9003c2c9833ee84563f2" )

URLpost("image-2","https://toppng.com/uploads/preview/hoto-funny-anime-face-meme-11563049543nbzmsxqkh7.png" )

URLpost("image-3","https://i.pinimg.com/736x/3f/b4/f9/3fb4f90faa1d6e2d6470585a83494bb8.jpg" )



function takeAway() {
    const kiddo = document.getElementById("arguments");
    kiddo.removeChild(kiddo.lastElementChild);
}

takeAway()
takeAway()

function theChange(font, id) {
    const dogTag = document.getElementById(id);
    dogTag.style.fontSize = font;
}

theChange("xx-small","heading")


function appMe(id) {
    const args = document.getElementById("arguments");
    args.appendChild(id);
}

const newPic = document.createElement("img");
newPic.src = "si.jpg";

appMe(newPic)




function pixel(img) {
    img = document.getElementById(img);
    img.style.height = "30px"
    
}

pixel("image-1")


function beGone(input) {
    document.getElementById(input).className = "invisible";

}

beGone("image-2")

function newLI(text) {
    const yoyo = document.createElement("li");
    yoyo.innerText = text;

    return yoyo
}

newLI("darnIT")

function reSizer(size, text) {
    const word = document.createElement(size);
    word.innerText = text;
    appMe(word)

}

reSizer("h2","hello")

