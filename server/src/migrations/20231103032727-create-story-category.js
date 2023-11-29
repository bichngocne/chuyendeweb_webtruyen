module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('story_categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_story: {
      type: Sequelize.INTEGER,
      references: {
        model: 'stories',
        key: 'id'
      },
      allowNull: false
    },
    id_category: {
      type: Sequelize.INTEGER,
      references: {
        model:'categories',
        key: 'id'
      },
      allowNull: false
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
  await queryInterface.dropTable('story_categories');
}
}