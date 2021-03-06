const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    // image.src = `images/${imgNumber+1}.jpg`;
    image.src = `https://picsum.photos/1268/937?random=${imgNumber+1}`
    image.classList.add("bgImage");
    console.log(image.src);
    body.appendChild(image);
    
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();