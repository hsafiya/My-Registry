// find registry name
async function regSearchHandler(event) {
    event.preventDefault();
    const registryName = document.querySelector('#reg-search').value.trim();
    if (registryName) {
        document.location.replace(`/registries/${registryName}`)
    }
};

document.querySelector('#reg-search-btn').addEventListener('click', regSearchHandler);