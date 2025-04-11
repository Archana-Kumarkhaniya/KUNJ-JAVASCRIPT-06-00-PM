function submit() {
    let minutes = document.getElementById("i2").value - 1
    let sec = 60
    let print = document.querySelector(".print")

    console.log(minutes);

    if (minutes > 0) 
    {
        setInterval(() => {
            if (sec > 0) {
                sec--
                if (sec != 0) {
                    print.innerText = minutes + " : " + sec
                }
            }
            else if(minutes > 0){
                minutes--
                sec = 59
                print.innerText = minutes + " : " + sec
            }
        }, 1000);  
    }
    else{
        print.style.fontSize = "30px"
        print.style.color = "red"
        print.innerText = "Please Enter a Positive Number";     
    }
}
function stop(){

    
}





