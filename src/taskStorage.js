export const todayTasks = []
export const tomorrowTasks = []
export const thisWeekTasks = []
export const nextWeekTasks = []
export const thisMonthTasks = []
export const nextMonthTasks = []

// localStorage.setItem('todayTasks', JSON.stringify(todayTasks))
// localStorage.setItem('tomorrowTasks', JSON.stringify(tomorrowTasks))
// localStorage.setItem('thisWeekTasks', JSON.stringify(thisWeekTasks))
// localStorage.setItem('nextWeekTasks', JSON.stringify(nextWeekTasks))
// localStorage.setItem('thisMonthTasks', JSON.stringify(thisMonthTasks))
// localStorage.setItem('nextMonthTasks', JSON.stringify(nextMonthTasks))

// const todayTasksFromLocalStorage = JSON.parse(localStorage.getItem('todayTasks')) || []
// const tomorrowTasksFromLocalStorage = JSON.parse(localStorage.getItem('tomorrowTasks')) || []
// const thisWeekTasksFromLocalStorage = JSON.parse(localStorage.getItem('thisWeekTasks')) || []
// const nextWeekTasksFromLocalStorage = JSON.parse(localStorage.getItem('nextWeekTasks')) || []
// const thisMonthTasksFromLocalStorage = JSON.parse(localStorage.getItem('thisMonthTasks')) || []
// const nextMonthTasksFromLocalStorage = JSON.parse(localStorage.getItem('nextMonthTasks')) || []

// function renderTasksFromLocalStorage() {
//     todayTasks.forEach((task) => {
//         const taskList = document.querySelector('.tsk-lst')
//         const li = document.createElement('li')

//         li.classList.add('tsk')
//         li.innerHTML = ''
//         li.innerHTML = `
//             <div class="circle"></div>

//             <div class="tsk-chd">
//                 <p class="name">${task.name}</p>
//                 <p class="des">${task.des}</p>

//                 <div class="dt-pr">
//                     <p class="date">${task.date}</p>
//                     <p class="priority">${task.priority}</p>
//                 </div>
//             </div>

//             <i class="fi fi-sr-menu-dots mn-dts"></i>
//         `
//         taskList.appendChild(li)
//     })
// }
