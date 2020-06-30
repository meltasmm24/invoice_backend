const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors =require('cors');
var app = express();
//Configuring express server
app.use( bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//MySQL details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'invoice',
    multipleStatements: true
    });
    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
app.post("/invoiceApi/login",function(req,res){
    console.log(req);
})
    //Router to GET specific learner detail from the MySQL database
    // app.post('/invoiceApi/login' , (req, res) => {
    //     console.log(req.body);
    //     let sql='SELECT * FROM user WHERE user_email ="'+req.body.email+'"';
    // mysqlConnection.query(sql,(err, rows, fields) => {
    // if (!err)
    // res.send(rows);
    // else
    // console.log(err);
    // })
    // } );

        //Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));