const mongoose = require("mongoose")

const uri = "mongodb://127.0.0.1:27017/Human_Resource"

const connect = async () => {
    try {
        const client = await mongoose.connect(uri)
        console.log("Connected to database")
        return client
    }
    catch (err) {
        console.log(`Error in connecting with database ${err}`)
    }
}

module.exports = connect