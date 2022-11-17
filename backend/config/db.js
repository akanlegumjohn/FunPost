const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI);
    console.log(
      `Mongodb successfully connected ${conn.connection.host}`.cyan.bold
    );
  } catch (error) {
    console.log(error);
    //Terminate the process if there is a fatal exception not handled
    process.exit(1);
  }
};

module.exports = connectToDb;
