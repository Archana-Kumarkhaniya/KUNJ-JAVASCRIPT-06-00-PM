        function movie() {
            let data =  document.getElementById("data").value
            let container = document.querySelector(".container")
            let moviekey = "f9cb9e36"
            fetch(`http://www.omdbapi.com/?s=${data}&apikey=${moviekey}&`)
            // fetch("http://www.omdbapi.com/?i=tt1285016&apikey=f9cb9e36")
            .then((d)=>d.json())
            .then((e)=>{
                container.innerHTML = " "
                e.Search.forEach(element => {
                    let card = document.createElement("div")
                    card.setAttribute("class","card")
                    let image = document.createElement("img")
                    image.setAttribute("src",element.Poster)
                    let Mname = document.createElement("div")
                    Mname.setAttribute("class","Mname")
                    let name = document.createElement("h2")
                    name.innerText = element.Title
                    let year = document.createElement("h5")
                    year.textContent = element.Year
                    card.appendChild(image)
                    card.appendChild(Mname)
                    Mname.appendChild(name)
                    Mname.appendChild(year)
                    container.appendChild(card)
                });
            })

         }
