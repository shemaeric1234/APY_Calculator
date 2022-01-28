require('dotenv').config();

module.exports.development = {
  url: 'postgres://postgres:scaremieh@localHost:5432/apy_calculator',
  dialect: 'postgres',
  logging: false
};

