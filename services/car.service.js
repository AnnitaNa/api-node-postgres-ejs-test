const carRepository = require("../DAO/car.repository");

exports.getAll = async () => {
    let cars = await carRepository.getAll()
    let mapped = cars.map((car) => {
        return filterResponse(car);
    });

    return mapped;
};

exports.getById = async (id) => {
    let car = await carRepository.getById(id)

    if (!car) {
        return "não consegui achar o carro"
    }

    let mapped = filterResponse(car);
    return mapped;
};

exports.create = async (params) => {
    
    let car = await carRepository.create(params);

    return "created";
};

exports.update = async (id, params) => {

    let updateCar = await carRepository.update(id, params);

    return updateCar;
};

exports.remove = async (id) => {
    let car = await carModel.module.findByIdAndDelete(id);

    let mapped = filterResponse(car);
    return mapped;
};

function filterResponse(car) {
    return {
        id: car._id,
        name: car.name,
        model: car.model,
        color: car.color,
        year: car.year,
    };
}
