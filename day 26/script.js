function weather() {

    let data = document.querySelector("input").value
    let key = "30ab8c4816ce43a4a80132836252004"
    fetch(`http://api.weatherapi.com/v1/current.json?key=30ab8c4816ce43a4a80132836252004&q=${data}&aqi=no`)
        .then((e) => e.json())
        .then((d) => {
            console.log(d);
            let date = new Date()
            let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            let dayname = day[date.getDay()]
            let printday = document.getElementById("h1").innerText = dayname
            let month = ["January", "February", "March", "April", "june", "July", "August", "September", "Octomber", "November", "December"]
            let monthname = month[date.getMonth()]
            let year = date.getFullYear()
            let printmonth = document.getElementById("h2").innerText = monthname + " , " + year
            // let w = console.log(d.current.condition.text)
            // let p1 = document.getElementById("p1").innerText = w
            let city = d.location.name
            let h6 = document.querySelector("h6").innerText = city
        })
}


