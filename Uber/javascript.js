loadEvents()

function loadEvents(){
     document.getElementById("myBtn").addEventListener('click',addTask);
     document.querySelector("ul").addEventListener("click",deleteTask);
}

function  addTask(){

let input = document.querySelector("input");
console.log("input", input.value);
if(input.value !=''){
    taskAdd(input.value);
}

function taskAdd(task){

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerHTML= task;
ul.appendChild(li);


}

}

function deleteTask(e){
    let parentNode = e.target.parentNode.parentNode;
    let remove = e.target.parentNode;
    parentNode.removeChild(remove);
    console.log(e);
    }