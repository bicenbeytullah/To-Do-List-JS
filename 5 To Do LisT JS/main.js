let btn = document.getElementById('addToDo');
let container = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');

btn.addEventListener("click", function (){
    let paragraf = document.createElement("p");
    paragraf.classList.add("paragraph-styling");
    paragraf.innerText = input.value;
    container.appendChild(paragraf);
    input.value  = "";
    paragraf.addEventListener("click", function(){
        paragraf.style.textDecoration = "line-through";
    })
    paragraf.addEventListener("dblclick", function(){
        container.removeChild(paragraf);
    } )

})

