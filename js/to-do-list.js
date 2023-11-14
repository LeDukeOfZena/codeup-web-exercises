document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('to-do-form');
    const todoList = document.getElementById('to-do-list');

    // Function to handle the deletion of a to-do item
    function deleteTodoItem(todoItem) {
        todoList.removeChild(todoItem);
    }

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the value of the input field
        const todoInput = document.getElementById('to-do');
        const todoText = todoInput.value;

        if (todoText.trim() !== '') {
            // Create a new list item
            const todoItem = document.createElement('li');
            todoItem.className = 'to-do-item list-group-item d-flex justify-content-between align-items-center';

            // Create a paragraph element for the todo text
            const todoParagraph = document.createElement('p');
            todoParagraph.className = 'm-0';
            todoParagraph.innerText = todoText;

            // Create a button for marking the todo as done
            const doneButton = document.createElement('button');
            doneButton.className = 'btn btn-danger';
            doneButton.innerText = 'Done';

            // Add event listener to the "Done" button for dynamic elements
            doneButton.addEventListener('click', function () {
                deleteTodoItem(todoItem);
            });

            // Append the paragraph and button to the list item
            todoItem.appendChild(todoParagraph);
            todoItem.appendChild(doneButton);

            // Append the list item to the todo list
            todoList.appendChild(todoItem);

            // Clear the input field after adding a todo
            todoInput.value = '';
        }
    });
});