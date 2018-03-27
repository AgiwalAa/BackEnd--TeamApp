const mongoose = require('mongoose')
const Manager = mongoose.model('Manager')

exports.createManager = async (req, res) => {
    const manager = await (new Manager(req.body)).save();
    res.status(201).json({ "success": "true", msg: "Added successfully"})
}


exports.fetchManagers = async (req, res) => {
    const managers = await Manager.find();
    res.status(200).json({ success: true, managerList: managers });
}


exports.updateManager = async (req, res) => {
    await Manager.findByIdAndUpdate(req.params.id, { $set: req.body });
    const managers = await Manager.find();
    res.status(201).json({ "success": "true", msg: "Updated successfully"})
}


exports.deleteManager = async (req, res) => {
    await Manager.findByIdAndRemove(req.params.id);
    res.status(201).json({ "success": "true", msg: "Deleted successfully" })
}

function handleError(code, errMsg) {
    res.status(code || 500).json({ "sucess": "false", errorMsg: errMsg });
}
