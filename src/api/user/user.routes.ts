import { AbstractRoutes } from "../../global/helpers/abstract.routes";
import { IRoute, Methods } from "../../global/interfaces";
import UserController from "./user.controller";

export default class UserRoutes extends AbstractRoutes {
  constructor(private _userController = new UserController()) {
    super("/user");
  }

  protected routes: IRoute[] = [
    {
      path: "/",
      method: Methods.GET,
      handler: this._userController.getUser,
      middlewares: [],
    },
    {
      path: "/",
      method: Methods.POST,
      handler: this._userController.saveUser,
      middlewares: [],
    },
    {
      path: "/login",
      method: Methods.POST,
      handler: this._userController.login,
      middlewares: [],
    },
    {
      path: "/:id",
      method: Methods.PUT,
      handler: this._userController.updateUser,
      middlewares: [],
    },
  ];
}
