const carRepository = require('../../../infra/car.repository')
const carService= require('../../../services/car.service')



//jest.mock('carRepository')


describe('Car service', () => {
    it('should create a Car when body is valid', async () => {
        const body = {
            name: 'name01',
            model: 'model01',
            color: 'color01',
            year: 'year01'
        }

  let spy = jest.spyOn(carRepository, "create").mockImplementation(() => {return body})
  let response = await carService.create(body)


  expect(spy).toHaveBeenCalled()
  expect(response).toStrictEqual(body)
  

    })
})