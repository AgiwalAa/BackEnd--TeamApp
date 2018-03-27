const express = require('express');
const router = express.Router();

const managerController = require('../controllers/managerController');
const {catchError} = require('../handlers/errorHandler');
// Manager
router.post('/create', catchError(managerController.createManager))
router.get('/fetch', catchError(managerController.fetchManagers))
router.put('/update/:id', catchError(managerController.updateManager))
router.delete('/delete/:id', catchError(managerController.deleteManager))


module.exports = router;