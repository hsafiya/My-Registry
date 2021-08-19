const userId = document.querySelector('#user-id').textContent.trim();

const editIcon = document.querySelector('#edit-profile-img');
const updateFormBtn = document.querySelector('#submit-profile');
const deleteProfile = document.querySelector('#delete-profile');
const cancelBtn = document.querySelectorAll('.cancel');
const modalImages = document.querySelectorAll('.new-img');
const confirmDelete = document.querySelector('#confirm-delete');
const confirmUpdate = document.querySelector('#confirm-update');



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
                    updateAccModal()
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
                updateAccModal()
            } else {
                alert(updateUser.statusText);
            }
        } else if (updatePassword) {
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
                updateAccModal()
            } else {
                alert(updateUser.statusText);
            }
        } else {
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
                updateAccModal()
            } else {
                alert(updateUser.statusText);
            }
        }
    } else {
        if (updateEmail) {
            if (updatePassword) {
                const updateUser = await fetch(`/api/users/${userId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        email: updateEmail,
                        password: updatePassword
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (updateUser.ok) {
                    updateAccModal()
                } else {
                    alert(updateUser.statusText);
                }
            };
            const updateUser = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    email: updateEmail
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (updateUser.ok) {
                updateAccModal()
            } else {
                alert(updateUser.statusText);
            }
        }
        else if (updatePassword) {
            const updateUser = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    password: updatePassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (updateUser.ok) {
                updateAccModal()
            } else {
                alert(updateUser.statusText);
            }
        }
        else {
            return;
        }
    }
});
// delete profile
const deleteAccHandler = async (event) => {
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
};
// open update info modal
function updateAccModal() {
    let modalEl = document.querySelector(".update-acc-modal");
    modalEl.classList.add("is-active");
};
// open delete account modal
function deleteAccModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".delete-acc-modal");
    modalEl.classList.add("is-active");
};
// open modal for changing icons
function editIconModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".edit-icon-modal");
    modalEl.classList.add("is-active");
};
// general close modal
function closeModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".is-active");
    modalEl.classList.remove('is-active');
};
;


// event listeners
// edit icons
editIcon.addEventListener('click', editIconModal);
Array.from(modalImages).forEach((elemnt) => {
    elemnt.addEventListener('click', editIconHandler)
});
// delete
deleteProfile.addEventListener('click', deleteAccModal);
confirmDelete.addEventListener('click', deleteAccHandler);
// update
confirmUpdate.addEventListener('click', () => document.location.replace('/user/profile'));
// cancel
Array.from(cancelBtn).forEach((elemnt) => {
    elemnt.addEventListener('click', closeModal)
});