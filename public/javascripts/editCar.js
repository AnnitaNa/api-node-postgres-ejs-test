//const endpoint = "http://localhost:3000/car";
let idParam = "";

function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName("td")[0].childNodes[0]
        .data;
}

async function edit(el) {
    const id = getId(el);
    idParam = id;
    getByid(id);
}

function getByid(id) {
    const newEndpoint = endpoint + "/" + id;

    const config = {
        method: "GET",
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    fetch(newEndpoint, config)
        .then((res) => {
            return res.json();
        })
        .then((car) => {
            completeForm(car);
        });
}

function completeForm(car) {
    document.getElementById("editForm").innerHTML = `
    <b>ID: ${car.id}</b>
    <nav class="navbar navbar-light bg-light">
    <form class="form-inline" id="editForm">
      <input type="text" class="form-control mr-sm-2" placeholder="name: ${car.name}" id="name" name="name">
      <input type="text" class="form-control mr-sm-2" placeholder="model: ${car.model}" id="model" name="model">
      <input type="text" class="form-control mr-sm-2" placeholder="color: ${car.color}" id="color" name="color" >
      <input type="text" class="form-control mr-sm-2"  placeholder="year: ${car.year}" id="year" name="year">
      <button class="btn btn-outline-primary my-2 my-sm-0 " onclick="post(this)" type="submit">Edit</button>
    </form>
    </nav>
    <br>
    `;
}

function post(btn) {
    event.preventDefault();
    const form = btn.parentNode;
    var formData = new FormData(form);
    let changes = Object.fromEntries(formData);

    Object.keys(changes).forEach((key) => {
        if (!changes[key]) {
            delete changes[key];
        }
    });
    console.log(changes);

    const config = {
        method: "PATCH",
        body: JSON.stringify(changes),
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    const newEndpoint = endpoint + "/" + idParam;

    fetch(newEndpoint, config).then(() => {
        location.href = "/";
    });
}
