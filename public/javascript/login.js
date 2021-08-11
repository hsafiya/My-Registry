async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("password-login").value.trim();

    if(username && password) {
        const response = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                username,
                password
            }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}




// changed the querySelector and event
document.querySelector('#login').addEventListener('click', loginFormHandler);

// we should have a signup.js for this
// document.getElementById("signup").onclick = function () {
//     location.href = " "
//   };
