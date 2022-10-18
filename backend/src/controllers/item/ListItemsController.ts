import { Request, Response } from "express";

import { ListItemsService } from "../../services/item/ListItemsService";

class ListItemsController {
  async handle(req: Request, res: Response) {
    const listItemsService = new ListItemsService();

    const item = await listItemsService.execute();

    return res.json(item);
  }
}

export { ListItemsController }