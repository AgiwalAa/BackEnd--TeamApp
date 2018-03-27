const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

const {catchError} = require('../handlers/errorHandler');

// Employee
router.post('/create', catchError(employeeController.createEmployee))
router.get('/fetch', catchError(employeeController.fetchEmployees))
router.put('/update/:id', catchError(employeeController.updateEmployee))
router.delete('/delete/:id', catchError(employeeController.deleteEmployee))


module.exports = router;