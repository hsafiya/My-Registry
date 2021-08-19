const registryName = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
].toLowerCase();
const buyItemBtn = document.querySelectorAll('.item-buy');
const itemBuyConfirm = document.querySelector('#confirm-buy-item');
const cancelBtn = document.querySelectorAll('.cancel');


let itemName;

const buyItem = async function(event) {
    event.preventDefault();
    itemName = this.parentNode.previousElementSibling.textContent.toString().trim();
    const item = await (await fetch(`/api/items/${itemName}`)).json();
    const item_id = item.id;
    let bought = item.bought;
    bought = true;

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
        buyItemModal();
    } else {
        alert(response.statusText);
    }
}

// buy item modal
function buyItemModal(e) {
    let modalEl = document.querySelector(".buy-item-modal");
    modalEl.classList.add("is-active");
};
// close modal
function closeModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".is-active");
    modalEl.classList.remove('is-active');
};

// event listeners for buy buttons
Array.from(buyItemBtn).forEach(function (element) {
    element.addEventListener('click', buyItem)
});

itemBuyConfirm.addEventListener('click', () => document.location.replace(`/registries/${registryName}/dashboard`)
);