const carService = require("../services/car.service");


class CarController {
    async getAll(req, res) {
        const filters = req.query;

        let cars = await carService.getAll(filters);
        res.status(200).send(cars);

    }

    async getById(req, res) {
        const { id } = req.params;
        let car = await carService.getById(id);

        if (!car) {
            res.status(404).send("couldn't find car");
        }
        res.send(car);
    }

    async create(req, res) {
        let car = await carService.create(req.body);

        console.log("car",car)
        if (!car) {
            res.status(404).send("couldn't create car");
        } else {
            res.status(201).send(car);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        let updateCar = await carService.update(id, req.body);

        if (!updateCar) {
            res.status(404).send("couldn't update");
        } else {
            res.status(204).send(updateCar);
        }
        
    }

    async remove(req, res) {
        const { id } = req.params;
        let car = await carService.remove(id);

        if (!car) {
            res.status(404).send("couldn't find car");
        } else {
            res.status(204).send(car);
        }
       
    }
}

module.exports = new CarController();
