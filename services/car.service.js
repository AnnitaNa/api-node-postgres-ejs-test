const carRepository = require("../infra/car.repository");

exports.getAll = async (filters) => {
    let cars = await carRepository.getAll(filters)
    let mapped = cars.map((car) => {
        return filterResponse(car);
    });

    return mapped;
};

exports.getById = async (id) => {
    let car = await carRepository.getById(id)

    if (!car) {
        return 
    }

    let mapped = filterResponse(car);
    return mapped;
};

exports.create = async (params) => {
    try {
        let car = await carRepository.create(params);
        return car;
    }
    
    catch {
        return null
    }
   
};

exports.update = async (id, params) => {

    let updateCar = await carRepository.update(id, params);

    return updateCar;
};

exports.remove = async (id) => {
    let car = await carRepository.remove(id);
    return car;
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
