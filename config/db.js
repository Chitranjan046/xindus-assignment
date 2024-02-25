const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('db connection success')
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = connectDB;

