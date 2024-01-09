const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', newButton);

function newButton() {
	const btn = document.createElement('button');
	btn.textContent = 'Új Gomb';
	btn.addEventListener('click', newButton);

	body.appendChild(btn);
}
