const Order = require('../models.js/order');
const Customer = require('../models.js/customer');

const addOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrdersByCustomerId = async (req, res) => {
  try {
    const customerId = req.params.customer_id;
    const orders = await Order.findAll({ where: { customer_id: customerId } });
    if (!orders) {
      return res.status(404).json({ error: 'Orders not found for this customer' });
    }
    const totalOrders = orders.length;
    res.json({ orders, totalOrders });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTotalRevenue = async (req, res) => {
  try {
    const totalRevenue = await Order.sum('price');
    res.json({ totalRevenue });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addOrder,
  getAllOrders,
  getOrderById,
  getOrdersByCustomerId,
  getTotalRevenue,
  updateOrder,
  deleteOrder
};
