// State of the app
const todos = ['Bath', 'Cat food', 'Grocery']

const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const todosList = document.getElementById('todos-list');


//Init the view
for (const todo of todos){
    todosList.append(renderTodoInReadMode(todo));
}


addTodoInput.addEventListener('input', () => {
addTodoButton.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener('keydown', ({key}) => {
    if (key == 'Enter' && addTodoInput.value.length >= 3){
        console.log("Enter presssed");
        addTodo();
    }
});

addTodoButton.addEventListener('click', () => {
    addTodo();
});

//function

// Render in Read Mode
function renderTodoInReadMode(todo){
const li = document.createElement('li');

const span = document.createElement('span');
span.textContent = todo;
span.addEventListener('dblclick', () => {
    const idx = todos.indexOf(todo);
    todosList.replaceChild(
        renderTodoInEditMode(todo),
        todosList.childNodes[idx]
    );
});
li.append(span);
const button = document.createElement('button');
button.textContent = 'Done';
button.addEventListener('click', () => {
    const idx = todos.indexOf(todo);
    removeTodo(idx);
});
li.append(button);
return li;
};

//Render in Edit mode
function renderTodoInEditMode (todo){
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = todo;
    li.append(input);

    const saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
       const idx = todos.indexOf(todo);
       updateTodo(idx, input.value);
    });
    li.append(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
    const idx = todos.indexOf(todo);
    todosList.replaceChild(
        renderTodoInReadMode(todo),
        todosList.childNodes[idx]
    );
    });
    li.append(cancelBtn);

    return li;
};


function addTodo(){
const description = addTodoInput.value;

todos.push(description);
const todo = renderTodoInReadMode(description);
todosList.append(todo);

addTodoInput.value = '';
addTodoButton.disabled = true;
};

function updateTodo(index, description){
todos[index] = description;
const todo = renderTodoInReadMode(description);
todosList.replaceChild(todo, todosList.childNodes[index]);
};

function removeTodo(index){
    todos.splice(index, 1);
    todosList.childNodes[index].remove();
};