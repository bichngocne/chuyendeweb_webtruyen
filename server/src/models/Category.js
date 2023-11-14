"use strict";
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";

class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
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
    modelName: "Category",
  }
);

export {Category};