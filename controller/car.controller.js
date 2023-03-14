const carService = require("../services/car.service");


class CarController {
    async getAll(req, res) {
        const filters = req.query;
        let cars = await carService.getAll(filters);
        
        return res.status(200).json(cars);
    }

    async getById(req, res) {
        const { id } = req.params;
        if(!id) {
            return res.status(400).json("ID was not passed");
        }

        let car = await carService.getById(id);

        if (!car) {
          return  res.status(404).json("couldn't find car");
        }
        return res.status(200).json(car);
    }

    async create(req, res) {

        const {name, model, color, year} = req.body
        if(!name || !model | !color || !year) {
            return res.status(400).json("all params of car must be passed");
        }
        
        let car = await carService.create(req.body);

        if (!car) {
           return res.status(409).json("couldn't create car because name is not unique");
        } else {
           return res.status(201).json('created');
           
        }
    }

    async update(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json("ID was not passed");
        }


            let updateCar = await carService.update(id, req.body);
        if(!updateCar) {
            return  res.status(404).json("could1nt update car");
        }

        return res.status(204).json(updateCar); 
    }

    async remove(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json("ID was not passed");
        }

        let car = await carService.remove(id, req.body);

        if (!car) {
            return  res.status(404).json("couldn't find car");
        }

        return res.status(204).json(car);

           

        
       
    }
}

module.exports = new CarController();
