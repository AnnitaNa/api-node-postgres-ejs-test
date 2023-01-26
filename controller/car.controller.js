const carService = require("../services/car.service");

class CarController {
    async getAll(req, res) {
        let cars = await carService.getAll();
        console.log(cars);
        res.send(cars);
    }

    async getById(req, res) {
        const { id } = req.params;
        let car = await carService.getById(id);

        res.send(car);
    }

    async create(req, res) {
        let car = await carService.create(req.body);

        res.send("created");
    }

    async update(req, res) {
        const { id } = req.params;
        let updateCar = await carService.update(id, req.body);

        res.send(updateCar);
    }

    async remove(req, res) {
        const { id } = req.params;
        let car = await carService.remove(id);

        res.send("deleted");
    }
}

module.exports = new CarController();
