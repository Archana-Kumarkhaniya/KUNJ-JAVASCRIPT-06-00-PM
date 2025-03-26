const username = "rnw"
let oldpass = "admin"

let myform = document.getElementById("myform");
myform.addEventListener("submit" ,function(e){
    
    e.preventDefault

    let name = document.getElementById("user").value
    //console.log(name)
    let newpass = document.getElementById("pw").value
   // console.log(newpass)
    if(name == username && newpass == oldpass ){
        alert("Success !")
    }
    else{
        alert("Invalid !")
    }
})

let form2 = document.getElementById("form2")
form2.addEventListener("submit",function(f){
    f.preventDefault

    let pw2 = document.getElementById("pw2").value;

    console.log(pw2);
    
    // if(oldpass = pw2  ){
    //     window.location.href = "index3.html"
    // }
    // else{
    //     alert("Incorrect password!")
    // }
})



