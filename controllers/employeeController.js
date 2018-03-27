const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

// Employee CRUD Operations

exports.createEmployee = async (req, res) => {
    checkBody(req, res);
    var count = await Employee.find({ managerId: req.body.managerId }).count();

    if (count > 4) {
        // If manager already has 4 employees 
        handleError("Manager already has 4 employees", res);
    }

    const employee = await (new Employee(req.body)).save();
    res.status(201).json({ "success": "true", msg: "Added successfully" })

}


exports.fetchEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json({ success: true, employeeList: employees });
}


exports.updateEmployee = async (req, res) => {
    checkBody(req, res);
    await Employee.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(201).json({ "success": "true", msg: "Updated successfully" })
}


exports.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.status(201).json({ "success": "true", msg: "Deleted successfully" })
}

function checkBody(req, res) {
    if (!req.body.managerId) {
        // Request does not contain manager Id
        handleError("Must select a manager", res)
    }
}

//Sending back errors
function handleError(errMsg, res) {
    res.json({ "sucess": "false", msg: errMsg });
}


