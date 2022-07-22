const mongoose = require('mongoose');

exports.connectDB = async () => {
    await mongoose.connect('mongodb://localhost/b1-medium');
    console.log('mongoDB connected');
}