const mongoose = require("mongoose");

let databaseUrl = `${process.env.DB_URI}?retryWrites=true&w=majority`;
let databaseConfiguration = {
  minPoolSize: 1,
  maxPoolSize: 20,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 60000,
  serverSelectionTimeoutMS: 60000,
};

const connectToDatabase = async () => {
  try {
    mongoose.set("debug", true);
    await mongoose.connect(databaseUrl, databaseConfiguration);
    console.info("Database connected successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
