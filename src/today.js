import todayCSS from './today.css'

export function renderToday() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('today-content-wrapper')
    div.innerHTML = `
        <div class="tsk-sct">
            <div class="date-indicator">
                <h1>
                    Today
                </h1>
                <hr class="divider">
            </div>

            <div class="tsk-cnt">
                <div class="add-task">
                    <div>
                        <i class="fi fi-sr-plus-small"></i>
                        <span>
                            Add Task
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
    taskBoard.appendChild(div)
}