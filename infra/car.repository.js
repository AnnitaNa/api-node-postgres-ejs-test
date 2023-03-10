
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

exports.getAll = async (filters) => {
    let cars = await prisma.car.findMany()
    return cars;
};

exports.getById = async (id) => {
    let car = await carModel.findById(id);
    return car;
};


exports.create = async (params) => {
    let car = await prisma.car.create({
        data: params
    })
    return car;
};

exports.update = async (id, params) => {
    let updateCar = await carModel.findOneAndUpdate({ _id: id }, params, {new: true});
    return updateCar;
};

exports.remove = async (id) => {
    let car = await carModel.findByIdAndDelete(id);
    return car;
};
