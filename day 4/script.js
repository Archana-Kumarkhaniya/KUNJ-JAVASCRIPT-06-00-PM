let main = document.querySelector(".maindiv")
    let a =["/assests/productbase29.jpg","/assests/productbase21.jpg","/assests/productbase25.jpg",
    "/assests/Productbase17.jpg"]

for (let i = 0; i < 4; i++) 
        {
        let box = document.createElement("div")
        box.setAttribute("class", "box border border-[2px] border-black h-[565px] w-[348px]")
        let subbox = document.createElement("div")
        subbox.setAttribute("class", "subbox border-[2px] border-[red] h-[466px] w-[100%] overflow-hidden relative flex flex-column items-center justify-center group")
        let img = document.createElement("img")
        img.setAttribute("src", a[i])
        img.setAttribute("class","h-full w-full object-cover hover:scale-[1.1] duration-[0.5s]")
        let cart = document.createElement("div")
        cart.setAttribute("class","cart h-[40px] w-[307px] absolute bottom-0 bg-[#663130] flex items-center justify-center tracking-[2.5px] text-[14px] font-semibold group-hover:black")
        let qc = document.createElement("h2")
        qc.innerText ="QUICK CART"
        qc.setAttribute("class","text-white")
        cart.appendChild(qc)
        subbox.appendChild(cart)
        box.appendChild(subbox)
        main.appendChild(box)
        subbox.appendChild(img)
}
