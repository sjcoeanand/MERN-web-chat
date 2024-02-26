const mongoose = require("mongoose")

const connectDb = async ()=> {
    try {
        const connectn = await mongoose.connect(process.env.MONGO_URI, { })
        console.log(`<= connectDb => ${connectn.connection.host}`.blue.bold.underline);
    } catch (error) {
        console.log("error", error.red.bold.underline);
        process.exit();
    }
}

module.exports = connectDb;