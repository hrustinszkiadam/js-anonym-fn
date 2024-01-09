const list = document.querySelector('#todo-list');
const userInput = document.getElementById('todo-field');
const todoForm = document.querySelector('#todo-form');

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const todo = document.createElement('li');
	todo.textContent = userInput.value;

	const finishButton = document.createElement('button');
	finishButton.textContent = 'Kész';
	finishButton.style.marginLeft = '1rem';
	finishButton.addEventListener('click', () => todo.remove());

	todo.appendChild(finishButton);
	list.appendChild(todo);

	userInput.value = '';
});
