const app = require('express')();
const bodyParser = require('body-parser');
const db = require('./config/db');
const consign = require('consign');
let cors = require('cors');

app.use(cors({origin: true, credentials: true}));

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);

app.db = db;

app.listen(3000, () => {
    console.log("Server running on port 3000")
})