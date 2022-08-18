import { AbstractRoutes } from "../../global/helpers/abstract.routes";
import { IRoute, Methods } from "../../global/interfaces";
import ArticleController from "./article.controller";

export default class ArticleRoutes extends AbstractRoutes {
  constructor(private _articleController = new ArticleController()) {
    super("/article");
  }

  protected routes: IRoute[] = [
    {
      path: "/",
      method: Methods.GET,
      handler: this._articleController.getArticle,
      middlewares: [],
    },
    {
      path: "/",
      method: Methods.POST,
      handler: this._articleController.saveArticle,
      middlewares: [],
    },
    {
      path: "/:id",
      method: Methods.DELETE,
      handler: this._articleController.deleteArticle,
      middlewares: [],
    },
  ];
}
