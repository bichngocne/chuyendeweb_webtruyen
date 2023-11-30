"use strict";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect.js";
import { Category } from "./category.js";
import { story } from "./story.js";
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
story_category.init(
  {
    id_story: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "story_categories",
    tableName: "story_categories"
  }
);
story_category.belongsTo(Category, { foreignKey: "id_category", targetKey: 'id' });
story_category.belongsTo(story, { foreignKey: "id_story", targetKey: 'id', onDelete: 'CASCADE'  });
export { story_category };
