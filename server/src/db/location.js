const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  FIPS: {
    type: Number,
    required: false,
    unique: false
  },
  Admin2: {
    type: String,
    required: false
  },
  Province_State: {
    type: String,
    required: false
  },
  Country_Region: {
    type: String,
    required: true
  },
  Last_Update: {
    type: String,
    required: true
  },
  Lat: {
    type: Number,
    required: true
  },
  Long_: {
    type: Number,
    required: true
  },
  Confirmed: {
    type: Number,
    required: true
  },
  Deaths: {
    type: Number,
    required: true
  },
  Recovered: {
    type: Number,
    required: true
  },
  Active: {
    type: Number,
    required: true
  },
  Combined_Key: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Location", LocationSchema, "confirmed_cases");
