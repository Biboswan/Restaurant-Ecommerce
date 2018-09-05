const fetch = require('node-fetch');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/phone/verification/start', async (req, res) => {
    const body = {
      ...req.body,
      api_key: keys.twilioApiKey,
      country_code: '91',
    };

    const response = await fetch(
      'https://api.authy.com/protected/json/phones/verification/start',
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }
    ).catch(err => {
      console.log(err);
      res.send(err);
    });
    const data = await response.json();
    res.send(data);
  });

  app.post('/api/phone/verification/check', async (req, res) => {
    const { verification_code, phone_number } = req.body;
    const response = await fetch(
      `https://api.authy.com/protected/json/phones/verification/check?api_key=${
        keys.twilioApiKey
      }&verification_code=${verification_code}&phone_number=${phone_number}&country_code=91`
    ).catch(err => {
      console.log(err);
      res.send(err);
    });
    const data = await response.json();
    res.send(data);
  });
};
