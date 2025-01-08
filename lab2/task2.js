
const variant = 2;
const table = document.getElementById('table');
const colorPicker = document.getElementById('colorPicker');

let number = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = number;
        cell.dataset.row = i;
        cell.dataset.col = j;

        if (number === variant) {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener('click', () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', () => {
                const col = cell.dataset.col;
                for (let row of table.rows) {
                    row.cells[col].style.backgroundColor = getRandomColor();
                }
            });
        }

        row.appendChild(cell);
        number++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
