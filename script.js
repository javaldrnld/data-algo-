const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addTask(){
    if(input_box.value === ''){
        alert("Maglagay ka kaya");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span_delete = document.createElement("span")
        span_delete.innerHTML = "\u00d7";
        span_delete.classList.add("delete");
        li.appendChild(span_delete);
        let span_edit = document.createElement("span")
        span_edit.innerHTML = "\uD83D\uDD89";
        span_edit.classList.add("edit");
        li.appendChild(span_edit);
    }
    input_box.value = "";
    store_data();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        store_data();
    }
    else if(e.target.tagName === "SPAN"){
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            store_data();
        }
        else if (e.target.classList.contains("edit")) {
            let text = e.target.parentElement.firstChild.nodeValue;
            let new_text = prompt("Enter new task", text);
            e.target.parentElement.firstChild.nodeValue = new_text;
            store_data();
        }
    }
}, false);

function store_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function display_data(){
    list_container.innerHTML = localStorage.getItem("data");
}


display_data();