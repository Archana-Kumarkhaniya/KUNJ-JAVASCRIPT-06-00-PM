let timer = document.querySelector(".time")
let h = document.querySelector(".h")
let m = document.querySelector(".m")
let s = document.querySelector(".s")

setInterval(() => {
    let time = new Date()
    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let milis = time.getMilliseconds()
    //console.log(hours, ":", min, ":", sec);

    if (hours > 12) {
        hours = hours - 12
        document.getElementById("format").innerHTML = "PM"
    }

    if(sec <= 9){
        s.innerHTML = "0" + sec
     }
    if(min <= 9){
        m.innerHTML = "0" + min
     }

    h.innerHTML = hours + ':'
    m.innerHTML = min + ':'
    s.innerHTML = sec

}, 1000);







