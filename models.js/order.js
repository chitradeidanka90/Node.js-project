const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const Customer = require('./customer');

const Order = sequelize.define('Order', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Order.belongsTo(Product, { foreignKey: 'product_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });

module.exports = Order;
