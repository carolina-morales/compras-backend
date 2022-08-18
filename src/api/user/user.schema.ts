import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    city: { type: String, required: false },
    country: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    photo: { type: Buffer, contentType: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", userSchema);
