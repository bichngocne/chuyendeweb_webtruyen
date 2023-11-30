'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
import { story } from "./Story.js";
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
    content: DataTypes.TEXT,
    version: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {
    sequelize,
    modelName: 'chapper',
  });
  chapper.belongsTo(story, { foreignKey: 'id_story' }); 
export{chapper}
