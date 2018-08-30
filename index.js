const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');
require('./models/Locality');
require('./models/Menu_item');
require('./models/User');
require('./models/Cart');
require('./models/Cart_item');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize()).use(passport.session());

require('./routes/localityRoutes')(app);
require('./routes/menuRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/cartRoutes')(app);

const PORT = process.env.PORT || 7000;
app.listen(PORT);
