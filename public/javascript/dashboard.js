const addItem = document.querySelector(".add-item");
const cancelBtn = document.querySelectorAll('.cancel');

function openModal(event) {
    event.preventDefault();
    let modalEl = document.querySelector(".modal");
    modalEl.classList.add("is-active");
  }

function closeModal(event) {
  event.preventDefault();
  let modalEl = document.querySelector(".is-active");
  modalEl.classList.remove('is-active');
}

addItem.addEventListener('click', openModal);

Array.from(cancelBtn).forEach((elemnt) => {
  elemnt.addEventListener('click', closeModal)
})