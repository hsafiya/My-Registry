function viewAllRegistriesHandler(event) {
    event.preventDefault();
    document.location.replace('/registries/')   
};

// function createRegistryHandler(event) {
//     event.preventDefault();
//     document.location.replace('/choosecategory/')   
// };


document.querySelector('#allregs').addEventListener('click', viewAllRegistriesHandler);
//document.getElementById("createregistry").addEventListener('click', createRegistryHandler);


document.getElementById('createregistry').onclick = function (event) {
    event.preventDefault();
    document.location.replace('/choosecategory/')
};
