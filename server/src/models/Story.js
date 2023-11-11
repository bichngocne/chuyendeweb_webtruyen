"use strict";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect.js";
import { story_category } from "./story_category.js";
import { Category } from "./Category.js";
import { user } from "./user.js";
class story extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    story.belongsToMany(Category, {
      through: story_category, // Tên bảng liên kết
      foreignKey: "id_story", // Khóa ngoại của bảng Story
      otherKey: "id_category", // Khóa ngoại của bảng Category
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
  });
story.belongsTo(user, { foreignKey: 'id_user' }); // Định nghĩa mối quan hệ
export { story };
