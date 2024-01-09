const body = document.querySelector('body');
const newBtn = document.querySelector('#new-btn');

newBtn.addEventListener('click', counterButton);

function counterButton() {
	const btn = document.createElement('button');
	btn.textContent = 'Számláló';
	btn.addEventListener('click', (e) => {
		let clicks = parseInt(e.target.textContent) || 0;
		e.target.textContent = ++clicks;
	});

	body.appendChild(btn);
}
