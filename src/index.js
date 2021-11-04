let editMode = false;

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  // grab form
  console.log(taskForm);
  taskForm.addEventListener("submit", handleSubmit)
  // add event listener for submit and handling submit
});

function handleSubmit(event) {
  event.preventDefault();
  // prevent the default so the page won't reload
  console.log(event);
  const taskInput = document.getElementById('new-task-description');
  // grab input field

  if (!!editMode) {
    editMode.children[0].innerText = taskInput.value
    // edit the children of the individual task and the first child is the text
    document.getElementById('submit-task').value = "Create New Task";
    // resetting the submit button to say Create New Task again
    editMode = false;
    // ending edit mode
  } else {
    addTask(taskInput.value);
  // add the value of the input to the task list
  }
  taskInput.value = "";
  // resetting the input field text
}

function addTask(task) {
  const tasksDiv = document.getElementById('tasks');
  // grab the tasks div
  const taskDiv = document.createElement('div');
  // create a new div for each task
  const taskSpan = document.createElement('span');
  // create a span for each task
  const deleteIcon = document.createElement('span');
  // create 'x' element for deletion 
  const editButton = document.createElement('button');
  // create edit button

  deleteIcon.innerHTML = "&#10006;";
  // making delete icon look like an x
  taskSpan.innerText = task;
  // add the text to the task span
  editButton.innerText = "Edit";

  deleteIcon.addEventListener("click", (event) => {
    event.target.parentElement.remove();
    //grabbing the parent element of the delete icon (taskDiv) and deleting it
  })

  editButton.addEventListener("click", handleEdit);

  taskDiv.append(taskSpan, deleteIcon, editButton);
  // add the task span, delete icon, and edit button to the individual task div
  tasksDiv.append(taskDiv);
  // add the individual task divs to the div container

}

function handleEdit(event) {
  const taskDiv = event.target.parentElement;
  // grabbing the parent to the individual task div
  let task = taskDiv.children[0].innerText;
  // grab the individual task div
  const submitButton = document.getElementById('submit-task');
  // grab submit button
  const input = document.getElementById('new-task-description');
  // get the text input
  input.value = task;
  // change the value of the text input to the comment we are editing
  submitButton.value = "Edit";
  // change the submit button to say Edit
  editMode = taskDiv;
  // edit the individual task div
}