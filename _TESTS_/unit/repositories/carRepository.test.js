const { module: carModel } = require("../../../model/car.model");
const carRepository = require("../../../infra/car.repository");
const Utils = require("../../utils/dataUtils");

describe("Create", () => {
    it("should create a car when data is valid", async () => {
        let spy = jest
            .spyOn(carModel, "create")
            .mockImplementationOnce(() => Utils.validBody);

        let result = await carRepository.create(Utils.validBody);

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(Utils.validBody);
    });

    it("should return null when data is invalid", async () => {
        let spy = jest
            .spyOn(carModel, "create")
            .mockImplementationOnce(() => null);

        let result = await carRepository.create(Utils.invalidBody);

        expect(spy).toHaveBeenCalled();
        expect(result).toBeNull;
    });
});

describe("GetAll", () => {
    it("should return all cars registered", async () => {
        let spy = jest
            .spyOn(carModel, "find")
            .mockImplementationOnce(() => Utils.allCars);
        let result = await carRepository.getAll();

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(Utils.allCars);
    });
    it("should return filtered cars when filters are passed", async () => {
        let spy = jest
            .spyOn(carModel, "find")
            .mockImplementationOnce(() => Utils.filteredCars);
        let result = await carRepository.getAll({ model: "model01" });

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(Utils.filteredCars);
    });
});

describe("GetById", () => {
    it("should return a car when passing a registered ID", async () => {
        let car = Utils.cars.car01;
        let carID = Utils.cars.car01._id;

        let spy = jest
            .spyOn(carModel, "findById")
            .mockImplementationOnce(() => car);
        let result = await carRepository.getById(carID);

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(car);
    });

    it("should return null when passing an unregistered ID", async () => {
        let spy = jest
            .spyOn(carModel, "findById")
            .mockImplementationOnce(() => null);
        let result = await carRepository.getById("123");

        expect(spy).toHaveBeenCalled();
        expect(result).toBeNull;
    });
});

describe("Update", () => {
    it("should update car when passing a registered id", async () => {
        let updatedCar = Utils.update.car01.updatedVersion;
        let carId = Utils.cars.car01._id;
        let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;

        let spy = jest
            .spyOn(carModel, "findOneAndUpdate")
            .mockImplementationOnce(() => updatedCar);
        let result = await carRepository.update(carId, fieldsToUpdate);

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(updatedCar);
    });

    it("should return null when passing an unregistered id", async () => {
        let carId = "unregisteredId";
        let fieldsToUpdate = Utils.update.car01.fieldsToUpdate;

        let spy = jest
            .spyOn(carModel, "findOneAndUpdate")
            .mockImplementationOnce(() => null);
        let result = await carRepository.update(carId, fieldsToUpdate);

        expect(spy).toHaveBeenCalled();
        expect(result).toBeNull;
    });
});

describe("Delete", () => {
    it("should delete car when passing a registered ID", async () => {
        let deletedCar = Utils.cars.car01;
        let carID = Utils.cars.car01._id;

        let spy = jest
            .spyOn(carModel, "findByIdAndDelete")
            .mockImplementationOnce(() => deletedCar);
        let result = await carRepository.remove(carID);

        expect(spy).toHaveBeenCalled();
        expect(result).toStrictEqual(deletedCar);
    });

    it("should return null when passing a unregistered ID", async () => {
        let carID = "unregistereID";

        let spy = jest
            .spyOn(carModel, "findByIdAndDelete")
            .mockImplementationOnce(() => null);
        let result = await carRepository.remove(carID);

        expect(spy).toHaveBeenCalled();
        expect(result).toBeNull();
    });
});
