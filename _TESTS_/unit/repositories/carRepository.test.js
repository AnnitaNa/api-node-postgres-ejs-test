const carRepository = require("../../../infra/car.repository");
const Utils = require("../../utils/dataUtils");

//variables must start with mock to workin inside a jest.mock -> jest.fn()
let mockFn = jest.fn();

jest.mock("../../../prisma/client.js", () => ({
    prisma: {
        car: {
            create: jest.fn(() => mockFn),
            findMany: jest.fn(() => mockFn),
            findFirst: jest.fn(() => mockFn),
            update: jest.fn(() => mockFn),
            delete: jest.fn(() => mockFn),
        },
    },
}));

describe("[ UNIT ] CAR REPOSITORY", () => {
    describe("Create", () => {
        it("should create a car when data is valid", async () => {
            mockFn = Utils.validBody;

            let result = await carRepository.create(Utils.validBody);

            expect(result).toStrictEqual(Utils.validBody);
        });

        it("should return null when data is invalid", async () => {
            mockFn = Utils.invalidBody;

            let result = await carRepository.create(Utils.invalidBody);

            expect(result).toBeNull;
        });
    });

    describe("GetAll", () => {
        it("should return all cars registered", async () => {
            mockFn = Utils.allCars;

            let result = await carRepository.getAll();

            expect(result).toStrictEqual(Utils.allCars);
        });

        it("should return filtered cars when filters are passed", async () => {
            mockFn = Utils.filteredCars;
            let result = await carRepository.getAll({ model: "model01" });

            expect(result).toStrictEqual(Utils.filteredCars);
        });
    });

    describe("GetById", () => {
        it("should return a car when passing a registered ID", async () => {
            let car = Utils.cars.car01;
            let carID = Utils.cars.car01._id;
            mockFn = car;

            let result = await carRepository.getById(carID);

            expect(result).toStrictEqual(car);
        });

        it("should return null when passing an unregistered ID", async () => {
            mockFn = null;
            let result = await carRepository.getById("invalid ID");

            expect(result).toBeNull;
        });
    });

    describe("Update", () => {
        it("should update car when passing a registered id", async () => {
            let updatedCar = Utils.update.car01.updatedVersion;
            let carId = Utils.cars.car01._id;
            let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;
            mockFn = updatedCar;

            let result = await carRepository.update(carId, fieldsToUpdate);

            expect(result).toStrictEqual(updatedCar);
        });

        it("should return null when passing an unregistered id", async () => {
            let carId = "unregisteredId";
            let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;
            mockFn = null;

            let result = await carRepository.update(carId, fieldsToUpdate);

            expect(result).toBeNull;
        });
    });

    describe("Delete", () => {
        it("should delete car when passing a registered ID", async () => {
            let deletedCar = Utils.cars.car01;
            let carID = Utils.cars.car01._id;
            mockFn = deletedCar;

            let result = await carRepository.remove(carID);

            expect(result).toStrictEqual(deletedCar);
        });

        it("should return null when passing a unregistered ID", async () => {
            let carID = "unregistereID";
            mockFn = null;
            let result = await carRepository.remove(carID);

            expect(result).toBeNull();
        });
    });
});
