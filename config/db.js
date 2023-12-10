const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database `

    );
  } catch (error) {
    console.log(`MONGO Connect Error `);
  }
};

module.exports = connectDB;
