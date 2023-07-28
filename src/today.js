import { todayTasks, tomorrowTasks, thisWeekTasks, nextWeekTasks, thisMonthTasks, nextMonthTasks } from "./taskStorage"

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
                    <div class="nw-tsk">
                        <i class="fi fi-sr-plus-small"></i>
                        <span>
                            Add Task
                        </span>
                    </div>

                    <ul class="tsk-lst"></ul>
                </div>

                <div class="nw-tsk-frm">
                    <form method="post" class="form-content">
                        <fieldset>
                            <div class="tsk-nm">
                                <input type="text" id="tsk-nm" name="task-name" placeholder="Task name" required>
                                <input type="text" id="tsk-dcn" name="task-description" placeholder="Description">
                            </div>
                        </fieldset>

                        <fieldset>
                            <select id="dt-sctn">
                                <option>Today</option>
                                <option>Tomorrow</option>
                                <option>This Week</option>
                                <option>Next Week</option>
                                <option>This Month</option>
                                <option>Next Month</option>
                            </select>

                            <select id="pty-sctn">
                                <option>Priority 1</option>
                                <option>Priority 2</option>
                                <option>Priority 3</option>
                                <option>Priority 4</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <button type="reset" class="cancel-btn">Cancel</button>
                            <button type="submit" class="add-tsk-btn">Add task</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    `
    taskBoard.appendChild(div)

    const nwTskEl = document.querySelector('.nw-tsk')
    const nwTskFrm = document.querySelector('.nw-tsk-frm')
    const cancelBtn = document.querySelector('.cancel-btn')
    function addNewTask() {
        nwTskFrm.style.display = 'block'
        document.body.classList.add('show-before')
    }
    nwTskEl.addEventListener('click', addNewTask)

    function hideForm() {
        nwTskFrm.style.display = 'none'
        document.body.classList.remove('show-before')
    }
    cancelBtn.addEventListener('click', hideForm)

    const UiEvents = (function() {
        const formContentEl = document.querySelector('.form-content')

        function showTasks(name, des, date, priority) {
            const taskList = document.querySelector('.tsk-lst')

            const task = {
                name: name,
                des: des,
                date: date,
                priority: priority,

                displayTask: function() {
                    const li = document.createElement('li')
                    li.classList.add('tsk')
                    li.innerHTML = `
                        <div class="circle"></div>

                        <div class="tsk-chd">
                            <p class="name">${this.name}</p>
                            <p class="des">${this.des}</p>

                            <div class="dt-pr">
                                <p class="date">${this.date}</p>
                                <p class="priority">${this.priority}</p>
                            </div>
                        </div>

                        <div class="tsk-opts">
                            <i class="fi fi-sr-menu-dots mn-dts"></i>
                        </div>
                    `
                    taskList.appendChild(li)
                }
            }

            return task
        }

        function submitNewTask(event) {
            event.preventDefault()

            const taskName = document.getElementById('tsk-nm')
            const taskDescription = document.getElementById('tsk-dcn')
            const dateSelection = document.getElementById('dt-sctn')
            const prioritySelection = document.getElementById('pty-sctn')
            
            const name = taskName.value
            const des = taskDescription.value
            const date = dateSelection.value
            const priority = prioritySelection.value
            
            const task = showTasks(name, des, date, priority)

            if (task.date === 'Today') {
                todayTasks.push(task)
                task.displayTask()

            } else if (task.date === 'Tomorrow') {
                tomorrowTasks.push(task)

            } else if (task.date === 'This Week') {
                thisWeekTasks.push(task)

            } else if (task.date === 'Next Week') {
                nextWeekTasks.push(task)

            } else if (task.date === 'This Month') {
                thisMonthTasks.push(task)

            } else if (task.date === 'Next Month') {
                nextMonthTasks.push(task)
            }

            nwTskFrm.style.display = 'none'
            document.body.classList.remove('show-before')

            formContentEl.reset()
        }
        formContentEl.addEventListener('submit', submitNewTask)
    }) ()

    const circleEl = document.querySelectorAll('.circle')
    circleEl.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('check')
        })
    })
}
