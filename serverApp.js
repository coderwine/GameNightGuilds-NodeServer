const express = require('express');
const app = express();
// const user = require('./Controllers'); //! needs linked
//* include all controller links here
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());

app.use(require('./Middleware/headers'));

app.use('/user', user)
//* include all contoller endpoints.  How will roles play through this?

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}.  All is good.`))
