const carService = require("../../../services/car.service");
const carController = require("../../../controller/car.controller");
const DataUtils = require("../../utils/dataUtils");
const body = DataUtils.validBody;
const invalidBody = DataUtils.invalidBody;

describe("[ UNIT ] CAR CONTROLLER", () => {
    describe("GET ALL", () => {
        it("should return status 200 and return cars", async () => {
            let cars = DataUtils.allCars;
            let spy = jest
                .spyOn(carService, "getAll")
                .mockImplementation(() => cars);

            const response = await carController.getAll(
                DataUtils.RequestMock("", "", ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(200);
            expect(response.data).toStrictEqual(cars);
        });
    });

    describe("CREATE", () => {
        it("should return status 404 if car is not created", async () => {
            let spy = jest
                .spyOn(carService, "create")
                .mockImplementation(() => null);

            const response = await carController.create(
                DataUtils.RequestMock("", invalidBody, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(404);
            expect(response.data).toBe("couldn't create car");
        });

        it("should return status 200 if car is created", async () => {
            let spy = jest
                .spyOn(carService, "create")
                .mockImplementation(() => body);

            const response = await carController.create(
                DataUtils.RequestMock("", body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(201);
            expect(response.data).toBe("created");
        });
    });

    describe("GET BY ID", () => {
        it("should return status 404 if car ID is not found", async () => {
            let spy = jest
                .spyOn(carService, "getById")
                .mockImplementation(() => null);

            const response = await carController.getById(
                DataUtils.RequestMock({ id: 1 }, "", ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(404);
            expect(response.data).toBe("couldn't find car");
        });

        it("should return status 200 if car ID is found", async () => {
            let spy = jest
                .spyOn(carService, "getById")
                .mockImplementation(() => body);

            const response = await carController.getById(
                DataUtils.RequestMock({ id: 1 }, body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(200);
            expect(response.data).toStrictEqual(body);
        });
    });

    describe("UPDATE", () => {
        it("should return status 400 if car ID is not passed", async () => {
            const response = await carController.update(
                DataUtils.RequestMock("", body, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("ID was not passed");
        });

        it("should return status 404 if car ID is not found", async () => {
            let spy = jest
                .spyOn(carService, "update")
                .mockImplementation(() => null);

            const response = await carController.update(
                DataUtils.RequestMock({ id: 1 }, body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(404);
            expect(response.data).toBe("Couldn't update");
        });

        it("should return status 200 if car Iis updated", async () => {
            let spy = jest
                .spyOn(carService, "update")
                .mockImplementation(() => body);

            const response = await carController.update(
                DataUtils.RequestMock({ id: 1 }, body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(204);
            expect(response.data).toStrictEqual(body);
        });
    });

    describe("REMOVE", () => {
        it("should return status 400 if car ID is not passed", async () => {
            const response = await carController.remove(
                DataUtils.RequestMock("", body, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("ID was not passed");
        });

        it("should return status 404 if car ID is not found", async () => {
            let spy = jest
                .spyOn(carService, "remove")
                .mockImplementation(() => null);

            const response = await carController.remove(
                DataUtils.RequestMock({ id: 1 }, body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(404);
            expect(response.data).toBe("couldn't find car");
        });

        it("should return status 200 if car is removed", async () => {
            let spy = jest
                .spyOn(carService, "remove")
                .mockImplementation(() => body);
                
            const response = await carController.remove(
                DataUtils.RequestMock({ id: 1 }, body, ""),
                DataUtils.ResponseMock()
            );

            expect(spy).toHaveBeenCalled();
            expect(response.status).toBe(204);
            expect(response.data).toStrictEqual(body);
        });
    });
});
