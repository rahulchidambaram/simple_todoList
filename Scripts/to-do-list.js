const todolist = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todolist.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const html = `<div>${name} </div>
        <div>${dueDate}</div>
        <button onclick="
        todolist.splice(${index}, 1);
        renderTodoList();
        " class="delete">Delete</button>`;
        todoListHTML += html;
    })

    // for (let i=0; i<todolist.length; i++) {
    //     const todoObject = todolist[i];
    //     // const name = todoObject.name;
    //     // const dueDate = todoObject.dueDate;

    //     const { name, dueDate } = todoObject;

    //     const html = `<div>${name} </div>
    //     <div>${dueDate}</div>
    //     <button onclick="
    //     todolist.splice(${i}, 1);
    //     renderTodoList();
    //     " class="delete">Delete</button>`;
    //     todoListHTML += html;
    // }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    if(name.trim() !== "") {
        
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todolist.push({
        name,
        dueDate
    });

    //reset the text in the textbox
    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();

    }
    else {
        alert('Input field must not be empty');
    }   
}

