import { model, Schema } from "mongoose";
import { IArticle } from "./article.interface";

const articleSchema = new Schema<IArticle>(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export const Article = model<IArticle>("Article", articleSchema);
