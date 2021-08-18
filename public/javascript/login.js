async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            alert("Username and Password didn't match. Please try again.");
        } else {
            document.location.replace('/');
            response.render('homepage')
            
        }
    }
};

document.querySelector('#login').addEventListener('click', loginFormHandler);

// redirect to signup page
document.getElementById('signup').onclick = function (event) {
    event.preventDefault();
    document.location.replace('/signup/')
};


