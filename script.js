const name = document.querySelector('#name');
const birth = document.querySelector('#birth')
const input = document.querySelector('#input')
const nomination = document.querySelector('#nomination')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')
const submit = document.querySelector('#submit')



submit.addEventListener('click', () => {
    let value = input.value
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(res =>res.json())
        .then(json => {
            name.innerHTML = json.name
            birth.innerHTML = json.birth_year
            if (json.vehicles.length > 0) {
                vehicleUrl = json.vehicles[0]
                fetch(vehicleUrl)
                    .then(res => res.json())
                    .then(veh => {
                        nomination.innerHTML = veh.name
                        model.innerHTML = veh.model
                        manufacturer.innerHTML = veh.manufacturer
                    });
            } else {
                nomination.innerHTML = ''
                model.innerHTML = ''
                manufacturer.innerHTML = ''
            }
        });
})