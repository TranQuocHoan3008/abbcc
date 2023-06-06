const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const OrderItem = sequelize.define("orderItems", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: { type: Sequelize.INTEGER },
});

module.exports = OrderItem;
