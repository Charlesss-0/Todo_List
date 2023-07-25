import mainCSS from './main.css'
import { ui } from './ui'
import { renderToday } from './today'
import { renderUpcoming } from './upcoming'
const todayEl = document.getElementById('today')
const upcomingEl = document.getElementById('upcoming')

ui()
renderToday()
todayEl.addEventListener('click', renderToday)
upcomingEl.addEventListener('click', renderUpcoming)