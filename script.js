const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addTask(){
    // This function adds a task to the list
    if(input_box.value === ''){
        alert("Maglagay ka kaya");
    }
    else{
        // Create a new list item
        let li = document.createElement("li")
        // Set the text of the list item to the text in the input box
        li.innerHTML = input_box.value;
        // Append the list item to the list container
        list_container.appendChild(li);
        // Create a new span element
        let span_delete = document.createElement("span")
        // Set the span element to delete character
        span_delete.innerHTML = "\u00d7";
        // Add the "delete" class to the span element
        span_delete.classList.add("delete");
        // Append the span element to the list item. 
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
    // If the element is a span
    else if(e.target.tagName === "SPAN"){
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            store_data();
        }
        // If the element is a span and it has the "edit" class
        else if (e.target.classList.contains("edit")) {
            // if it click the pencil, then first is the <li> element, then the firstchild which is the task itself, then the nodevalue is the text
            let text = e.target.parentElement.firstChild.nodeValue;
            // Add a new task
            let new_text = prompt("Enter new task", text);
            e.target.parentElement.firstChild.nodeValue = new_text;
            store_data();
        }
    }
}, false); // False means the event will only handled by list_container

function store_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function display_data(){
    list_container.innerHTML = localStorage.getItem("data");
}


display_data();