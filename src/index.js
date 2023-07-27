import mainCSS from './main.css'
import todayCss from './today.css'
import upcomingCss from './upcoming.css'
import theme from './theme.css'
import { ui } from './ui'
import { renderToday } from './today'
import { renderUpcoming } from './upcoming'
const todayEl = document.getElementById('today')
const upcomingEl = document.getElementById('upcoming')
const switcherEl = document.querySelector('.switcher')

ui()
renderToday()
todayEl.addEventListener('click', renderToday)
upcomingEl.addEventListener('click', renderUpcoming)