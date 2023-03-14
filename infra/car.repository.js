
const {prisma} = require('../prisma/client')


exports.getAll = async (filters) => {

    let cars = await prisma.car.findMany({
        where: filters
    })

    return cars;
};

exports.getById = async (id) => {
    let car = await prisma.car.findFirst({
        where: {
            id: Number(id)
        }
    })

    return car;
};


exports.create = async (params) => {
   
    let car = await prisma.car.create({
        data: params
    })
    return car;
};

exports.update = async (id, params) => {
    let updateCar = await prisma.car.update({
        where: {
            id: Number(id)
        },
        data: params
    })
   
    return updateCar;
};

exports.remove = async (id) => {
    let car = await prisma.car.delete({
        where: {
            id: Number(id)
        }
    })
    return car;
};
