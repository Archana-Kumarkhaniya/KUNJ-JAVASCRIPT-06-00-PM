let myform = document.getElementById("myform")
myform.addEventListener("submit", function (e) {
    e.preventDefault()

    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let tasklist = document.getElementById("tasklist")
    let progress = document.getElementById("pro")
    let number = document.querySelector("p")

    let tasktext = input.value

    if (tasktext !== "") {
        let li = document.createElement("li")
        li.className = "classlist"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "check"

        let span = document.createElement("span")
        span.textContent = tasktext

        // li.innerHTML = `<button>delete</button>`

        let taskbtn = document.createElement("div")
        taskbtn.setAttribute("class", "taskbtn")
        taskbtn.innerHTML = `<button class="edit"><iconify-icon icon="fluent:edit-20-filled"></iconify-icon></button><button class="delete"><iconify-icon icon="ic:baseline-delete"></iconify-icon> </button> 
            `

        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(taskbtn)

        // let delete = document.querySelector(".delete")
        
        li.querySelector(".delete").addEventListener("click", function () {
            li.remove()
        })

        let edit = document.querySelector(".edit")

        checkbox.addEventListener("change",function(){
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
                span.style.textDecorationColor = "black"
              } else {
                span.style.textDecoration = 'none';
              }
              
            if(checkbox.checked){
                edit.style.display = "none"
            }
            else{
                edit.style.display = "block"
            }
        })

        span.addEventListener('dblclick', function() {
            const newText = prompt('Edit your task:', span.textContent);
            if (newText !== null) {
              span.textContent = newText;
            }
          });
      
        edit.addEventListener("click", function () {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = span.textContent;
            editInput.className = 'edit-input';


        })
        li.textContent = tasktext

        tasklist.appendChild(li)
        input.value = ""
    }


})


