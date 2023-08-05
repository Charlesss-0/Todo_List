import { todayTsk, tomorrow, thisWeek, nextWeek, thisMonth, nextMonth } from "./today"

export function renderUpcoming() {
    const taskBoard = document.getElementById('task-board')
    taskBoard.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('upcoming-content-wrapper')
    div.innerHTML = `
        <div>
            <h1>
                Today
            </h1>

            <div class="ty-tsk">
                <ul id="today-task"></ul>
            </div>
        </div>

        <div>
            <h1>
                Tomorrow
            </h1>

            <div class="tm-tsk">
                <ul id="tomorrow-task"></ul>
            </div>
        </div>

        <div>
            <h1>
                This Week
            </h1>

            <div class="tk-tsk">
                <ul id="this-week-task"></ul>
            </div>
        </div>

        <div>
            <h1>
                Next Week
            </h1>

            <div class="nk-tsk">
                <ul id="next-week-task"></ul>
            </div>
        </div>

        <div>
            <h1>
                This Month
            </h1>

            <div class="th-tsk">
                <ul id="this-month-task"></ul>
            </div>
        </div>

        <div>
            <h1>
                Next Month
            </h1>

            <div class="nh-tsk">
                <ul id="next-month-task"></ul>
            </div>
        </div>
    `
    taskBoard.appendChild(div)

    function renderTasks(destination, tsk) {
        const taskList = document.getElementById(destination)
        taskList.innerHTML = ''
    
        tsk.forEach((task) => {
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
    renderTasks('today-task', todayTsk)
    renderTasks('tomorrow-task', tomorrow)
    renderTasks('this-week-task', thisWeek)
    renderTasks('next-week-task', nextWeek)
    renderTasks('this-month-task', thisMonth)
    renderTasks('next-month-task', nextMonth)

    function checkCircle(element) {
        const taskList = document.getElementById(element)
        taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('circle')) {
                event.target.classList.toggle('check')
            }
        })
    }
    checkCircle('today-task')
    checkCircle('tomorrow-task')
    checkCircle('this-week-task')
    checkCircle('next-week-task')
    checkCircle('this-month-task')
    checkCircle('next-month-task')
}
