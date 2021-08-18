const itemEditBtn = document.querySelectorAll('.item-edit');
const itemDeleteBtn = document.querySelectorAll('.item-delete');
let itemName;
// open edit modal
const editItem = async function (event) {
    event.preventDefault();
    itemName = this.parentNode.previousElementSibling.textContent.toString().trim()

    var modalEl = document.querySelector(".modal-edit");
    modalEl.classList.add("is-active");
}
// update item
async function editItemHandler(event) {
    event.preventDefault();


    const item_name = document.querySelector('.edit-item-name').value.trim();
    const item_url = document.querySelector('.edit-item-url').value.trim();

    const item = await (await fetch(`/api/items/${itemName}`)).json();
    const item_id = item.id;
    if (item_name && item_url) {
        const response = await fetch(`/api/items/${item_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                item_name,
                item_url,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/${registryName}/dashboard`);
        } else {
            alert(response.statusText);
        }
    } else if (!item_url) {
        const response = await fetch(`/api/items/${item_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                item_name,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/${registryName}/dashboard`);
        } else {
            alert(response.statusText);
        }
    } else if (!item_name) {
        const response = await fetch(`/api/items/${item_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                item_url
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/${registryName}/dashboard`);
        } else {
            alert(response.statusText);
        }
    } else {
        document.location.replace(`/${registryName}/dashboard`);
    }
}
// delete item
async function deleteItemHandler(event) {
    event.preventDefault();
    itemName = this.parentNode.previousElementSibling.previousElementSibling.textContent.toString().trim();
    const item = await (await fetch(`/api/items/${itemName}`)).json();
    const item_id = item.id;
    const response = await fetch(`/api/items/${item_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/${registryName}/dashboard`);
    } else {
        alert(response.statusText);
    }
}

// event listeners for edit buttons
Array.from(itemEditBtn).forEach(function (element) {
    element.addEventListener('click', editItem)
});
// event listeners for delete buttons
Array.from(itemDeleteBtn).forEach(function (element) {
    element.addEventListener('click', deleteItemHandler)
});
document.querySelector('#edit-item').addEventListener('click', editItemHandler);


