
var add = document.getElementById("add");
var list = document.getElementById("list");
var text = document.getElementById("todoText");



add.addEventListener("click", todo);

function todo() {


    var p = document.createElement("p");

    p.innerText = text.value;

    p.classList.add("list-item");


    if (text.value != "") {


        list.appendChild(p);
    }


    text.value = "";


    p.addEventListener("click", function () {

        this.style.textDecoration = "line-through";


    })


    p.addEventListener("dblclick", function () {

        list.removeChild(this);
    })

}


text.addEventListener("keyup", function(e){

    if(e.keyCode == 13){

        todo();
    }
})
