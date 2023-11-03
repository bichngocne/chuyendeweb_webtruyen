'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
  class story_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  story_category.init({
    id_story: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'story_category',
  });
export {story_category}