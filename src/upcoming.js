export function renderUpcoming() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('task-content-wrapper')
    div.innerHTML = `
        <div class="tsk-sct">
            <div class="date-indicator">
                <h1>
                    Upcoming
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
                        <li class="tsk"><div class="circle"></div>Go for a walk</li>
                        <li class="tsk"><div class="circle"></div>Finish second app project</li>
                        <li class="tsk"><div class="circle"></div>Upload weekly video</li>
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
