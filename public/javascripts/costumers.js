function getAll() {

    const endpoint = 'http://localhost:3000/car'
    const config = {
        method: "GET"
    }

    fetch(endpoint, config).then(res => {
        console.log('entrei no fetch')
        console.log(res)}).catch(() => {console.log("deu ruim")})
}

getAll()