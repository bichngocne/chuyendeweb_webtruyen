"use strict";
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
import { story_category } from "./story_category.js";
import {story} from "./story.js";
class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Category.belongsToMany(story, {
      through: story_category, 
      foreignKey: "id_story",
    });
  }
}
Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "categories",
    tableName: "categories"
  }
);
export {Category};