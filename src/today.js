import { todayTasks, tomorrowTasks, thisWeekTasks, nextWeekTasks, thisMonthTasks, nextMonthTasks } from "./taskStorage"

// renders all today's tasks information, including event listeners and storing tasks in local storage leading them into their own separate array
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

    function showNewTaskForm() {
        nwTskFrm.style.display = 'block'
        document.body.classList.add('show-before')
    }
    nwTskEl.addEventListener('click', showNewTaskForm)

    function hideForm() {
        nwTskFrm.style.display = 'none'
        document.body.classList.remove('show-before')
    }
    cancelBtn.addEventListener('click', hideForm)

    // stores tasks into the correct array and also displays each task into the screen
    const tasks = (function() {
        const formContentEl = document.querySelector('.form-content')

        function addTaskForToday(name, des, date, priority) {
            const task = {
                name: name,
                des: des,
                date: date,
                priority: priority,
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

            const task = addTaskForToday(name, des, date, priority)

            switch (task.date) {
                case 'Today':
                    todayTasks.push(task)
                    localStorage.setItem('today', JSON.stringify(todayTasks))
                    const today = JSON.parse(localStorage.getItem('today')) || []
                    renderTodayTasks(today)
                    break

                case 'Tomorrow':
                    tomorrowTasks.push(task)
                    break

                case 'This Week':
                    thisWeekTasks.push(task)
                    break

                case 'Next Week':
                    nextWeekTasks.push(task)
                    break

                case 'This Month':
                    thisMonthTasks.push(task)
                    break

                case 'Next Month':
                    nextMonthTasks.push(task)
                    break
            }

            nwTskFrm.style.display = 'none'
            document.body.classList.remove('show-before')

            formContentEl.reset()
        }
        formContentEl.addEventListener('submit', submitNewTask)

        function renderTodayTasks(today) {
            const taskList = document.querySelector('.tsk-lst')
            taskList.innerHTML = ''

            today.forEach((task) => {
                const li = document.createElement('li')

                li.classList.add('tsk')
                li.innerHTML = `
                    <div class="circle"></div>
    
                    <div class="tsk-chd">
                        <p class="name">${task.name}</p>
                        <p class="des">${task.des}</p>
    
                        <div class="dt-pr">
                            <p class="date">${task.date}</p>
                            <p class="priority">${task.priority}</p>
                        </div>
                    </div>

                    <div class="tsk-opts">
                        <i class="fi fi-sr-menu-dots mn-dts"></i>
                    </div>
                `
                taskList.appendChild(li)
            })
        }
        const today = JSON.parse(localStorage.getItem('today')) || []
        renderTodayTasks(today)
        console.log(today)
    
    }) ()

    const taskList = document.querySelector('.tsk-lst')
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('circle')) {
            event.target.classList.toggle('check')
        }
    })
}
