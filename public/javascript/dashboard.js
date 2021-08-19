// const registryName = window.location.toString().split('/')[
//   window.location.toString().split('/').length - 2
// ].toLowerCase();

const addItem = document.querySelector(".add-item");
const cancelBtn = document.querySelectorAll('.cancel');
const publishBtn = document.querySelector('#publish');

function openModal(event) {
  event.preventDefault();
  let modalEl = document.querySelector(".modal");
  modalEl.classList.add("is-active");
};

function closeModal(event) {
  event.preventDefault();
  let modalEl = document.querySelector(".is-active");
  modalEl.classList.remove('is-active');
};

// publish registry
const publishHandler = async function (event) {
  event.preventDefault();
  const reg = await (await fetch(`/api/registries/${registryName}`)).json();
  const registry_id = reg.id;
  let publish = reg.publish;

  if (!publish) {
    publish = true;
    const response = await fetch(`/api/registries/${registry_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        publish
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/registries/${registryName}/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
};

addItem.addEventListener('click', openModal);

Array.from(cancelBtn).forEach((elemnt) => {
  elemnt.addEventListener('click', closeModal)
});

publishBtn.addEventListener('click', publishHandler);