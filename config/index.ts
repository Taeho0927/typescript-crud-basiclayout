import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";

dotenv.config();


const sequelize = new Sequelize({
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_DBPORT!),
  dialect: 'postgres',
});

export default sequelize