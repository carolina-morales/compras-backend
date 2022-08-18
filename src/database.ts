import mongoose from "mongoose";
import { environments } from "./global/config";

export async function connect() {
  await mongoose.connect(environments.DB_URL || "");
}
