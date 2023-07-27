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
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                Tomorrow
            </h1>

            <div class="tm-tsk">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                This Week
            </h1>

            <div class="tk-tsk">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                Next Week
            </h1>

            <div class="nk-tsk">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                This Month
            </h1>

            <div class="th-tsk">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>
                Next Month
            </h1>

            <div class="nh-tsk">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>
    `
    taskBoard.appendChild(div)
}
