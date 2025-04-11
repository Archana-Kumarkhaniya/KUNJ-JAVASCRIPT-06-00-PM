let c = document.querySelector(".b1")
c = 0

let target = 20000
// let target = document.querySelectorAll()
// console.log(target);

let box = document.querySelectorAll(".box1")
//console.log(box);

box.forEach((i) => {
    setInterval(() => {
        if(c <= target){
            
           i.innerHTML = c
            c = c + 200
            // while(c == target){
            //     i.innerHTML = c
            //     c = c+200
            // }
        }
    }, 200);

    console.log(i)
    
});

