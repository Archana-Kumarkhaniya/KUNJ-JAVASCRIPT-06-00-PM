let count = document.querySelectorAll(".box")
let speed = 200
// let c = 0
//let currentspeed = target / speed


count.forEach((i) => {
    let target = +i.dataset.target
    // console.log(target);
    let currentTarget = target / speed
    let c = 0
         
    setInterval(() => {
        if(c <= target){
            i.innerText = c
            c =  c + currentTarget
        }   
    }, 100);
    
});
