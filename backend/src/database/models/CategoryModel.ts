import { DataTypes } from "sequelize";

import { db } from "../db";

export const CategoryModel = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})