const endpoint = 'http://localhost:3000/car'
const config = {
    method: "GET"
}

function getAll(endpoint) {

    fetch(endpoint, config)
    .then (res => res.json())
    .then(cars => {
   
        document.querySelector("tbody").innerHTML = cars
        .map(car => {
            return `<tr>
                        <td>${car.id}</td>
                        <td>${car.name}</td>
                        <td>${car.model}</td>
                        <td>${car.color}</td>
                        <td>${car.year}</td>
                    </tr>
                    `
        })
    .join("")
    })
}

getAll(endpoint)

function getData(form) {

    var formData = new FormData(form);
    const data = Object.fromEntries(formData);
    let filters = Object.entries(data)

    let filtersarr = []
    for (let filter of filters) {
        if (filter[1]) {
            filterParam = `${filter[0]}=${filter[1]}`
            filtersarr.push(filterParam)
        }
    }
    const newEndpoint = endpoint + '?' + filtersarr.join('&&')

    getAll(newEndpoint)
}

document.getElementById("filterCar").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});
