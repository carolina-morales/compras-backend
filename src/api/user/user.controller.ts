import { Request, Response } from "express";
import UserService from "./user.service";
import { IUser } from "./user.interface";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { environments } from "../../global/config";

export default class UserController {
  private user: IUser[] = [];

  constructor(private _userService = new UserService()) {}

  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
      const users = await this._userService.find({ username });

      if (users.length <= 0) return res.status(404).send("User not found");

      const comparePassword = bcrypt.compareSync(password, users[0].password);

      if (!comparePassword) return res.status(401).send("Wrong password");

      // @ts-ignore
      const user = { ...users[0].toObject(), password: "" };

      const token = jwt.sign({ user }, environments.JWT_KEY, {
        expiresIn: 1800,
      });

      if (!token) return res.status(401).send("Invalid token");

      return res.send(token);
    } catch (error) {
      return res.status(500).send("User not found: " + error);
    }
  };

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

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      await this._userService.save({ ...req.body, password: hash });
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
