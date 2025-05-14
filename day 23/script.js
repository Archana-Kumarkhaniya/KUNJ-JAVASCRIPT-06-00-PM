let myfrom = document.getElementById("myform")
myfrom.addEventListener("submit",function(e){

    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let num = document.getElementById("number").value
    let city = document.getElementById("city").value

    console.log(name);

    let data = {
        Name : name,
        Email : email,
        Number : num,
        City : city
    }

    localStorage.setItem("user1",JSON.stringify(data))
    window.open("getdata.html","_blank")


})
