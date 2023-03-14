const DataUtils = require("../utils/dataUtils");
const carController = require("../../controller/car.controller");
const { seedData } = require("../../prisma/seedData");
const { prisma } = require("../../prisma/client");
const { response } = require("express");

const body = DataUtils.validBody;
const invalidBody = DataUtils.invalidBody;

describe("[ INTEGRATION ] Car controller and service", () => {
    beforeAll(async () => {
        await prisma.$connect(async () => {
            await prisma.car.deleteMany({});
            await prisma.car.createMany({
                data: seedData,
            });
        });
    });

    afterAll(async () => {
        await prisma.car.deleteMany({});
        await prisma.car.createMany({
            data: seedData,
        });
        await prisma.$disconnect();
    });

    describe("GET ALL", () => {
        it("should return status 200 and return all cars", async () => {
            let cars = seedData;

            const response = await carController.getAll(
                DataUtils.RequestMock("", "", {}),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(200);

            cars.forEach((car) => {
                expect(response.data).toMatchObject(
                    expect.arrayContaining([expect.objectContaining(car)])
                );
            });
        });

        it("should return status 200 and return filtered cars", async () => {
            let cars = seedData;
            let filters = { color: "blue" };
            let filterKeys = Object.keys(filters);
            let filteredCars = cars.filter((obj) =>
                filterKeys.every((key) => filters[key] == obj[key])
            );

            const response = await carController.getAll(
                DataUtils.RequestMock("", "", filters),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(200);

            filteredCars.forEach((car) =>
                expect(response.data).toMatchObject(
                    expect.arrayContaining([expect.objectContaining(car)])
                )
            );
        });
    });

    describe("CREATE", () => {
        it("should return status 400 if all car params are not passed", async () => {
            const response = await carController.create(
                DataUtils.RequestMock("", invalidBody, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("all params of car must be passed");
        });

        it("should return status 201 if car is created", async () => {
            const response = await carController.create(
                DataUtils.RequestMock("", body, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(201);
            expect(response.data).toBe("created");
        });

        it("should return status 409 if car name is not unique", async () => {
            let notUniqueCar = seedData[0];
            const response = await carController.create(
                DataUtils.RequestMock("", notUniqueCar, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(409);
            expect(response.data).toBe(
                "couldn't create car because name is not unique"
            );
        });
    });

    describe("GET BY ID", () => {
        it("should return status 404 if car is not found", async () => {
            const response = await carController.getById(
                DataUtils.RequestMock({ id: 123455678 }, "", ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(404);
            expect(response.data).toBe("couldn't find car");
        });

        it("should return status 400 if id is not passed", async () => {
            const response = await carController.getById(
                DataUtils.RequestMock("", "", ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("ID was not passed");
        });

        // it('should return status 200 if car is found', async() => {
        // let carId = ?
        //     const response = await carController.getById(
        //         DataUtils.RequestMock(carID, "", ""),
        //         DataUtils.ResponseMock()
        //     );

        //     expect(response.status).toBe(404);
        //     expect(response.data).toBe("couldn't find car");
        // })
    });

    describe("UPDATE", () => {
        it("should return status 404 if car is not found", async () => {
            const response = await carController.update(
                DataUtils.RequestMock({ id: 123455678 }, seedData[1], ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(404);
        });

        it("should return status 400 if id is not passed", async () => {
            const response = await carController.update(
                DataUtils.RequestMock("", "", ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("ID was not passed");
        });

        // it('should return status 200 if car is found', async() => {
        // let carId = ?
        //     const response = await carController.update(
        //         DataUtils.RequestMock(carID, "", ""),
        //         DataUtils.ResponseMock()
        //     );

        //     expect(response.status).toBe(404);
        //     expect(response.data).toBe("couldn't find car");
        // })
    });

    describe("DELETE", () => {
        it("should return status 404 if car is not found", async () => {
            const response = await carController.update(
                DataUtils.RequestMock({ id: 123455678 }, seedData[1], ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(404);
        });

        it("should return status 400 if id is not passed", async () => {
            const response = await carController.update(
                DataUtils.RequestMock("", "", ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("ID was not passed");
        });

        // it('should return status 200 if car is found', async() => {
        // let carId = ?
        //     const response = await carController.update(
        //         DataUtils.RequestMock(carID, "", ""),
        //         DataUtils.ResponseMock()
        //     );

        //     expect(response.status).toBe(404);
        //     expect(response.data).toBe("couldn't find car");
        // })
    });
});
