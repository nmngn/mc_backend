const express = require('express')
const app = express()
const db = require('./src/config/db')
const path = require('path')

const cors = require('cors');
require('dotenv/config');

const userRouter = require('./src/router/user.router')
const adminRouter = require('./src/router/admin.router')
const noteRouter = require('./src/router/note.router')
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
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/note', noteRouter)

var server = app.listen(process.env.PORT || 3001, function() {
  var port = server.address().port;
  console.log("Express is working on port" + port)
})