function getAll() {

    const endpoint = 'http://localhost:3000/car'
    const config = {
        method: "GET"
    }


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

getAll()