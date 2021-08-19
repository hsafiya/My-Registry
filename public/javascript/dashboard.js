// const registryName = window.location.toString().split('/')[
//   window.location.toString().split('/').length - 2
// ].toLowerCase();

const addItem = document.querySelector(".add-item");
const cancelBtn = document.querySelectorAll('.cancel');
const publishBtn = document.querySelector('#publish');
const deleteRegBtn = document.querySelector('#delete-reg');
const confirmDelete = document.querySelector('#confirm-delete-reg');


function addItemModal(event) {
  event.preventDefault();
  let modalEl = document.querySelector(".add-item-modal");
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

// open delete reg modal
function deleteRegModal(event) {
  event.preventDefault();
  let modalEl = document.querySelector(".delete-reg-modal");
  modalEl.classList.add("is-active");
};
// delete registry
async function deleteRegHandler(event) {
  event.preventDefault();
  const reg = await (await fetch(`/api/registries/${registryName}`)).json();
  const registry_id = reg.id;

  const remove = await fetch(`/api/registries/${registry_id}`, {
    method: 'DELETE'
  });
  if (remove.ok) {
    document.location.replace('/')
  } else {
    alert(remove.statusText)
  }
};

// delete
deleteRegBtn.addEventListener('click', deleteRegModal);
confirmDelete.addEventListener('click', deleteRegHandler);
// add item
addItem.addEventListener('click', addItemModal);
// cancel modal
Array.from(cancelBtn).forEach((elemnt) => {
  elemnt.addEventListener('click', closeModal)
});

// publish
if(publishBtn) {
publishBtn.addEventListener('click', publishHandler)};

