import { DataTypes } from "sequelize";

import { db } from "../db";
import { ItemModel } from "./ItemModel";

export const CategoryModel = db.define("category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: "Please enter a name" } // Will return this message if null and refuse to save in DB
    }
  }
});

CategoryModel.hasOne(ItemModel)	