const list = document.querySelector('#todo-list');

const todoForm = document.querySelector('#todo-form');
const userInput = document.getElementById('todo-field');
todoForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const todo = newTodo(userInput.value);
	userInput.value = '';

	list.appendChild(todo);
});

function newTodo(input) {
	const todo = document.createElement('li');
	todo.textContent = input;

	const finishButton = document.createElement('button');
	finishButton.textContent = 'Kész';
	finishButton.style.marginLeft = '1rem';
	finishButton.addEventListener('click', () => todo.remove());

	todo.appendChild(finishButton);
	return todo;
}
