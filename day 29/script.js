// let storageType 
// = "local"
function addtask() {
  let input = document.getElementById("input").value
  let mainbox = document.querySelector(".mainbox")

  //let storageType = 'local'; // default


  if (input !== "") {

    let storageType = document.querySelector("#storagetype").value
    let box = document.createElement("div")
    box.setAttribute("class", "box")

    let part1 = document.createElement("div")
    part1.setAttribute("class", "part1")

    let part2 = document.createElement("div")
    part2.setAttribute("class", "part2")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const randomKey = "task_" + Math.random().toString(36).substring(2, 5);

    if (storageType == "local") {
      localStorage.setItem(randomKey, input);
    }
    else if (storageType == "session") {
      sessionStorage.setItem(randomKey, input);
    }
    else {
      Cookies.set(randomKey, input)
    } 


    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "✏️";


    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";

    let h1 = document.createElement("h1")
    h1.textContent = input

    part1.appendChild(checkbox)
    part1.appendChild(h1)
    part2.appendChild(editBtn)
    part2.appendChild(deleteBtn)
    box.appendChild(part1)
    box.appendChild(part2)
    mainbox.appendChild(box)

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        h1.style.textDecoration = 'line-through';
        h1.style.textDecorationColor = "red"
        deleteBtn.style.display = "none"
        editBtn.style.display = "none"
      } else {
        h1.style.textDecoration = 'none';
        deleteBtn.style.display = "block"
        editBtn.style.display = "block"
      }

    })

    editBtn.addEventListener("click", () => {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = h1.textContent;
      editInput.style.fontSize = "16px";
      editInput.style.width = "70%";
      editInput.style.border = "1px solid gray";
      editInput.style.borderRadius = "4px";
      editInput.style.padding = "2px 5px";

      // Replace h1 with input
      part1.replaceChild(editInput, h1);

      // Change edit button to Save ✅
      editBtn.textContent = "💾";

      //On Save click
      editBtn.onclick = () => {
        let newText = editInput.value.trim();
        if (newText !== "") {
          h1.textContent = newText;
          part1.replaceChild(h1, editInput);
          editBtn.textContent = "✏️";

          if (storageType == "local") {
            localStorage.setItem(randomKey, newText);
          }
          else if (storageType == "session") {
            sessionStorage.setItem(randomKey, newText);
          }
          else {
            Cookies.set(randomKey,newText)
          }

          // Rebind edit button (recursive call)
          // editBtn.onclick = arguments.callee;
        }
      };
    });

    // h1.addEventListener('dblclick', function () {
    //   const newText = prompt('Edit your task:', h1.textContent);
    //   if (newText !== null) {
    //     h1.textContent = newText;
    //   }
    // });


    deleteBtn.addEventListener("click", function () {

      box.remove()
      if (storageType == "local") {
        localStorage.removeItem(randomKey)
      }
      else if (storageType == "session") {
        sessionStorage.removeItem(randomKey)

      }
      else {
        Cookies.remove(randomKey)
      }
    })

  }
  else {
    alert("Please enter a task...")
  }
}


//accordion

// let accordion = document.getElementById("accordion")
// accordion.querySelector(".header").addEventListener("click", function () {
//   accordion.classList.toggle("active")
//   document.getElementById('l1').checked = true;
//   addtask()

//   let storageRadios = document.querySelectorAll('input[name="storage"]');

//   storageRadios.forEach(radio =>{
//     radio.addEventListener("change",()=>{
//       storageType = radio.value
//       if(storageType === "local"){
//         savetolo
//       }
//       else if(storageType === "session"){
//         session()
//       }
//     })
//   })

// })



