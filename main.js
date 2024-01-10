let todos = JSON.parse(localStorage.getItem('todos')) || [];

const list = document.querySelector('#todo-list');
const userInput = document.getElementById('todo-field');
const todoForm = document.querySelector('#todo-form');

todos.forEach((todo) => {
	newTodo(todo);
});

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = userInput.value;

	if (todos.includes(todo)) return;

	newTodo(todo);
	todos.push(todo);

	userInput.value = '';
	updateLocalstorage();
});

function newTodo(todoText) {
	const todo = document.createElement('li');
	todo.textContent = todoText;

	const finishButton = document.createElement('button');
	finishButton.textContent = 'Kész';
	finishButton.style.marginLeft = '1rem';

	finishButton.addEventListener('click', () => {
		removeLocalTodo(todoText);
		todo.remove();
	});

	todo.appendChild(finishButton);
	list.appendChild(todo);
}

function updateLocalstorage() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodo(todoText) {
	todos = todos.filter((todo) => todo !== todoText);
	updateLocalstorage();
}
