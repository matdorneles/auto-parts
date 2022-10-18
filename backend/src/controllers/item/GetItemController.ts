import { Request, Response } from "express";

import { GetItemService } from "../../services/item/GetItemService";

class GetItemController {
  async handle(req: Request, res: Response) {
    const itemId = req.query.itemId as unknown as number;

    const getItemService = new GetItemService();

    const item = getItemService.execute({ itemId });

    return res.json(item);
  }
}

export { GetItemController }