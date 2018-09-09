const mongoose = require('mongoose');
const Order = mongoose.model('orders');
const _ = require('lodash');

module.exports = app => {
  app.post('/api/order/submit', async (req, res) => {
    const { items, count } = req.body.cart;
    req.body.cart.count = count;
    req.body.cart.items = _.values(items);
    const order = new Order(req.body);
    await order.save();
    res.send({});
  });
};
