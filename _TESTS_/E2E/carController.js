// const request = require('supertest')
// const app = require('../../../app')
// const carService= require('../../../services/car.service')
// const CarController = require("../../../controller/car.controller")
// const carController = require('../../../controller/car.controller')

// const body = {
//     name: 'name01',
//     model: 'model01',
//     color: 'color01',
//     year: 'year01'
// }


// // jest.mock('../../../services/car.service', () => {
// //     const mockCarService = {
// //         getAll: jest.fn(),
// //         getById: jest.fn(),
// //         create: jest.fn(),
// //         update: jest.fn(),
// //         remove: jest.fn()
// //       };
// //       return { carService: jest.fn(() => mockCarService) };
// // })
// //create = jest.fn().mockResolvedValue(body)

// describe('[ E2E ] CAR CONTROLLER', () => {
//     // it('should create a car if the body is correct', async () => {
//     //     let spy =  jest.spyOn(carService, "create").mockImplementation(() => {return body})
//     //     const response = await carController.create()
        
//     //     expect(spy).toHaveBeenCalled()
//     //     expect(response.statusCode).toBe(201)
//     //     expect(response.body).toStrictEqual(body)

//     // })

//     // it('should create a car if the body is correct', async () => {
//     //     let spy =  jest.spyOn(carService, "create").mockImplementation(() => undefined)
//     //     const response = await request(app).post('/car').send(body)
        
//     //     expect(spy).toHaveBeenCalled()
//     //     expect(response.statusCode).toBe(404)
//     //     expect(response.body).toBe("couldn't find car")

//     // })

//     // it('should get all cars', async () => {

//     //     // const response = await request(app).get('/car')
//     //     // expect(response.statusCode).toBe(200)
    
    
//     // })
// })
    

