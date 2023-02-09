const {module: carModel} = require("../../../model/car.model")
const carRepository = require("../../../infra/car.repository")

const body = {
    name: 'name01',
    model: 'model01',
    color: 'color01',
    year: 'year01'
}

const mocked = {
    create: () => {return body}
}

describe("Car Repository", () => {
    it('should create a car when data is valid', async () => {
        let spy = jest.spyOn(carModel, "create").mockImplementationOnce(() => body )
      
      
        let result = await carRepository.create(body)
        expect(spy).toHaveBeenCalled()
    })
})