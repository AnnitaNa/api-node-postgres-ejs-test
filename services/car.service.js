const carRepository = require("../infra/car.repository");

exports.getAll = async (filters) => {
    let cars = await carRepository.getAll(filters)

    return cars;
};

exports.getById = async (id) => {
    let car = await carRepository.getById(id)

    if (!car) null

    return car
};


exports.create = async (params) => {
    
        let car = await carRepository.create(params);
        return car;
};

exports.update = async (id, params) => {
    
    // empty params
    Object.keys(params).forEach(key => {
        if (!params[key]) {
            delete params[key];
        } 
      });
    let updateCar = await carRepository.update(id, params);

    return updateCar;
};

exports.remove = async (id) => {
    let car = await carRepository.remove(id);
    return car;
};

