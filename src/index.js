document.addEventListener("DOMContentLoaded", () => {
  addToList()
});

function addToList() {

  const form = document.getElementById("create-task-form")
  const submit = form.getElementsByTagName("input")[1];

  submit.addEventListener('click', function(){
    const ul = document.getElementById("tasks");
    const li = document.createElement('li');
    const input = form.getElementsByTagName("input")[0]
    
    li.innerHTML = `<p>${input.value}</p><button>Delete Task</button>`;
    ul.appendChild(li);
    input.value = ""

    deleteTask()
  })
}

function deleteTask() {

  const removeTask = document.getElementsByTagName("button");

  removeTask[0].addEventListener('click', function(event) {
    event.preventDefault();
    event.currentTarget.parentNode.remove();
  })
}