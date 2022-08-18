import { IUser } from "../user/user.interface";

export interface IArticle {
  _id: string;
  name: string;
  user: IUser;
}
