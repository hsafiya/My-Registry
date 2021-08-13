function viewAllRegistriesHandler(event) {
    event.preventDefault();
    document.location.replace('/registries/')   
};

document.querySelector('#allregs').addEventListener('click', viewAllRegistriesHandler);

