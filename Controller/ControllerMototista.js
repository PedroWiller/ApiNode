var motoristaRepository = require('../Repository/motorista.js')

var driverRoute = function(app) {
    app.post('/motorista/login', motoristaRepository.login);
    app.post('/motorista/jornada', motoristaRepository.jornada);
    app.get('/funcionarios', motoristaRepository.funcionarios);
}

module.exports = driverRoute;