const carRepository = require("../infra/car.repository");

exports.getAll = async (filters) => {
    let cars = await carRepository.getAll(filters);

    return cars;
};

exports.getById = async (id) => {
    let car = await carRepository.getById(id);

    if (!car) null;

    return car;
};

exports.create = async (params) => {
    const isCar = await carRepository.getAll({ name: params.name });
    if (isCar.length != 0) {
        return null;
    }

    let car = await carRepository.create(params);
    if (!car) null;

    return car;
};

exports.update = async (id, params) => {
    // empty params
    Object.keys(params).forEach((key) => {
        if (!params[key]) {
            delete params[key];
        }
    });

    try {
        let updateCar = await carRepository.update(id, params);
        return updateCar;
    } catch {
        return null;
    }
};

exports.remove = async (id) => {
    try {
        let car = await carRepository.remove(id);
        return car;
    } catch (e) {
        return null;
    }
};
