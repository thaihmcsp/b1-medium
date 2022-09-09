const mongoose = require("mongoose");

exports.connectDB = async () => {
    // await mongoose.connect("mongodb://localhost/b1-medium");
  await mongoose.connect(
    "mongodb+srv://ketnoidb:ketnoidb@cluster0.yogryju.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("mongoDB connected");
};
