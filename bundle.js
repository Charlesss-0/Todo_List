/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _today_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today.css */ \"./src/today.css\");\n/* harmony import */ var _upcoming_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming.css */ \"./src/upcoming.css\");\n/* harmony import */ var _projects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.css */ \"./src/projects.css\");\n/* harmony import */ var _signUpForm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signUpForm.css */ \"./src/signUpForm.css\");\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/user.png */ \"./src/images/user.png\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcoming */ \"./src/upcoming.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _signUpForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signUpForm */ \"./src/signUpForm.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar todayEl = document.getElementById('today');\nvar upcomingEl = document.getElementById('upcoming');\nvar projectsWrapperEl = document.querySelector('.projects-wrapper');\nvar savedUserData = localStorage.getItem('userData');\nvar shouldRenderSignUpForm = !savedUserData;\n(0,_ui__WEBPACK_IMPORTED_MODULE_8__.ui)();\nif (shouldRenderSignUpForm) {\n  (0,_signUpForm__WEBPACK_IMPORTED_MODULE_10__.renderSignUpForm)();\n} else (0,_today__WEBPACK_IMPORTED_MODULE_6__.renderToday)();\ntodayEl.addEventListener('click', _today__WEBPACK_IMPORTED_MODULE_6__.renderToday);\nupcomingEl.addEventListener('click', _upcoming__WEBPACK_IMPORTED_MODULE_7__.renderUpcoming);\nprojectsWrapperEl.addEventListener('click', _projects__WEBPACK_IMPORTED_MODULE_9__.renderProjects);\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\nfunction renderProjects() {\n  var taskBoard = document.getElementById('task-board');\n  taskBoard.innerHTML = '';\n  var div = document.createElement('div');\n  div.classList.add('projects-content-wrapper');\n  div.innerHTML = \"\\n        <div class=\\\"projects-content\\\">\\n            <h1>\\n                Coming soon!\\n            </h1>\\n        </div>\\n    \";\n  taskBoard.appendChild(div);\n}\n\n//# sourceURL=webpack://todo_list/./src/projects.js?");

/***/ }),

