import mainCSS from './main.css'
import todayCss from './today.css'
import upcomingCss from './upcoming.css'
import projectsCss from './projects.css'
import signUpForm from './signUpForm.css'
import images from './images/user.png'
import { renderToday } from './today'
import { renderUpcoming } from './upcoming'
import { ui } from './ui'
import { renderProjects } from './projects'
import { renderSignUpForm } from './signUpForm'
const todayEl = document.getElementById('today')
const upcomingEl = document.getElementById('upcoming')
const projectsWrapperEl = document.querySelector('.projects-wrapper')

const savedUserData = localStorage.getItem('userData')
const shouldRenderSignUpForm = !savedUserData

ui()

if (shouldRenderSignUpForm) {
    renderSignUpForm()

} else {
    renderToday()
}

todayEl.addEventListener('click', renderToday)
upcomingEl.addEventListener('click', renderUpcoming)
projectsWrapperEl.addEventListener('click', renderProjects)