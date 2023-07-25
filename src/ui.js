const todayEl = document.getElementById('today')
const upcomingEl = document.getElementById('upcoming')

function toggleTodayClass() {
    todayEl.classList.add('hover')
    upcomingEl.classList.remove('hover')
} toggleTodayClass()
todayEl.addEventListener('click', toggleTodayClass)

upcomingEl.addEventListener('click', () => {
    upcomingEl.classList.add('hover')
    todayEl.classList.remove('hover')
})