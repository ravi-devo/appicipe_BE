const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connection Established");
    } catch (error) {
        console.log("Connection string", process.env.CONNECTION_STRING)
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;