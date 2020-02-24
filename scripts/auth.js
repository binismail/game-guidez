
// Sign up form

const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let email = document.querySelector('#signup-email').value
    let password = document.querySelector('#signup-password').value
    
    console.log(email, password)
    
    auth.signUpWithEmailandPassword(email, password).then(cred =>{
        console.log(cred)
    })
})