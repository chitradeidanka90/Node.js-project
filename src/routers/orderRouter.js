// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.addOrder);

router.get('/orders', orderController.getAllOrders);

router.get('/order/:id', orderController.getOrderById);

router.get('/orders/:customer_id', orderController.getOrdersByCustomerId);

router.get('/order/sum', orderController.getTotalRevenue);

router.put('/order/:id', orderController.updateOrder);

router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;
