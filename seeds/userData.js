const { User } = require('../models');

const userData = [
  {
    username: 'Eric',
    password: 'Eric123',
  },
  {
    username: 'Levi',
    password: 'swolBros420',
  },
  {
    username: 'Mikasa',
    password: 'OoftaDude',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
