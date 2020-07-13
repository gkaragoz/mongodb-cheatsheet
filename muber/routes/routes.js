const DriversController = require('../controllers/drivers_controller')

module.exports = (app) => {
    // Watch for incoming requests of method GET
    // to the route http://localhost:3050/api
    app.get('/api', DriversController.greeting)
    app.post('/api/drivers', DriversController.create)
    app.put('/api/drivers/:id', DriversController.edit)
    app.delete('/api/drivers/:id', DriversController.delete)
}