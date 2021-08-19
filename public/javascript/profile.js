const userId = document.querySelector('#user-id').textContent.trim();

const editIcon = document.querySelector('#edit-profile-img');
const updateFormBtn = document.querySelector('#submit-profile');
const deleteProfile = document.querySelector('#delete-profile');
const cancelBtn = document.querySelectorAll('.cancel');
const modalImages = document.querySelectorAll('.new-img');


updateFormBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const updateUsername = document.querySelector('#username-update').value.trim();
    const updateEmail = document.querySelector('#email-update').value.trim();
    const updatePassword = document.querySelector('#password-update').value.trim();

    if (updateUsername) {
        if (updateEmail) {
            if (updatePassword) {
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
            };
            const updateUser = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    username: updateUsername,
                    email: updateEmail
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
        };
        if (updatePassword){
            const updateUser = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    username: updateUsername,
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
        };
        const updateUser = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                username: updateUsername
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
    }
});

deleteProfile.addEventListener('click', async (event) => {
    event.preventDefault();

    const remove = await fetch(`/api/users/${userId}`, {
        method: 'DELETE'
    });

    if (remove.ok) {
        const logout = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
        if (logout.ok) {
            document.location.replace('/');
        } else {
            alert(logout.statusText);
        }
    } else {
        alert(remove.statusText);
    }
});

// open modal for changing icons
async function editIconModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".modal");
    modalEl.classList.add("is-active");
}
// general close modal
function closeModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".is-active");
    modalEl.classList.remove('is-active');
};
// edit icon function
async function editIconHandler(event) {
    event.preventDefault();
    let profile_img = await this.src
    const updateUserIcon = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            profile_img
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (updateUserIcon.ok) {
        document.location.replace('/user/profile');
    } else {
        alert(updateUserIcon.statusText);
    }
}

// event listeners
editIcon.addEventListener('click', editIconModal);

Array.from(cancelBtn).forEach((elemnt) => {
    elemnt.addEventListener('click', closeModal)
});

Array.from(modalImages).forEach((elemnt) => {
    elemnt.addEventListener('click', editIconHandler)
});