const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PORT, {
    dialect: 'postgres',
})

sequelize.authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

module.exports = sequelize;