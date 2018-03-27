const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const EmployeeSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    mobile : {type: Number},
    managerId : {type : Schema.ObjectId, ref :'Manager', required : 'true'}
  })

 module.exports = mongoose.model('Employee', EmployeeSchema);
