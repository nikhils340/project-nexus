const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');

const btnlogin=document.querySelector('.btnlogin');

const iconclose=document.querySelector('.icon-close');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})


loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

btnlogin.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
})

iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
})
  



// registerLink.addEventListener('click', () => {
//     if (!wrapper.classList.contains('active')) {
//         wrapper.classList.add('active');
//     }
// });

// loginLink.addEventListener('click', () => {
//     if (wrapper.classList.contains('active')) {
//         wrapper.classList.remove('active');
//     }
// });

btnLogin.addEventListener('click', () => {
    // Add your login form validation logic here
    const emailInput = document.querySelector('.form-boxlogin input[type="email"]');
    const passwordInput = document.querySelector('.form-boxlogin input[type="password"]');

    if (validateLoginForm(emailInput.value, passwordInput.value)) {
        wrapper.classList.add('active-popup');
    }
});



function validateLoginForm(email, password) {
    // Add your validation logic here
    if (email.trim() === '' || password.trim() === '') {
        alert('Email and password cannot be empty');
        return false;
    }

    // Add more validation checks as needed

    return true;
}
