const carModel = require('../model/car.model')

class Car {
    async getAll(req, res) {
        let cars = await carModel.module.find();
        let mapped = cars.map(car => {
            return filterResponse(car)
        })
        res.send(mapped)
    }

    async getById(req, res) {
        const {id} = req.params;
        let car = await carModel.module.findById(id);

        if(!car) {
            return res.send("não consegui achar o carro")
        }

        let mapped = filterResponse(car)
        res.send(mapped)
    }

    async create(req, res) {
        const {name, model, color, year} = req.body;
        let car = await carModel.module.create({
            name,
            model,
            color,
            year
        })

        res.send("created")
    }

    async update(req, res) {
        const {id} = req.params;
        let car = await carModel.module.findById(id);

        if(!car) {
            return res.send("não consegui achar o carro")
        }

        let updateCar = await carModel.module.updateOne({_id: id}, req.body)

        console.log(req.body)

        res.send(updateCar)
    }

    async remove(req, res) {
        const {id} = req.params;
        let car = await carModel.module.findByIdAndDelete(id);


        let mapped = filterResponse(car)
        res.send(mapped)
    }
}

module.exports = new Car();

function filterResponse(car) {
 return {
        id: car._id,
        name: car.name,
        model: car.model,
        color: car.color,
        year: car.year
 }
}