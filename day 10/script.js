let count = 0

let counter = document.getElementById("counter").innerHTML=count

function minus(){

    if(count <= 0){
        alert("Can't do that....")
    }
    else{
    count--
    console.log(count);

    document.querySelector("#counter").innerHTML=count  
    }
}
function plus(){
    count++
    console.log(count); 
    
    document.querySelector("#counter").innerHTML=count
}

function reset(){

    count = 0
    document.querySelector("#counter").innerHTML=count

}



