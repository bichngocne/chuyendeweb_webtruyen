'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
import { user } from "./user.js";
import { story } from "./story.js";
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    id_story:DataTypes.INTEGER,
    id_user:DataTypes.INTEGER,
    star:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  Comment.belongsTo(user, { foreignKey: 'id_user' }); 
  Comment.belongsTo(story, { foreignKey: 'id_story',onDelete: 'CASCADE'}); 
  export {Comment};
