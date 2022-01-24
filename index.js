const express = require('express')
const app = express()
const db = require('./src/config/db')
const path = require('path')
const port = 3001

const userRouter = require('./src/router/user.router')
const adminRouter = require('./src/router/admin.router')
const noteRouter = require('./src/router/note.router')
//connect to db
db.connectDB()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//router init
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/note', noteRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})