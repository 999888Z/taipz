const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env.NODE_ENV)
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;