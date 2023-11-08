'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
import { user } from "./user.js";
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  story.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    total_chapper: DataTypes.INTEGER,
    author: DataTypes.STRING,
    status_approve: DataTypes.BOOLEAN,
    status_chapter: DataTypes.BOOLEAN,
    classifi: DataTypes.INTEGER,
    image: DataTypes.STRING,
    view: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stories',
  });
  story.belongsTo(user, { foreignKey: 'id_user' }); // Định nghĩa mối quan hệ
 export {story}