const endpoint = "http://localhost:3000/car";
const config = {
    method: "GET",
};

function getAll(endpoint) {
    fetch(endpoint, config)
        .then((res) => res.json())
        .then((cars) => {
            document.querySelector("tbody").innerHTML = cars
                .map((car) => {
                    return `<tr>
                        <td>${car.id}</td>
                        <td>${car.name}</td>
                        <td>${car.model}</td>
                        <td>${car.color}</td>
                        <td>${car.year}</td>
                    </tr>
                    `;
                })
                .join("");
        });
}

getAll(endpoint);

function getFilters(form) {
    var formData = new FormData(form);

    let filters = Array.from(formData.entries())
    .filter(
        ([key, value]) => value != ""
    )
    .map(keyValue => keyValue.join("="))
    .join("&&")

    const newEndpoint = endpoint + "?" + filters;

    getAll(newEndpoint)
}

document.getElementById("filterCar").addEventListener("submit", function (e) {
    e.preventDefault();
    getFilters(e.target);
});
