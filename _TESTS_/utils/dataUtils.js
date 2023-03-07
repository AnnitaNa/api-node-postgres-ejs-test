class DataUtils {

    static RequestMock = (params, body, query) => ({
        params,
        body,
        query
    })

    static ResponseMock = () => ({
        status: (statusCode) =>  ({
            json: (message) =>  ({
                status: statusCode,
                data: message
            
            })
        })

    })
         
    

    static validBody = {
        name: "name00",
        model: "model00",
        color: "color00",
        year: "year00"
    }

    static invalidBody = {
        name: "name00",
        model: "model00",
        color: "color00"
    }

    static cars = {
        car01: {
            _id: 'ID1',
            name: "name01",
            model: "model01",
            color: "color01",
            year: "year01"
        },
        car02: {
            _id: 'ID2',
            name: "name02",
            model: "model02",
            color: "color02",
            year: "year02"
        }
    }

    static allCars = [
        this.cars.car01,
        this.cars.car02
    ]

    static filteredCars = [
        this.cars.car01
    ]

    static update = {
        car01: {
            fieldsToUpdate: {
                color: 'updated-color',
                name: '',
                test: 'it should not be added'
            },
            updatedVersion: {
                _id: 'ID1',
                name: "name01",
                model: "model01",
                color: 'updated-color',
                year: "year01"
            }
        }
    }

}

module.exports = DataUtils