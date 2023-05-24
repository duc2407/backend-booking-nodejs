'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        email: 'duc@example.com',
        password: '123456',
        firstName: 'duc',
        lastName:'nguyen',
        address : 'hanoi',
        gender: 1,
        roleid: 'R1',
        phoneNumber: '0395031862',
        positionId:'',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };