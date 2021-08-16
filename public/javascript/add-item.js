async function newItemHandler(event) {
    event.preventDefault();

    const item_name = document.querySelector('#item-name').value;
    const item_url = document.querySelector('#item-url').value;

    const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({
            item_name,
            item_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#add-item').addEventListener('click', newItemtHandler);