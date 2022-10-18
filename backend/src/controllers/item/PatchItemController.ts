import { Request, Response } from "express";

import { PatchItemService } from "../../services/item/PatchItemService";

class PatchItemController {
  async handle(req: Request, res: Response) {
    const { id, title, description, image, price, quantity } = req.body;

    const patchItemService = new PatchItemService();

    const item = await patchItemService.execute({ id, title, description, image, price, quantity });

    return res.json(item);
  }
}

export { PatchItemController }