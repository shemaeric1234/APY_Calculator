const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports.development = {
  dialect: 'sqlite',
  host: './dev.sqlite'
};
