const carRepository = require("../infra/car.repository");

exports.seeder = async () => {
    for (let car of data) {
        await carRepository.create(car);
    }
};

const data = [
    {
        name: "car01",
        model: "model01",
        color: "blue",
        year: "1993",
    },
    {
        name: "car02",
        model: "model02",
        color: "white",
        year: "1990",
    },
    {
        name: "car03",
        model: "model01",
        color: "white",
        year: "1990",
    },
    {
        name: "car04",
        model: "model02",
        color: "blue",
        year: "1993",
    },
];

exports.seederData = data