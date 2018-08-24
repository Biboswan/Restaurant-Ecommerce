const requireAdmin = require('../middlewares/requireAdmin');
const mongoose = require('mongoose');
const Locality = mongoose.model('localities');

module.exports = app => {
  app.get('/api/localities', async (req, res) => {
    const localities = await Locality.find();
    res.send(localities);
  });

  app.post('/admin/insertlocalities', requireAdmin, async (req, res) => {
    const { localities } = req.body;
    await Locality.insertMany(localities);
    res.send({});
  });
};
