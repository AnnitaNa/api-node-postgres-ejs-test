const carService = require("../services/car.service");

class CarController {
    async getAll(req, res) {
        const filters = req.query

        let cars = await carService.getAll(filters);
        res.send(cars);
    }

    async getById(req, res) {
        const { id } = req.params;
        let car = await carService.getById(id);

        if (!car) {
            res.status(404).send("couldn't find car")
        } 
        res.send(car);
    }

    async create(req, res) {
        let car = await carService.create(req.body);

        if (!car) {
            res.status(404).send("couldn't create car")
        } else {
            res.status(201).send("created");
        }
       
    }

    async update(req, res) {
        const { id } = req.params;
        let updateCar = await carService.update(id, req.body);

        if (!updateCar) {
            res.status(404).send("couldn't update")
        } 
        res.status(204).send(updateCar)
    }

    async remove(req, res) {
        const { id } = req.params;
        let car = await carService.remove(id);

        if (!car) {
            res.status(404).send("couldn't find car")
        } 
        res.status(204).send(car);
    }
}

module.exports = new CarController();
