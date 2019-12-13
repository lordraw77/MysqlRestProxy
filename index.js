const express = require('express');
const app = express();
var mysql = require('mysql');


app.use(express.json())
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
            }
            else{
                console.log('Error performing Query.');
                var error = "{ 'error': 'Error performing Query' }";
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
