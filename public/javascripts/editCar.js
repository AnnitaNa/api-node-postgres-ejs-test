//const endpoint = "http://localhost:3000/car";


function getId(el) {
    return el.parentNode.parentNode.getElementsByTagName('td')[0].childNodes[0].data;  
}

async function  edit(el) {

    const id =  getId(el);
    getByid(id)

    console.log(id)
}

function getByid(id) {
    const newEndpoint = endpoint + "/" + id

    const config = {
        method: "GET",
        headers: new Headers({
            "content-type": "application/json"
        })
    };


    fetch(newEndpoint, config)
        .then((res) => {
            console.log(res)
            res.json()
        })
        .then((car) => {
            console.log(car)
       
        })

}

function completeForm(car) {
    console.log(car)
    document.querySelector("form").innerHTML = "oi"
}

let a = `
<input type="text" class="form-control mr-sm-2" type="search" placeholder="Nome" id="name" name="name" />
<input type="text" class="form-control mr-sm-2" type="search" placeholder="Modelo" id="model" name="model" />
<input type="text" class="form-control mr-sm-2" type="search" placeholder="Cor" id="color" name="color" />
<input type="text" class="form-control mr-sm-2" type="search" placeholder="Ano" id="year" name="year" />
<div>
  <button type="submit" class="btn btn-primary">Editar</button>
</div>
<a href="/">
  <button type="button" class="btn btn-danger">Voltar</button>
</a> 
`