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
  addTask(taskInput.value);
  // add the value of the input to the task list
}

function addTask(task) {
  const tasksDiv = document.getElementById('tasks');
  // grab the tasks div
  const taskDiv = document.createElement('div');
  // create a new div for each task
  const taskSpan = document.createElement('span');
  // create a span for each task

  taskSpan.innerText = task;
  // add the text to the task span

  taskDiv.append(taskSpan);
  // add the span to the div
  tasksDiv.append(taskDiv);
  // add the individual task divs to the div container

}