const express = require('express');
const app = express();
var mysql = require('mysql');

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next();
  });
  

app.post(
    '/query',
    (req, res) => {
        console.log(req.body);
        var  bodyjson = req.body;
        var mysqlConnection = mysql.createConnection({
            host:  bodyjson.host,
            user:  bodyjson.user,
            password:  bodyjson.password,
            database:  bodyjson.database
        });
        mysqlConnection.connect();
        mysqlConnection.query( bodyjson.query, function (err, rows, fields) {
            if (!err) {
                res.json(rows);
                console.log(rows);
            }
            else{
                console.log(err.message);
                console.log('Error performing Query: ' +err.message );
                var error = "{ 'error': 'Error performing Query err: " +err.message + "' }";
                res.json(error);
            }
        });
        mysqlConnection.end();
    }
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
