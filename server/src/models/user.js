'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../database/connect.js";
import { Role } from "./role.js";
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.Role, {
        foreignKey: "id_role", // Khóa ngoại của bảng Story trỏ đến khóa chính của bảng User
        
      });
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      unique: true, // Ràng buộc duy nhất trên trường name
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // Ràng buộc duy nhất trên trường email
    },
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
export {user}