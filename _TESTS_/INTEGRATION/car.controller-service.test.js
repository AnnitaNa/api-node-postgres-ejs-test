const connectDb = require('../../database/connectionDb')
const DataUtils = require('../utils/dataUtils');
const carController = require('../../controller/car.controller');
const { seederData } = require('../../database/seeder');


const body = DataUtils.validBody;
const invalidBody = DataUtils.invalidBody;

describe("[ INTEGRATION ] Car controller and service", () => {
    beforeAll( async() => {
        await connectDb()
    })

    describe("GET ALL", () => {
        it("should return status 200 and return all cars", async () => {
            let cars = seederData

            const response = await carController.getAll(
                DataUtils.RequestMock("", "",  {}),
                DataUtils.ResponseMock()
            );
              
            expect(response.status).toBe(200);

            cars.forEach(car => {
                expect(response.data).toMatchObject(
                    expect.arrayContaining(
                        [
                            expect.objectContaining(car) 
                        ]
                    )
                )
            })
        });

        it("should return status 200 and return filtered cars", async () => {
            let cars = seederData
            let filters = {color:'blue'}
            let filterKeys = Object.keys(filters)
            let filteredCars = cars.filter(obj => filterKeys.every(key =>  filters[key] == obj[key]))

            const response = await carController.getAll(
                DataUtils.RequestMock("", "", filters ),
                DataUtils.ResponseMock()
            );
              
            expect(response.status).toBe(200);

            filteredCars.forEach(car => 
                expect(response.data).toMatchObject(
                    expect.arrayContaining(
                        [
                            expect.objectContaining(car) 
                        ]
                    )
                )
            )
        });
    });

    describe("CREATE", () => {
        it("should return status 404 if car is not created", async () => {

            const response = await carController.create(
                DataUtils.RequestMock("", invalidBody, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(400);
            expect(response.data).toBe("all params of car must be passed");
        });

        it("should return status 200 if car is created", async () => {

            const response = await carController.create(
                DataUtils.RequestMock("", body, ""),
                DataUtils.ResponseMock()
            );

            expect(response.status).toBe(201);
            expect(response.data).toBe("created");
        });
    });

})