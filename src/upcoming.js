export function renderUpcoming() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.innerHTML = `
        <h1>
            Upcoming
        </h1>
    `
    taskBoard.appendChild(div)
}