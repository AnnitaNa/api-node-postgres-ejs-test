const endpoint = "http://localhost:3000/car";


function getAll(endpoint) {
    const config = {
        method: "GET",
    };
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
                        <td>
                            <a class="edit" title="Edit" onclick="edit(this)">Edit</a>
                            <a class="delete" title="Delete" onclick="remove(this)">Delete</a>
                        </td>
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

function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName('td')[0].childNodes[0].data;  
}

function remove(el) {
    const id = getId(el)
    console.log(id)

    const config = {
        method: "DELETE",
        headers: new Headers({
            "content-type": "application/json"
        })
    };

    const newEndpoint = endpoint + "/" + id

    fetch(newEndpoint, config).then (() => {
        getAll(endpoint)
    })
}
