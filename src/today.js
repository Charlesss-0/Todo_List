export function renderToday() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('task-content-wrapper')
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

                    <ul class="tsk-lst">
                        <li class="tsk"><div class="circle"></div>Task 1</i></li>
                        <li class="tsk"><div class="circle"></div>Task 2</i></li>
                        <li class="tsk"><div class="circle"></div>Task 3</i></li>
                    </ul>
                </div>
            </div>
        </div>
    `
    taskBoard.appendChild(div)

    const circleEl = document.querySelectorAll('.circle')
    circleEl.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.add('check')
        })
    })
}
