import mainCSS from './main.css'
import UI from './ui'
import { renderToday } from './today'
import { renderUpcoming } from './upcoming'
const todayEl = document.getElementById('today')
const upcomingEl = document.getElementById('upcoming')

renderToday()
todayEl.addEventListener('click', renderToday)
upcomingEl.addEventListener('click', renderUpcoming)