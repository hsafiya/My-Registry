const registryName = document.querySelector('#registry-name');
const registryDate = document.querySelector('#registry-date');
const registryAddress = document.querySelector('#autocomplete');
const nextBtn = document.querySelector('#next');
const catName = window.location.toString().split('/')[
    window.location.toString().split('/').length - 3
].toLowerCase();

registryDate.addEventListener('focus', function () {
    console.log('focused on date');
    datepicker('#registry-date', {
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString();
            console.log(value);
            input.value = value;
        },
        position: 'c'
    }).calendarContainer.style.setProperty('font-size', '1.2rem');

});

nextBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    let registryNameValue = registryName.value.trim();
    let registryDateValue = registryDate.value.trim();
    let registryAddressValue = registryAddress.value.trim();

    const createReg = await fetch('/api/registries', {
        method: 'POST',
        body: JSON.stringify({
            title: registryNameValue,
            address: registryAddressValue,
            event_date: registryDateValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (createReg.ok) {
        // get reg id
        const regID = await (await fetch(`/api/registries/${registryNameValue}`)).json();
        // get cat id
        const catID = await (await fetch(`/api/categories/${catName}`)).json();
        // post ids into association model
        const addAssociation = await fetch('/api/associations', {
            method: 'POST',
            body: JSON.stringify({
                category_id: catID.id,
                registry_id: regID.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (addAssociation.ok) {
            document.location.replace(`/${registryNameValue}/dashboard`)
            console.log('it worked');
        } else {
            alert(addAssociation.statusText)
        }
    } else {
        alert(createReg.statusText)
    }
});


