var pg = require('pg'),
    connect = require('../Connection/connection.js');

var motorista = {
    login: (req, res) => {
        pg.connect(connect.conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            var p = req.body;
            client.query({
                text: 'SELECT FCFN_Autenticacao($1, $2);',
                values: [p.pNom_Apelido, p.pNom_Senha]
            }, function(err, result) {
                done();
                if (err) {
                    return console.error('error running query', err);
                }
                res.send(result.rows[0]);
            });
        });
    },

    jornada: (req, res) => {
        pg.connect(connect.conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            var p = req.body;
            console.log(p);
            client.query({
                text: 'SELECT FCFN_AndamentoJornada($1, $2, $3);',
                values: [p.pCod_RegistroJornada, p.pNum_SeqlMotorista, p.pInd_Localizacao]
            }, function(err, result) {
                done();
                if (err) {
                    return console.error('error running query', err);
                }
                var retorno = result.rows[0].fcfn_andamentojornada;
                res.send(retorno);
            });
        });
    },

    funcionarios: (req, res) => {
        pg.connect(connect.conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query('SELECT * from FC_RegistroJornada;', function(err, result) {
                done();
                if (err) {
                    return console.error('error running query', err);
                }
                res.send(result.rows);
            });
        });
    }
}

module.exports = motorista;