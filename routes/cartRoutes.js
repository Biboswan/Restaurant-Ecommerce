const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/addtocart', requireLogin, async (req, res) => {
    const { items, count } = req.body.cart;
    console.log(req.body.cart);
    req.user.cart.count = count;
    req.user.cart.items = _.values(items);
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: req.user },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('RESULT: ' + result);
      }
    );
    res.send('Done');
  });
};
