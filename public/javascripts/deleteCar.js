function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName("td")[0].childNodes[0]
        .data;
}

function remove(el) {
    const id = getId(el);

    const config = {
        method: "DELETE",
        headers: new Headers({
            "content-type": "application/json",
        }),
    };

    const newEndpoint = endpoint + "/" + id;

    fetch(newEndpoint, config).then(() => {
        getAll(endpoint);
    });
}
