import dotenv from "dotenv";

dotenv.config();
const { NODE_ENV, PORT, APP_NAME, JWT_KEY, DB_URL, HOST } = process.env;

export const environments = {
  ENV: NODE_ENV,
  PORT,
  APP_NAME,
  JWT_KEY: JWT_KEY || "",
  DB_URL,
  HOST,
};
