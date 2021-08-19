// find registry name
async function regSearchHandler(event) {
    event.preventDefault();
    const registryName = document.querySelector('#reg-search').value.trim();
    if (registryName) {
        document.location.replace(`/registries/${registryName}`)
    }
};

document.querySelector('#reg-search-btn').addEventListener('click', regSearchHandler);

// select all elements with this class
const regItems = document.querySelectorAll('.reg-list-item');
// the function to be used in the event listeners
const registry = async function(event) {
        event.preventDefault();
// getting the name of registry from all data
    const registryName = await this.textContent.toString().split('\n')[3].trim().split(':')[1].trim().split(' ').join('-');
    // redirects to that registry page
    document.location.replace(`/registries/${registryName}/dashboard`)
};

Array.from(regItems).forEach(function (element) {
    element.addEventListener('click', registry);
});

