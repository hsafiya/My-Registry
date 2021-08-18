const itemEditBtn = document.querySelectorAll('.item-edit');

const editItem = function(event) {
    event.preventDefault();
    var modalEl = document.querySelector(".modal-edit");
    modalEl.classList.add("is-active");
}


Array.from(itemEditBtn).forEach(function(element) {
    element.addEventListener('click', editItem)
})