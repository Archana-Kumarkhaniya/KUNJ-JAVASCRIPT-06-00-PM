// let main = document.querySelector(".slider")

// function left(){
//     let img = document.querySelectorAll("img")
//     img.forEach(element => {
//         element.setAttribute("class","left")
//         console.log(element);     
//     });    
// }

// function right(){
//     let img = document.querySelectorAll("img")
//     img.forEach(element => {
//         element.setAttribute("class","right")
//         console.log(element);
        
//     });    

// }

let images = document.querySelectorAll(".slider img");
let current = 0;

images.forEach((img, index) => {
    if(index !== 0) img.style.display = "none";
});

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

function left() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

function right() {
    current = (current + 1) % images.length;
    showImage(current);
}
