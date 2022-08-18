import { Request, Response } from "express";
import UserService from "./user.service";
import { IUser } from "./user.interface";
import { handleError } from "../../global/utils";

export default class UserController {
  private user: IUser[] = [];

  constructor(private _userService = new UserService()) {}

  getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this._userService.find(req.query);
      return res.json(users);
    } catch (error) {
      return res.status(500).send("Does not exist any user: " + error);
    }
  };

  saveUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this._userService.find(req.body);
      if (users.length > 0) return res.status(400).send("User already exists.");

      await this._userService.save(req.body);
      return res.send("User saved successfully");
    } catch (error) {
      return res.status(500).send("Cannot save user: " + error);
    }
  };

  updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      await this._userService.update(id, req.body);
      return res.send("User updated successfully");
    } catch (error) {
      return res.status(500).send("Cannot update user: " + error);
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<Response> => {
    throw new Error("Method not implemented.");
  };
}
