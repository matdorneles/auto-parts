import { Sequelize } from "sequelize";

// When in production, always use a ".env" file with your DB information
export const db = new Sequelize(
  "auto_parts",
  "root",
  "mysql",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    timezone: "-03:00"
  }
);