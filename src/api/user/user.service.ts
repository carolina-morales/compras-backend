import { AbstractService } from "../../global/helpers/abstract.service";
import { IUser } from "./user.interface";
import { User } from "./user.schema";

export default class UserService extends AbstractService {
  find = async (user: Partial<IUser>): Promise<IUser[]> => {
    const users = User.find();

    if (user.email) users.where("email").equals(user.email);
    if (user.username) users.where("username").equals(user.username);

    return users;
  };

  save = async (user: IUser): Promise<boolean> => {
    const newUser = new User(user);
    await newUser.save();
    return true;
  };

  update = async (_id: string, user: IUser): Promise<any> => {
    const { address, city, country, phone, email, photo } = user;
    await User.updateOne(
      { _id },
      { address, city, country, phone, email, photo }
    );
    return true;
  };

  delete = async (_id: string): Promise<any> => {
    throw new Error("Method not implemented.");
  };
}
