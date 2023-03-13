const {
    create,
    getAll,
    getById,
    update,
    remove,
} = require("../../../infra/car.repository");
const carService = require("../../../services/car.service");
const Utils = require("../../utils/dataUtils");

jest.mock("../../../infra/car.repository", () => ({
    create: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
}));

describe("[ UNIT ] CAR SERVICE", () => {
    beforeEach(() => jest.resetModules());

    describe("Create", () => {
        it("should return null when car name is not unique", async () => {
            getAll.mockImplementationOnce(() => ['duplicate name']);
            let response = await carService.create(Utils.invalidBody);

            expect(response).toBeNull();
        });

        it("should return null when body is invalid", async () => {
            getAll.mockImplementationOnce(() => []);
            create.mockImplementationOnce(() => null);
   
            let response = await carService.create(Utils.validBody);

            expect(response).toBeNull();
        });

        it("should create a Car when body is valid", async () => {
            getAll.mockImplementationOnce(() => []);
            create.mockImplementationOnce(() => Utils.validBody);
  
            let response = await carService.create(Utils.validBody);

            expect(response).toStrictEqual(Utils.validBody);
        });

    
       
    });

    describe("GetAll", () => {
        it("should return all cars registered", async () => {
            getAll.mockImplementationOnce(() => Utils.allCars);
            let response = await carService.getAll();

            expect(response).toStrictEqual(Utils.allCars);
        });

        it("should return filtered cars when filters are passed", async () => {
            getAll.mockImplementationOnce(() => Utils.filteredCars);
            let response = await carService.getAll({ model: "model01" });

            expect(response).toStrictEqual(Utils.filteredCars);
        });
    });

    describe("GetById", () => {
        it("should return a car when passing a registered ID", async () => {
            let car = Utils.cars.car01;
            let carID = Utils.cars.car01._id;

            getById.mockImplementationOnce(() => car);
            let response = await carService.getById(carID);

            expect(response).toStrictEqual(car);
        });

        it("should return null when passing an unregistered ID", async () => {
            let carID = "undefinedID";

            getById.mockImplementationOnce(() => null);
            let response = await carService.getById(carID);

            expect(response).toBeNull();
        });
    });

    describe("Update", () => {
        it("should update car when passing a registered id", async () => {
            let updatedCar = Utils.update.car01.updatedVersion;
            let carId = Utils.cars.car01._id;
            let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;

            update.mockImplementationOnce(() => updatedCar);
            let response = await carService.update(carId, fieldsToUpdate);

            expect(response).toStrictEqual(updatedCar);
        });

        it("should return null when passing an unregistered ID", async () => {
            let carID = "undefinedID";
            let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;

            update.mockImplementationOnce(() => null);
            let response = await carService.update(carID, fieldsToUpdate);

            expect(response).toBeNull();
        });
    });

    describe("Delete", () => {
        it("should delete car when passing a registered ID", async () => {
            let deletedCar = Utils.cars.car01;
            let carID = Utils.cars.car01._id;

            remove.mockImplementationOnce(() => deletedCar);
            let result = await carService.remove(carID);

            expect(result).toStrictEqual(deletedCar);
        });

        it("should return null when passing a unregistered ID", async () => {
            let carID = "unregistereID";

            remove.mockImplementationOnce(() => null);
            let result = await carService.remove(carID);

            expect(result).toBeNull();
        });
    });
});