/***/ "./src/signUpForm.js":
/*!***************************!*\
  !*** ./src/signUpForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSignUpForm: () => (/* binding */ renderSignUpForm)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n\nfunction renderSignUpForm() {\n  var body = document.querySelector('body');\n  body.innerHTML = \"\\n        <div class=\\\"form-content-wrapper\\\">\\n            <div class=\\\"cntnr\\\">\\n                <div class=\\\"app-name-wrapper\\\">\\n                    <h2>\\n                        GetDo App\\n                    </h2>\\n                </div>\\n\\n                <div class=\\\"new-account-section\\\">\\n                    <h1>\\n                        Create new account\\n                    </h1>\\n                </div>\\n\\n                <form class=\\\"sign-up-form\\\">\\n                    <fieldset>\\n                        <div>\\n                            <label for=\\\"first-name\\\">\\n                                First Name\\n                            </label>\\n                            <input type=\\\"text\\\" id=\\\"first-name\\\" name\\\"user-first-name\\\" required>\\n                        </div>\\n\\n                        <div>\\n                            <label for=\\\"last-name\\\">\\n                                Last Name\\n                            </label>\\n                            <input type=\\\"text\\\" id=\\\"last-name\\\" name=\\\"user-last-name\\\" required>\\n                        </div>\\n                    </fieldset>\\n\\n                    <fieldset>\\n                        <div>\\n                            <label for=\\\"email\\\">\\n                                Email\\n                            </label>\\n                            <input type=\\\"email\\\" id=\\\"email\\\" name=\\\"user-email\\\" required>\\n                        </div>\\n                    </fieldset>\\n\\n                    <fieldset>\\n                        <div class=\\\"password-fieldset-container\\\">\\n                            <div class=\\\"password-container\\\">\\n                                <label for=\\\"password\\\">\\n                                    Password\\n                                </label>\\n                                <input type=\\\"password\\\" id=\\\"password\\\" name=\\\"user-password\\\" required>\\n                            </div>\\n                            <i class=\\\"fi fi-rr-eye\\\" id=\\\"show-password-btn\\\"></i>\\n                        </div>\\n                    </fieldset>\\n\\n                    <fieldset>\\n                        <div>\\n                            <button type=\\\"button\\\">\\n                                Sign Up With Google\\n                            </button>\\n                        </div>\\n\\n                        <div>\\n                            <button type=\\\"submit\\\">\\n                                Sign Up\\n                            </button>                    \\n                        </div>\\n                    </fieldset>\\n\\n                    <fieldset>\\n                        <p class=\\\"login\\\">\\n                            Already have an account? <a href=\\\"#\\\">Log In</a>\\n                        </p>\\n                    </fieldset>\\n                </form>\\n            </div>\\n        </div>\\n    \";\n  var passwordInput = document.getElementById('password');\n  var togglePasswordBtn = document.getElementById('show-password-btn');\n  function showPassword() {\n    if (passwordInput.type === 'password') {\n      passwordInput.type = 'text';\n      togglePasswordBtn.classList.remove(\"fi-rr-eye\");\n      togglePasswordBtn.classList.add(\"fi-rr-eye-crossed\");\n    } else {\n      passwordInput.type = 'password';\n      togglePasswordBtn.classList.remove(\"fi-rr-eye-crossed\");\n      togglePasswordBtn.classList.add(\"fi-rr-eye\");\n    }\n  }\n  togglePasswordBtn.addEventListener('click', showPassword);\n  var signUpForm = document.querySelector('.sign-up-form');\n  signUpForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var firstName = document.getElementById('first-name').value;\n    var lastName = document.getElementById('last-name').value;\n    var email = document.getElementById('email').value;\n    var password = document.getElementById('password').value;\n    var userData = {\n      firstName: firstName,\n      lastName: lastName,\n      email: email,\n      password: password\n    };\n    localStorage.setItem('userData', JSON.stringify(userData));\n    signUpForm.reset();\n  });\n\n  // const savedUserData = localStorage.getItem('userData')\n  // if (savedUserData) {\n  //     const userData = JSON.parse(savedUserData)\n  //     document.getElementById('first-name').value = userData.firstName\n  //     document.getElementById('last-name').value = userData.lastName\n  //     document.getElementById('email').value = userData.email\n  //     document.getElementById('password').value = userData.password\n  // }\n}\n\n//# sourceURL=webpack://todo_list/./src/signUpForm.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextMonth: () => (/* binding */ nextMonth),\n/* harmony export */   nextWeek: () => (/* binding */ nextWeek),\n/* harmony export */   renderToday: () => (/* binding */ renderToday),\n/* harmony export */   thisMonth: () => (/* binding */ thisMonth),\n/* harmony export */   thisWeek: () => (/* binding */ thisWeek),\n/* harmony export */   todayTsk: () => (/* binding */ todayTsk),\n/* harmony export */   tomorrow: () => (/* binding */ tomorrow)\n/* harmony export */ });\nvar todayTasks = [];\nvar tomorrowTasks = [];\nvar thisWeekTasks = [];\nvar nextWeekTasks = [];\nvar thisMonthTasks = [];\nvar nextMonthTasks = [];\nvar todayTsk = JSON.parse(localStorage.getItem('today'));\nvar tomorrow = JSON.parse(localStorage.getItem('tomorrow'));\nvar thisWeek = JSON.parse(localStorage.getItem('thisWeek'));\nvar nextWeek = JSON.parse(localStorage.getItem('nextWeek'));\nvar thisMonth = JSON.parse(localStorage.getItem('thisMonth'));\nvar nextMonth = JSON.parse(localStorage.getItem('nextMonth'));\n\n// renders all today's tasks information, including event listeners and storing tasks in local storage leading them into their own separate array\nfunction renderToday() {\n  var taskBoard = document.getElementById('task-board');\n  taskBoard.innerHTML = '';\n  var div = document.createElement('div');\n  div.classList.add('today-content-wrapper');\n  div.innerHTML = \"\\n        <div class=\\\"tsk-sct\\\">\\n            <div class=\\\"date-indicator\\\">\\n                <h1>\\n                    Today\\n                </h1>\\n                <hr class=\\\"divider\\\">\\n            </div>\\n\\n            <div class=\\\"tsk-cnt\\\">\\n                <div class=\\\"add-task\\\">\\n                    <div class=\\\"nw-tsk\\\">\\n                        <i class=\\\"fi fi-sr-plus-small\\\"></i>\\n                        <span>\\n                            Add Task\\n                        </span>\\n                    </div>\\n\\n                    <ul class=\\\"tsk-lst\\\"></ul>\\n                </div>\\n\\n                <div class=\\\"nw-tsk-frm\\\">\\n                    <form method=\\\"post\\\" class=\\\"form-content\\\">\\n                        <fieldset>\\n                            <div class=\\\"tsk-nm\\\">\\n                                <input type=\\\"text\\\" id=\\\"tsk-nm\\\" name=\\\"task-name\\\" placeholder=\\\"Task name\\\" required>\\n                                <input type=\\\"text\\\" id=\\\"tsk-dcn\\\" name=\\\"task-description\\\" placeholder=\\\"Description\\\">\\n                            </div>\\n                        </fieldset>\\n\\n                        <fieldset>\\n                            <select id=\\\"dt-sctn\\\">\\n                                <option>Today</option>\\n                                <option>Tomorrow</option>\\n                                <option>This Week</option>\\n                                <option>Next Week</option>\\n                                <option>This Month</option>\\n                                <option>Next Month</option>\\n                            </select>\\n\\n                            <select id=\\\"pty-sctn\\\">\\n                                <option>Priority 1</option>\\n                                <option>Priority 2</option>\\n                                <option>Priority 3</option>\\n                                <option>Priority 4</option>\\n                            </select>\\n                        </fieldset>\\n\\n                        <fieldset>\\n                            <button type=\\\"reset\\\" class=\\\"cancel-btn\\\">Cancel</button>\\n                            <button type=\\\"submit\\\" class=\\\"add-tsk-btn\\\">Add task</button>\\n                        </fieldset>\\n                    </form>\\n                </div>\\n            </div>\\n        </div>\\n    \";\n  taskBoard.appendChild(div);\n  var nwTskEl = document.querySelector('.nw-tsk');\n  var nwTskFrm = document.querySelector('.nw-tsk-frm');\n  var cancelBtn = document.querySelector('.cancel-btn');\n  function showNewTaskForm() {\n    nwTskFrm.style.display = 'block';\n    document.body.classList.add('show-before');\n  }\n  nwTskEl.addEventListener('click', showNewTaskForm);\n  function hideForm() {\n    nwTskFrm.style.display = 'none';\n    document.body.classList.remove('show-before');\n  }\n  cancelBtn.addEventListener('click', hideForm)\n\n  // stores tasks into the correct array and also displays each task into the screen\n  ;\n  (function () {\n    var formContentEl = document.querySelector('.form-content');\n    function addTaskForToday(name, des, date, priority) {\n      var task = {\n        name: name,\n        des: des,\n        date: date,\n        priority: priority\n      };\n      return task;\n    }\n    function submitNewTask(event) {\n      event.preventDefault();\n      var taskName = document.getElementById('tsk-nm');\n      var taskDescription = document.getElementById('tsk-dcn');\n      var dateSelection = document.getElementById('dt-sctn');\n      var prioritySelection = document.getElementById('pty-sctn');\n      var name = taskName.value;\n      var des = taskDescription.value;\n      var date = dateSelection.value;\n      var priority = prioritySelection.value;\n      var task = addTaskForToday(name, des, date, priority);\n      switch (task.date) {\n        case 'Today':\n          todayTasks.push(task);\n          localStorage.setItem('today', JSON.stringify(todayTasks));\n          var _today = JSON.parse(localStorage.getItem('today')) || [];\n          renderTodayTasks(_today);\n          break;\n        case 'Tomorrow':\n          tomorrowTasks.push(task);\n          localStorage.setItem('tomorrow', JSON.stringify(tomorrowTasks));\n          break;\n        case 'This Week':\n          thisWeekTasks.push(task);\n          localStorage.setItem('thisWeek', JSON.stringify(thisWeekTasks));\n          break;\n        case 'Next Week':\n          nextWeekTasks.push(task);\n          localStorage.setItem('nextWeek', JSON.stringify(nextWeekTasks));\n          break;\n        case 'This Month':\n          thisMonthTasks.push(task);\n          localStorage.setItem('thisMonth', JSON.stringify(thisMonthTasks));\n          break;\n        case 'Next Month':\n          nextMonthTasks.push(task);\n          localStorage.setItem('nextMonth', JSON.stringify(nextMonthTasks));\n          break;\n      }\n      nwTskFrm.style.display = 'none';\n      document.body.classList.remove('show-before');\n      formContentEl.reset();\n    }\n    formContentEl.addEventListener('submit', submitNewTask);\n    function renderTodayTasks(today) {\n      var taskList = document.querySelector('.tsk-lst');\n      taskList.innerHTML = '';\n      today.forEach(function (task) {\n        var li = document.createElement('li');\n        li.classList.add('tsk');\n        li.innerHTML = \"\\n                    <div class=\\\"circle\\\"></div>\\n    \\n                    <div class=\\\"tsk-chd\\\">\\n                        <p class=\\\"name\\\">\".concat(task.name, \"</p>\\n                        <p class=\\\"des\\\">\").concat(task.des, \"</p>\\n\\n                        <div class=\\\"dt-pr\\\">\\n                            <p class=\\\"date\\\">\").concat(task.date, \"</p>\\n                            <p class=\\\"priority\\\">\").concat(task.priority, \"</p>\\n                        </div>\\n                    </div>\\n\\n                    <div class=\\\"tsk-opts\\\" tabindex=\\\"1\\\">\\n                        <i class=\\\"fi fi-sr-menu-dots mn-dts\\\">\\n                            <div class=\\\"tsk-options\\\">\\n                                <p>\\n                                    Edit\\n                                </p>\\n\\n                                <p>\\n                                    View\\n                                </p>\\n\\n                                <p>\\n                                    Delete\\n                                </p>\\n                            </div>\\n                        </i>\\n                    </div>\\n                \");\n        taskList.appendChild(li);\n      });\n    }\n    var today = JSON.parse(localStorage.getItem('today')) || [];\n    renderTodayTasks(today);\n    console.log(today);\n  })();\n  var taskList = document.querySelector('.tsk-lst');\n  taskList.addEventListener('click', function (event) {\n    if (event.target.classList.contains('circle')) {\n      event.target.classList.toggle('check');\n    }\n  });\n}\n\n//# sourceURL=webpack://todo_list/./src/today.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ui: () => (/* binding */ ui)\n/* harmony export */ });\nvar ui = function ui() {\n  var burgerMenuEl = document.querySelector('.burger-menu');\n  var asideContent = document.querySelector('.aside-content');\n  var todayEl = document.getElementById('today');\n  var upcomingEl = document.getElementById('upcoming');\n  var projectOptionsEl = document.querySelector('.project-options');\n  var switcherEl = document.querySelector('.switcher');\n  var taskBoard = document.getElementById('task-board');\n  function toggleTodayClass() {\n    todayEl.classList.add('hover');\n    upcomingEl.classList.remove('hover');\n    projectOptionsEl.classList.remove('hover');\n  }\n  toggleTodayClass();\n  todayEl.addEventListener('click', toggleTodayClass);\n  upcomingEl.addEventListener('click', function () {\n    upcomingEl.classList.add('hover');\n    todayEl.classList.remove('hover');\n    projectOptionsEl.classList.remove('hover');\n  });\n  projectOptionsEl.addEventListener('click', function () {\n    projectOptionsEl.classList.add('hover');\n    todayEl.classList.remove('hover');\n    upcomingEl.classList.remove('hover');\n  });\n  function showAside() {\n    asideContent.classList.toggle('show-aside');\n  }\n  burgerMenuEl.addEventListener('click', showAside);\n};\n\n//# sourceURL=webpack://todo_list/./src/ui.js?");

