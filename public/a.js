import './b.js';

const seconds = Math.round(performance.now() / 1000);

const main = document.querySelector('main');
main.innerHTML = `<p>loaded in ${seconds} ${
	seconds === 1 ? 'second' : 'seconds'
}</p>`;
