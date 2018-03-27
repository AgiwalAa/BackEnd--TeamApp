//Manager Schema
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const ManagerSchema = new Schema({
    name: {type: String, required: true, max: 100},
    mobile : {type: Number}
  })

 module.exports = mongoose.model('Manager', ManagerSchema);
