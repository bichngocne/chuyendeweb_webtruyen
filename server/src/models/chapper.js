'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
  class chapper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chapper.init({
    title: DataTypes.STRING,
    id_story: DataTypes.INTEGER,
    number_chapper: DataTypes.INTEGER,
    image: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chapper',
  });
export{chapper}
