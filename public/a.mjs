import './b.mjs';

const ms = Math.floor(performance.now());

const main = document.querySelector('main');
main.innerHTML = `<p>loaded in ${ms}ms</p>`;
