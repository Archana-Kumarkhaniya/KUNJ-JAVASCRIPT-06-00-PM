// fetch("https://fakestoreapi.com/products")
// .then((req) => req.json())
// .then((res) => console.log(res)
// )

let product = document.querySelector(".main")
fetchitem("all")

function filter() {
    let category = document.getElementById("selectitem").value
    fetchitem(category)
}

function fetchitem(category) {

    product.innerHTML=""

    fetch("https://fakestoreapi.com/products")
        .then((req) => req.json())
        .then((res) => {
            res.forEach(element => {
                if (category == "all" || element.category == category) {
                    let card = document.createElement("div")
                    card.setAttribute("class", "card w-[270px] border-[2px] border-[grey] h-[400px] flex flex-col")
                    let img = document.createElement("img")
                    img.setAttribute("class", "w-[70%] h-[70%]")
                    img.setAttribute("src", element.image)

                    let up = document.createElement("div")
                    up.setAttribute("class", "h-[300px] w-[100%] flex justify-center items-center")
                    let down = document.createElement("div")
                    down.setAttribute("class", "h-[100px] w-[100%] flex justify-center items-center flex flex-col gap-1")

                    let name = document.createElement("h5")
                    name.setAttribute("class" ,"text-center text-[22px]")
                    name.innerText = element.title.split(" ")[0]

                    let price = document.createElement("p")
                    price.setAttribute("class" , "text-[15px] text-[gray]")
                    price.innerText = "$" + element.price

                    product.appendChild(card)
                    card.appendChild(up)
                    card.appendChild(down)
                    up.appendChild(img)
                    down.appendChild(name)
                    down.appendChild(price)


                }
            });
        })

}
