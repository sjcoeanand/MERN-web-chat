const mongoose = require("mongoose")

const connectDb = async ()=> {
    try {
        const connectn = await mongoose.connect(process.env.MONGO_URI, { })
        console.log(`<= try block connectDb => ${connectn.connection.host}`.blue.bold.underline);
    } catch (error) {
        console.log(`<=====catch block error =======> ${error}`.red.bold.underline );
        process.exit();
    }
}

module.exports = connectDb;