/***/ }),

/***/ "./src/upcoming.js":
/*!*************************!*\
  !*** ./src/upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUpcoming: () => (/* binding */ renderUpcoming)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n\nfunction renderUpcoming() {\n  var taskBoard = document.getElementById('task-board');\n  taskBoard.innerHTML = '';\n  var div = document.createElement('div');\n  div.classList.add('upcoming-content-wrapper');\n  div.innerHTML = \"\\n        <div>\\n            <h1>\\n                Today\\n            </h1>\\n\\n            <div class=\\\"ty-tsk\\\">\\n                <ul id=\\\"today-task\\\"></ul>\\n            </div>\\n        </div>\\n\\n        <div>\\n            <h1>\\n                Tomorrow\\n            </h1>\\n\\n            <div class=\\\"tm-tsk\\\">\\n                <ul id=\\\"tomorrow-task\\\"></ul>\\n            </div>\\n        </div>\\n\\n        <div>\\n            <h1>\\n                This Week\\n            </h1>\\n\\n            <div class=\\\"tk-tsk\\\">\\n                <ul id=\\\"this-week-task\\\"></ul>\\n            </div>\\n        </div>\\n\\n        <div>\\n            <h1>\\n                Next Week\\n            </h1>\\n\\n            <div class=\\\"nk-tsk\\\">\\n                <ul id=\\\"next-week-task\\\"></ul>\\n            </div>\\n        </div>\\n\\n        <div>\\n            <h1>\\n                This Month\\n            </h1>\\n\\n            <div class=\\\"th-tsk\\\">\\n                <ul id=\\\"this-month-task\\\"></ul>\\n            </div>\\n        </div>\\n\\n        <div>\\n            <h1>\\n                Next Month\\n            </h1>\\n\\n            <div class=\\\"nh-tsk\\\">\\n                <ul id=\\\"next-month-task\\\"></ul>\\n            </div>\\n        </div>\\n    \";\n  taskBoard.appendChild(div);\n  function renderTasks(destination, tsk) {\n    var taskList = document.getElementById(destination);\n    taskList.innerHTML = '';\n    tsk.forEach(function (task) {\n      var li = document.createElement('li');\n      li.classList.add('tsk');\n      li.innerHTML = \"\\n                <div class=\\\"circle\\\"></div>\\n    \\n                <div class=\\\"tsk-chd\\\">\\n                    <p class=\\\"name\\\">\".concat(task.name, \"</p>\\n                    <p class=\\\"des\\\">\").concat(task.des, \"</p>\\n    \\n                    <div class=\\\"dt-pr\\\">\\n                        <p class=\\\"date\\\">\").concat(task.date, \"</p>\\n                        <p class=\\\"priority\\\">\").concat(task.priority, \"</p>\\n                    </div>\\n                </div>\\n    \\n                <div class=\\\"tsk-opts\\\">\\n                    <i class=\\\"fi fi-sr-menu-dots mn-dts\\\"></i>\\n                </div>\\n            \");\n      taskList.appendChild(li);\n    });\n  }\n  renderTasks('today-task', _today__WEBPACK_IMPORTED_MODULE_0__.todayTsk);\n  renderTasks('tomorrow-task', _today__WEBPACK_IMPORTED_MODULE_0__.tomorrow);\n  renderTasks('this-week-task', _today__WEBPACK_IMPORTED_MODULE_0__.thisWeek);\n  renderTasks('next-week-task', _today__WEBPACK_IMPORTED_MODULE_0__.nextWeek);\n  renderTasks('this-month-task', _today__WEBPACK_IMPORTED_MODULE_0__.thisMonth);\n  renderTasks('next-month-task', _today__WEBPACK_IMPORTED_MODULE_0__.nextMonth);\n  function checkCircle(element) {\n    var taskList = document.getElementById(element);\n    taskList.addEventListener('click', function (event) {\n      if (event.target.classList.contains('circle')) {\n        event.target.classList.toggle('check');\n      }\n    });\n  }\n  checkCircle('today-task');\n  checkCircle('tomorrow-task');\n  checkCircle('this-week-task');\n  checkCircle('next-week-task');\n  checkCircle('this-month-task');\n  checkCircle('next-month-task');\n}\n\n//# sourceURL=webpack://todo_list/./src/upcoming.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/main.css?");

/***/ }),

/***/ "./src/projects.css":
/*!**************************!*\
  !*** ./src/projects.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/projects.css?");

/***/ }),

/***/ "./src/signUpForm.css":
/*!****************************!*\
  !*** ./src/signUpForm.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/signUpForm.css?");

/***/ }),

/***/ "./src/today.css":
/*!***********************!*\
  !*** ./src/today.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/today.css?");

/***/ }),

/***/ "./src/upcoming.css":
/*!**************************!*\
  !*** ./src/upcoming.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/upcoming.css?");

/***/ }),

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d14c6999b4a5c8e86a7.png\";\n\n//# sourceURL=webpack://todo_list/./src/images/user.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;