const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db.js')
const colors = require('colors')
const userRoutes = require('./routes/userRoutes.js')

const app = express();
app.use(express.json()); // for accepting json data from server
dotenv.config()

connectDb();

app.get('/', function(req, res){
    res.send('Welcome to Node Backend')
})

app.use('/app/user',userRoutes);


const PORT = process.env.PORT | 9007;
app.listen(9007, console.log(`<====SERVER STARTED ON ${PORT}====>`.blue.bold.underline))

