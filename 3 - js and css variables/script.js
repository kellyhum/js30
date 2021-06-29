/**
 * script.js
 * used for css and js project
 */

//Functions
const inputs = document.querySelectorAll('#commands input');

function update() {
    const element = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + element);
}

inputs.forEach(inputs => inputs.addEventListener('change', update));
inputs.forEach(inputs => inputs.addEventListener('mousemove', update));