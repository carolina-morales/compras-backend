import AbstractApiRoutes from "../global/helpers/abstract.api-routes";
import { IConfigRoute } from "../global/interfaces";
import { checkMw } from "../middlewares/checkMw.middleware";
import UserRoutes from "./user/user.routes";

export default class ApiRoutes extends AbstractApiRoutes {
  protected configRoutes: IConfigRoute[] = [
    {
      routes: new UserRoutes(),
      middlewares: [],
    },
  ];
}
