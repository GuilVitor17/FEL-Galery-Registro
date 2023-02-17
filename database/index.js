const mongoose = require('mongoose')

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/admin");
mongoose.Promise = global.Promise

module.exports = mongoose