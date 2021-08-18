const registryName = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
].toLowerCase();
const buyItemBtn = document.querySelectorAll('.item-buy');
let itemName;

const buyItem = async function(event) {
    event.preventDefault();
    itemName = this.parentNode.previousElementSibling.textContent.toString().trim();
    const item = await (await fetch(`/api/items/${itemName}`)).json();
    const item_id = item.id;
    let bought = item.bought;
    bought = true;
    console.log(bought);

    const response = await fetch(`/api/items/${item_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            bought
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/${registryName}/view`);
    } else {
        alert(response.statusText);
    }
}


// event listeners for buy buttons
Array.from(buyItemBtn).forEach(function (element) {
    element.addEventListener('click', buyItem)
});