"use strict";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect.js";
import { story_category } from "./story_category.js";
import { Category } from "./category.js";
class story extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    story.belongsToMany(Category, {
      through: story_category, 
      foreignKey: "id_category",
    });
  }
}
story.init(
  {
    name: 
    { 
      type: DataTypes.STRING, 
      unique: true 
    },
    description: DataTypes.TEXT,
    total_chapper: DataTypes.INTEGER,
    author: DataTypes.STRING,
    status_approve: DataTypes.BOOLEAN,
    status_chapter: DataTypes.BOOLEAN,
    classifi: DataTypes.INTEGER,
    image: DataTypes.STRING,
    view: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "stories",
    tableName: "stories"
  }
);
export { story };
