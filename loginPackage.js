import 'loginPackage.css'
let loginPackageTheMDDropout = (() => {

    const createElement = (name, inputClass, type = 'div', classOrID = 'id') => {
        let variable = document.createElement(type);
        variable.setAttribute(classOrID, name);
        if (inputClass) {
            variable.setAttribute('class', inputClass)
        }
        return variable;;
    }

    //change tempDiv to body once out of VSCode initialized template
    let signInContainer = createElement('signInContainer');
    const body = document.querySelector('body');
    body.appendChild(signInContainer);
    function whereToAppend (inputAppend) {
        inputAppend.appendChild(signInContainer)
    }

    let companyNameContainer = createElement('companyNameContainer');
    let companyLogo = document.createElement('img')
    companyLogo.setAttribute('id', 'companyLogo')
    companyLogo.src = "images/logo.png"
    companyNameContainer.appendChild(companyLogo)
    function inputCompanyLogo(source) {
        companyLogo.src = source
    }


    let welcomeContainer = createElement('welcomeContainer');
    let welcomeText = createElement('welcomeText');
    welcomeText.innerHTML = "Welcome Back!"
    welcomeContainer.appendChild(welcomeText)
    let usertext = "Welcome Back!"
    function inputWelcomeText (input) {
        welcomeText.innerHTML = input
    }

    let signInButton = createElement('signInButton', "button", "button");
    signInButton.setAttribute('type', 'submit')
    let signInButtonText = createElement('signInButtonText');
    signInButtonText.innerHTML = "Sign In"
    signInButton.appendChild(signInButtonText)

    let emailPasswordContainer = createElement('emailPasswordContainer', "", "form");
    emailPasswordContainer.setAttribute('novalidate', 'true')
    emailPasswordContainer.addEventListener('submit', function(e) {
            if (emailInputArea.validity.valueMissing) {
                // emailInputArea.value = ""
                emailInputArea.placeholder = "Email Required"
                emailContainer.classList.add('error')
                e.preventDefault();
            }
            if (emailInputArea.validity.patternMismatch) {
                // emailInputArea.value = ""
                emailInputArea.placeholder = "Invalid email format"
                emailContainer.classList.add('error')
                e.preventDefault();
            }
            if (!passwordInputArea.checkValidity()) {
                // passwordInputArea.value = ""
                passwordInputArea.placeholder = "Password required"
                passwordContainer.classList.add('error')
                e.preventDefault();
            }
            if (signInContainer.classList.contains('signUpContainer')){

                if (passwordInputArea.value != reconfirmPassword.lastChild.value) {
                    // passwordInputArea.value = ""
                    passwordInputArea.placeholder = "Passwords do not match"
                    // reconfirmPassword.lastChild.value = ""
                    reconfirmPassword.lastChild.placeholder = "Passwords do not match"
                    passwordContainer.classList.add('error')
                    reconfirmPassword.classList.add('error')
                    e.preventDefault();
                }
                if (!regex.test(passwordInputArea.value)) {
                    passwordInputArea.placeholder = "Password does not meet requirements"
                    passwordInputArea.setCustomValidity(customError)
                    passwordInputArea.reportValidity();
                    passwordContainer.classList.add('error')
                    e.preventDefault();
                }

                if (reconfirmPassword.lastChild.validity.valueMissing) {
                    reconfirmPassword.lastChild.placeholder = "Password required"
                    reconfirmPassword.classList.add('error')
                    e.preventDefault();
                }                
            }
            emailInputArea.value = ""
            passwordInputArea.value = ""
            reconfirmPassword.lastChild.value = ""
    })
   
    let emailContainer = createElement('emailContainer')
    let emailInputArea = createElement('emailInputArea', "", 'input',);
    emailInputArea.setAttribute('name', 'email')
    emailInputArea.setAttribute('placeholder', 'Email Address')
    emailInputArea.setAttribute('required', "true")
    emailInputArea.setAttribute('pattern', "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    emailInputArea.addEventListener('input', function() {
        if (emailInputArea.checkValidity()) {
            emailContainer.classList.remove('error')
            emailInputArea.placeholder = "Email"
        }
    })

    let emailIcon = createElement('emailIcon', "icon", "img")
    emailIcon.src = "images/envelope.svg"
    emailContainer.appendChild(emailIcon)
    emailContainer.appendChild(emailInputArea)
    emailPasswordContainer.appendChild(emailContainer)

    let passwordContainer = createElement('passwordContainer')
    let passwordInputArea = createElement('passwordInputArea', "", 'input');
    passwordInputArea.setAttribute('name', 'password')
    passwordInputArea.setAttribute('placeholder', "Password")
    passwordInputArea.setAttribute('type', "password")
    passwordInputArea.setAttribute('required', 'true')
    let regex = /""/
    let customError; 
    function setOwnRegex(userRegex) {
        if (userRegex == 1) {
            regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            customError = "Minimum eight characters, at least one letter and one number"
        }
        else if (userRegex == 2) {
            regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            customError = "Minimum eight characters, at least one letter, one number and one special character"
        }
        else if (userRegex == 3) {
            regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            customError = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        }
        else if (userRegex == 4) {
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            customError = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
            
        } 
        else if (userRegex == 5) {
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
            customError = "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
        else regex = userRegex
    }
    passwordInputArea.addEventListener('input', function() {
        if (regex.test(passwordInputArea.value) && passwordInputArea.checkValidity()) {
            passwordContainer.classList.remove('error')
            passwordInputArea.placeholder = "Password"
        }
    })

    let passwordIcon = createElement('passwordIcon', "icon", "img")
    passwordIcon.src = "images/padlock.svg"
    passwordContainer.appendChild(passwordIcon)
    passwordContainer.appendChild(passwordInputArea)
    let reconfirmPassword = passwordContainer.cloneNode(true)
    emailPasswordContainer.appendChild(passwordContainer)
    reconfirmPassword.lastChild.setAttribute('placeholder', 'Re-enter password')
    
    reconfirmPassword.lastChild.addEventListener('input', function() {
        if (reconfirmPassword.lastChild.checkValidity()) {
            reconfirmPassword.classList.remove('error')
            reconfirmPassword.lastChild.placeholder = "Password"
        }
    })

    let selectionDivider = createElement('selectionDivider')
    selectionDivider.innerHTML = "- OR -"
    
    let signInWithGoogleButton = createElement('signInWithGoogleButton', "button");
    let signInWithGoogleText = createElement('signInWithGoogleText');
    let googleIcon = createElement('googleIcon', "icon", "img")
    googleIcon.src = "images/google-plus.svg"
    signInWithGoogleText.innerHTML = "Sign in with Google"
    signInWithGoogleButton.appendChild(googleIcon)
    signInWithGoogleButton.appendChild(signInWithGoogleText)

    let signInWithDemoButton = createElement('signInWithDemoButton', "button");
    let signInWithDemoText = createElement('signInWithDemoText');
    let signInWithDemoText2 = createElement('signInWithDemoText2');
    signInWithDemoText.innerHTML = "Demo"
    signInWithDemoText2.innerHTML = "Version"
    signInWithDemoButton.appendChild(signInWithDemoText)
    signInWithDemoButton.appendChild(signInWithDemoText2)

    let signUpButton = createElement('signUpButton', "button")
    let signUpButtonText = createElement('signUpButtonText')
    signUpButtonText.innerHTML = "Sign Up"
    signUpButton.appendChild(signUpButtonText)
    signUpButton.addEventListener('click', promptEmailPass)


    let submit = createElement('submit', "button", "button")
    submit.setAttribute('type', 'submit')
    let submitText = createElement('submitText')
    submit.appendChild(submitText)
    submitText.innerHTML = "Submit"

    let backButton = createElement('backButton', "button");
    let backButtonText = createElement('backButtonText');
    backButtonText.innerHTML = "Back"
    backButton.appendChild(backButtonText)
    backButton.addEventListener('click', returnHome)

    function resetFields() {
        emailInputArea.value = ""
        passwordInputArea.value = ""
        reconfirmPassword.lastChild.value = ""
    }

    function resetError() {
        if (passwordContainer.classList.contains('error')) {
            passwordContainer.classList.remove('error')
            passwordInputArea.placeholder = "Password"
        }
        if (emailContainer.classList.contains('error')) {
            emailContainer.classList.remove('error')
            emailInputArea.placeholder = "Email Address"
        }
        if (reconfirmPassword.classList.contains('error')) {
            reconfirmPassword.classList.remove('error')
            reconfirmPassword.lastChild.placeholder = "Password"
        }
    }

    function returnHome() {
        clearContainer();
        createSignInContainer();
        resetFields();
        emailPasswordContainer.classList.remove('signupInputContainer')
        signInContainer.classList.remove('signUpContainer')
        resetError();
    }

    function clearContainer () {
        if (emailPasswordContainer.lastChild == submit) {
            emailPasswordContainer.removeChild(submit)
        }
        if (emailPasswordContainer.lastChild == reconfirmPassword) {
            emailPasswordContainer.removeChild(reconfirmPassword)
        }
        while (signInContainer.firstElementChild) {
            signInContainer.removeChild(signInContainer.firstElementChild);
        }
    }


    function promptEmailPass () {
        clearContainer();
        signInContainer.append(companyNameContainer, welcomeContainer,
            emailPasswordContainer, backButton);
            welcomeText.innerHTML = "Sign Up";
        emailPasswordContainer.append(reconfirmPassword, submit)

        emailPasswordContainer.removeChild(signUpButton)
        emailPasswordContainer.removeChild(signInButton)
        emailPasswordContainer.classList.add('signupInputContainer')
        signInContainer.classList.add('signUpContainer')
        resetFields();
        resetError();
    }

    function createSignInContainer (whereToAppend = "", logoSource = "", inputHomeWelcomeText = "", userRegex = 5) {
        if(whereToAppend !== "") whereToAppend(whereToAppend)
        if(logoSource !== "") inputCompanyLogo(logoSource)
        if (inputHomeWelcomeText !== "") {
            inputWelcomeText(inputHomeWelcomeText);
            usertext = inputHomeWelcomeText;
        }
        if (userRegex!== "") {
            setOwnRegex(userRegex);
        }
        signInContainer.append(companyNameContainer, welcomeContainer, 
            emailPasswordContainer, signInButton, selectionDivider, signInWithGoogleButton, signUpButton,
            signInWithDemoButton)
        emailPasswordContainer.append(emailContainer, passwordContainer, signInButton,
            signUpButton)
        if (emailPasswordContainer.firstElementChild == submit) {
            emailPasswordContainer.removeChild(submit)
        }
        welcomeText.innerHTML = usertext;
        emailInputArea.setAttribute('placeholder', 'Email Address')
    }

    return {
        createSignInContainer
    }
})();

export {
    loginPackageTheMDDropout
}