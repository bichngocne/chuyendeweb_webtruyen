// models/Story.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";
const Story = sequelize.define("Story", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255],
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [3, 255],
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 55],
    },
  },
  status_approve: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false
  },
  status_chapper: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  view: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue:0
  },
//   userId:{
//     type:DataTypes.INTEGER,
//     references: {
//         model: 'user',
//         key: 'id', // 'id' refers to column name in fathers table
//      }
//   },
});

export default Story;
