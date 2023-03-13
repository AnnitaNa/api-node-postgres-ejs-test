
const {PrismaClient} = require('@prisma/client')


exports.getAll = async (filters) => {

    let cars = await PrismaClient.car.findMany({
        where: filters
    })

    return cars;
};

exports.getById = async (id) => {
    let car = await PrismaClient.car.findFirst({
        where: {
            id: Number(id)
        }
    })

    return car;
};


exports.create = async (params) => {
   
    let car = await PrismaClient.car.create({
        data: params
    })
    return car;
};

exports.update = async (id, params) => {
    let updateCar = await PrismaClient.car.update({
        where: {
            id: Number(id)
        },
        data: params
    })
   
    return updateCar;
};

exports.remove = async (id) => {
    let car = await PrismaClient.car.delete({
        where: {
            id: Number(id)
        }
    })
    return car;
};
