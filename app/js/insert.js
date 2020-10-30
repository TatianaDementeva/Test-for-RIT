export function insert(id, text) {
    let element = document.getElementById(id);
    element.innerText = element.textContent + text;
};