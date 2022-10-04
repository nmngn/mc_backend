const express = require('express')
const app = express()
const db = require('./src/config/db')
const path = require('path')

const cors = require('cors');
require('dotenv/config');

const transactionRouter = require('./src/router/transaction.router')
const userRouter = require('./src/router/user.router')
//connect to db
db.connectDB()

app.use(cors());
app.options('*', cors())

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//router init
app.use('/transaction', transactionRouter);
app.use('/user', userRouter)

var server = app.listen(process.env.PORT || 3001, function() {
  var port = server.address().port;
  console.log("Express is working on port" + port)
})