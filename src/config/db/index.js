const mongoose = require('mongoose')
// const URL = <mongodb+srv://mongo-user:<password>@cluster-mongo-test.ieqay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority<
const URL = 'mongodb+srv://momcare:momcare@cluster0.acsmm.mongodb.net/momcare?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(
      URL,
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )

    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = { connectDB }
