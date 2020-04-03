const mongoose = require("mongoose");
const Location = require("./location");

mongoose.Promise = global.Promise;

const startDB = ({ user, pwd }) =>
  mongoose.connect(
    `mongodb+srv://${user}:${pwd}@cluster0-fdsvf.mongodb.net/COVID`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

const models = {
  Location
};

module.exports = {
  startDB,
  models
};
