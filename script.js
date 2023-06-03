const entry = document.getElementById("entry");
const todoList = document.getElementById("task-list")

function addTask(){
    if (entry.value === ''){
        alert('No task provided');
    }
    else{
        let task = document.createElement("li");
        task.innerHTML = entry.value;
        todoList.appendChild(task);
        let complete = document.createElement("span");
        complete.innerHTML = "DEL";
        task.appendChild(complete);
        saver();
    }
    entry.value = '';
}

todoList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saver();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saver();
    }
})

function saver() {
    localStorage.setItem("tasks",todoList.innerHTML);
}

function loader() {
    todoList.innerHTML = localStorage.getItem("tasks");
}

loader();