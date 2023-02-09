const {module: carModel} = require("../model/car.model");

exports.getAll = async (filters) => {
    let cars = await carModel.find(filters);
    return cars;
};

exports.getById = async (id) => {
    let car = await carModel.findById(id);
    return car;
};

exports.create = async (params) => {
    let car = await carModel.create(params);
    return car;
};

exports.update = async (id, params) => {
    let updateCar = await carModel.findOneAndUpdate({ _id: id }, params, {new: true});
    console.log('update', updateCar)
    return updateCar;
};

exports.remove = async (id) => {
    let car = await carModel.findByIdAndDelete(id);
    console.log('car', car)
    return car;
};
