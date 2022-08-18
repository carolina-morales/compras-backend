import { AbstractService } from "../../global/helpers/abstract.service";
import { IArticle } from "./article.interface";
import { Article } from "./article.schema";

export default class ArticleService extends AbstractService {
  private article: IArticle[] = [];

  find = async (article: Partial<IArticle>): Promise<IArticle[]> => {
    const articles = Article.find();

    if (article.user) articles.where("user").equals(article.user);

    return articles;
  };

  save = async (article: IArticle): Promise<any> => {
    const newArticle = new Article(article);
    await newArticle.save();
    return true;
  };

  update = async (_id: string, article: IArticle): Promise<any> => {
    throw new Error("Method not implemented.");
  };

  delete = async (_id: string): Promise<any> => {
    throw new Error("Method not implemented.");
  };
}
