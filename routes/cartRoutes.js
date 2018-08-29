const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');

module.exports = app => {
  app.post('/api/addtocart', requireLogin, async (req, res) => {
    const { items, count } = req.body.cart;
    req.user.cart.count = count;
    req.user.cart.items = _.values(items);
    const user = await req.user.save();
    res.send({ user });
  });
};
