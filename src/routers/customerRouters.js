// customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.post('/customers', customerController.addCustomer);

router.get('/customers', customerController.getAllCustomers);

router.get('/customer/:id', customerController.getCustomerById);

router.put('/customer/:id', customerController.updateCustomer);

router.delete('/customer/:id', customerController.deleteCustomer);

module.exports = router;
