const requireAdmin = require('../middlewares/requireAdmin');
const mongoose = require('mongoose');
const menu = mongoose.model('menu');

module.exports = app => {
  app.get('/api/menu', async (req, res) => {
    const menu_items = await menu.find();
    res.send(menu_items);
  });

  app.post('/admin/menu/upload', requireAdmin, async (req, res) => {
    const { menu_items } = req.body;
    await menu.insertMany(menu_items);
    res.send({});
  });
};
