const itemEditBtn = document.querySelectorAll('.item-edit');

const editItem = function(event) {
    event.preventDefault();
    console.log('im clicked');
    var modalEl = document.querySelector(".modal-edit");
    modalEl.classList.add("is-active");
}


Array.from(itemEditBtn).forEach(function(element) {
    element.addEventListener('click', editItem)
})