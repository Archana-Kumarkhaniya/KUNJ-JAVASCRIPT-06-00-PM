
let apikey = "5040db36dff44a649e1a055d02dcfd10"

let from = document.getElementById("from")
let to = document.getElementById("to")
let btn = document.querySelector("button")
let output = document.querySelector(".output")

fetch("https://api.currencyfreaks.com/v2.0/currency-symbols")
  .then((req) => req.json())
  .then((res) => {

    let arr = Object.entries(res.currencySymbols)

    arr.forEach(([code, name]) => {

      let option1 = document.createElement("option")
      option1.setAttribute("value", `${code}`)
      option1.innerText = `${code} : ${name}`
      from.appendChild(option1)

      let option2 = document.createElement("option")
      option2.setAttribute("value", `${code}`)
      option2.innerText = `${code} : ${name}`
      to.appendChild(option2)

      if (option1.value === "USD") {
        option1.selected = true
      }
      else if (option2.value === "INR") {
        option2.selected = true
      }
    })
  })

btn.addEventListener("click", function () {

  let amount = document.getElementById("input")

  if (amount == "" || amount < 1) {
    input.value = 1
    amount = "1"
  }
  // console.log(amount);


    fetch("https://api.currencyfreaks.com/latest?apikey=5040db36dff44a649e1a055d02dcfd10")
    .then((r) => r.json())
    .then((d) =>{

      f = from.value
      t = to.value
      a = +amount.value

      //select a rate when user select an option
      let fromvalue = d.rates[f]
      let tovalue = d.rates[t]

    
      amountvalue = a / fromvalue   
      
      finalamount = (amountvalue * tovalue).toFixed(2)
      console.log(finalamount);
      
      output.innerText = `${a}  ${f}  =  ${finalamount} ${t}`
           
    })

  })


  let opt1 = from.value
  let opt2 = to.value
  let icon = document.getElementById("icon")
  icon.addEventListener("click",function(){
    let opt3 = from.value
    from.value = to.value
    to.value = opt3
  })


