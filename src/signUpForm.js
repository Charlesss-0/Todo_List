import { renderToday } from "./today"

export function renderSignUpForm() {
    const body = document.querySelector('body')
    body.innerHTML = `
        <div class="form-content-wrapper">
            <div class="cntnr">
                <div class="app-name-wrapper">
                    <h2>
                        GetDo App
                    </h2>
                </div>

                <div class="new-account-section">
                    <h1>
                        Create new account
                    </h1>
                </div>

                <form class="sign-up-form">
                    <fieldset>
                        <div>
                            <label for="first-name">
                                First Name
                            </label>
                            <input type="text" id="first-name" name"user-first-name" required>
                        </div>

                        <div>
                            <label for="last-name">
                                Last Name
                            </label>
                            <input type="text" id="last-name" name="user-last-name" required>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label for="email">
                                Email
                            </label>
                            <input type="email" id="email" name="user-email" required>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="password-fieldset-container">
                            <div class="password-container">
                                <label for="password">
                                    Password
                                </label>
                                <input type="password" id="password" name="user-password" required>
                            </div>
                            <i class="fi fi-rr-eye" id="show-password-btn"></i>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <button type="button">
                                Sign Up With Google
                            </button>
                        </div>

                        <div>
                            <button type="submit">
                                Sign Up
                            </button>                    
                        </div>
                    </fieldset>

                    <fieldset>
                        <p class="login">
                            Already have an account? <a href="#">Log In</a>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    `

    const passwordInput = document.getElementById('password')
    const togglePasswordBtn = document.getElementById('show-password-btn')
    function showPassword() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text'
            togglePasswordBtn.classList.remove("fi-rr-eye")
            togglePasswordBtn.classList.add("fi-rr-eye-crossed")

        } else {
            passwordInput.type = 'password'
            togglePasswordBtn.classList.remove("fi-rr-eye-crossed")
            togglePasswordBtn.classList.add("fi-rr-eye")
        }
    }
    togglePasswordBtn.addEventListener('click', showPassword)

    const signUpForm = document.querySelector('.sign-up-form')
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const firstName = document.getElementById('first-name').value
        const lastName = document.getElementById('last-name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        const userData = {
            firstName,
            lastName,
            email,
            password
        }

        localStorage.setItem('userData', JSON.stringify(userData))

        location.reload()
    })

    // const savedUserData = localStorage.getItem('userData')
    // if (savedUserData) {
    //     const userData = JSON.parse(savedUserData)
    //     document.getElementById('first-name').value = userData.firstName
    //     document.getElementById('last-name').value = userData.lastName
    //     document.getElementById('email').value = userData.email
    //     document.getElementById('password').value = userData.password
    // }
}