function getData(form) {
    var formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const endpoint = `http://${window.location.host}/car`;

    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    fetch(endpoint, config).then(() => {
        location.href = "/";
    });
}

document.getElementById("registerCar").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});
