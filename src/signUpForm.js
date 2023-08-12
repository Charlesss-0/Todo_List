export function renderSignUpForm() {
    const body = document.querySelector('body')
    body.innerHTML = ''

    const div = document.createElement('div')
    div.classList.add('form-content-wrapper')
    div.innerHTML = `
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

                <p>
                    Already A Member? <a href="#">Log In</a>
                </p>
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
                    <div>
                        <label for="password">
                            Password
                        </label>
                        <input type="password" id="password" name="user-password" required>
                    </div>
                </fieldset>
            </form>
        </div>
    `
    body.appendChild(div)
}