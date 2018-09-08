const mongoose = require('mongoose');
const Order = mongoose.model('orders');
const _ = require('lodash');

module.exports = app => {
  app.post('/api/order/submit', async (req, res) => {
    req.body.cart.count = count;
    req.body.cart.items = _.values(items);
    await Order.insert(req.body);
    res.send({});
  });
};
