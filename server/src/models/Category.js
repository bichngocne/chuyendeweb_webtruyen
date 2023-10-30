// models/category.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/config.js';

const Category = sequelize.define('category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default Category;