module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('stories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    total_chapper: {
      type: Sequelize.INTEGER
    },
    author: {
      type: Sequelize.STRING
    },
    status_approve: {
      type: Sequelize.BOOLEAN
    },
    status_chapter: {
      type: Sequelize.BOOLEAN
    },
    classifi: {
      type: Sequelize.INTEGER
    },
    image: {
      type: Sequelize.STRING
    },
    view: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: false
    },
    deleted: {
      type: Sequelize.BOOLEAN
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
  await queryInterface.dropTable('stories');
}
}