export const ui = () => {
    const burgerMenuEl = document.querySelector('.burger-menu')
    const asideContent = document.querySelector('.aside-content')
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

    function showAside() {
        asideContent.classList.toggle('show-aside')
    }
    burgerMenuEl.addEventListener('click', showAside)
}
