module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('chappers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    id_story: {
      type: Sequelize.INTEGER,
      references: {
        model: 'stories',
        key: 'id'
      },
      allowNull: false
    },
    number_chapper: {
      type: Sequelize.INTEGER
    },
    image: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
 
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('chappers');
}
}