export function renderProjects() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('projects-content-wrapper')
    div.innerHTML = `
        <div class="projects-content">
            <h1>
                Coming soon!
            </h1>
        </div>
    `
    taskBoard.appendChild(div)
}