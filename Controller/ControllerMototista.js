var driverRoute = function(conString, pg, app) {
    app.post('/mototista/login', function(req, res) {
        pg.connect(conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            console.log("connected to database");
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
    })

    app.post('/motorista/jornada', function(req, res) {
        pg.connect(conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            console.log("connected to database");
            var p = req.body;

            client.query({
                text: 'SELECT FCFN_AndamentoJornada($1, $2, $3);',
                values: [p.pCod_RegistroJornada, p.pNum_SeqlMotorista, p.pInd_Localizacao]
            }, function(err, result) {
                done();
                if (err) {
                    return console.error('error running query', err);
                }
                var retorno = result.rows[0].fcfn_andamentojornada;
                console.log((retorno));
                res.send(retorno);
            });
        });
    });

    app.get('/funcionarios', function(req, res) {
        pg.connect(conString, function(err, client, done) {
            done();
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            console.log("connected to database");
            client.query('SELECT * from FC_RegistroJornada;', function(err, result) {
                done();
                if (err) {
                    return console.error('error running query', err);
                }
                res.send(result.rows);
            });
        });
    })
}

module.exports = driverRoute;