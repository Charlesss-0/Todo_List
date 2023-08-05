import { todayTasks, tomorrowTasks, thisWeekTasks, nextWeekTasks, thisMonthTasks, nextMonthTasks } from "./taskStorage"

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

    function showTasks(destination, name, des, date, priority) {
        const upcomingTask = document.getElementById(destination)

        return {
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
                upcomingTask.appendChild(li)
            }
        }
    }

    function sortTasks() {
        if (todayTasks[0].date === 'Today') {
            const name = todayTasks[0].name
            const des = todayTasks[0].des
            const date = todayTasks[0].date
            const priority = todayTasks[0].priority
            
            const todayTask = showTasks(name, des, date, priority)
            todayTask.displayTask()

        } else if (tomorrowTasks[0].date === 'Tomorrow') {
            const name = tomorrowTasks[0].name
            const des = tomorrowTasks[0].des
            const date = tomorrowTasks[0].date
            const priority = tomorrowTasks[0].date

            const tomorrowTask = showTasks(name, des, date, priority)
            tomorrowTask.displayTask()
            console.log(tomorrowTask)
        }
    }

    const name = tomorrowTasks[0].name
    const des = tomorrowTasks[0].des
    const date = tomorrowTasks[0].date
    const priority = tomorrowTasks[0].priority

    const bundleArray = { name, des, date, priority }

    // let tomorrowTask = showTasks('tomorrow-task', name, des, date, priority)
    // tomorrowTask.displayTask()
}
