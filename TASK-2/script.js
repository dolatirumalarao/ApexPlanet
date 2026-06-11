// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message){
        alert("Form submitted successfully!");
        this.reset();
    }
});

// Todo List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();

    if(task === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });
});