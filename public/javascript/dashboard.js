function openModal(event) {
    event.preventDefault();
    var modalEl = document.querySelector(".modal");
    modalEl.classList.add("is-active");
  }

document.querySelector(".add-item").addEventListener('click', openModal);