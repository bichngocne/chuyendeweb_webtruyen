"use strict";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connect.js";
import { chapper } from "./chapper.js";
class file extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
file.init(
  {
    name: DataTypes.STRING,
    id_chapper: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "files",
    tableName: "files",
  }
);
// file.belongsTo(chapper, { foreignKey: "id_chapper", as: "chappers" });

export { file };
