export function modalWindow(){
    let table = document.querySelector('div.table');

    table.addEventListener('click', function(event){
        let cell = event.target;

        if (!cell.classList.contains('table__cell')) return;

        let modalWindow = document.createElement('div');
        modalWindow.className = 'modal-window';
        modalWindow.innerHTML = cell.textContent;
        document.body.append(modalWindow);

        let coords = cell.getBoundingClientRect();

        let left = coords.left + (cell.offsetWidth - modalWindow.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - modalWindow.offsetHeight - 2;
        if (top < 0) { 
            top = coords.top + cell.offsetHeight + 2;
        }

        modalWindow.style.left = left + 'px';
        modalWindow.style.top = top + 'px';

        modalWindow.onmouseover = function(){ modalWindow.remove()};
    });
}