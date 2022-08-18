import { Request, Response } from "express";
import ArticleService from "./article.service";
import { IArticle } from "./article.interface";

export default class ArticleController {
  private article: IArticle[] = [];

  constructor(private _articleService = new ArticleService()) {}

  getArticle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const articles = await this._articleService.find(req.query);
      return res.json(articles);
    } catch (error) {
      return res.status(500).send("Does not exist any article: " + error);
    }
  };

  saveArticle = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this._articleService.save(req.body);
      return res.send("Article saved successfully");
    } catch (error) {
      return res.status(500).send("Cannot save article: " + error);
    }
  };

  updateArticle = async (req: Request, res: Response): Promise<Response> => {
    throw new Error("Method not implemented.");
  };

  deleteArticle = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this._articleService.delete(req.params.id);
      return res.send("Article removed successfully");
    } catch (error) {
      return res.status(500).send("Cannot delete article: " + error);
    }
  };
}
