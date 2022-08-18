export abstract class AbstractService {
  public abstract find(element: any): Promise<any>;
  public abstract save(element: any): Promise<any>;
  public abstract update(_id: string, element: any): Promise<any>;
  public abstract delete(_id: string): Promise<any>;
}
