const carModel = require("../model/car.model");

exports.getAll = async (filters) => {
    console.log('repository',filters)
    let cars = await carModel.module.find(filters);
    return cars;
};

exports.getById = async (id) => {
    let car = await carModel.module.findById(id);
    return car;
};

exports.create = async (params) => {
    let car = await carModel.module.create(params);

    return car;
};

exports.update = async (id, params) => {
    let updateCar = await carModel.module.findOneAndUpdate({ _id: id }, params);
    return updateCar;
};

exports.remove = async (id) => {
    let car = await carModel.module.findByIdAndDelete(id);
    return car;
};
