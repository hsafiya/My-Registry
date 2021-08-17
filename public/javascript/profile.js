const userId = document.querySelector('#user-id').textContent.trim();

const updateFormBtn = document.querySelector('#submit-profile');
const deleteProfile = document.querySelector('#delete-profile');

updateFormBtn.addEventListener('click',async (event) => {
    event.preventDefault();
    const updateUsername = document.querySelector('#username-update').value.trim();
    const updateEmail = document.querySelector('#email-update').value.trim();
    const updatePassword = document.querySelector('#password-update').value.trim();

    const updateUser = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            username: updateUsername,
            email: updateEmail,
            password: updatePassword
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (updateUser.ok) {
        document.location.replace('/user/profile');
    } else {
        alert(updateUser.statusText);
    }
});

deleteProfile.addEventListener('click', async (event) => {
    event.preventDefault();



})
