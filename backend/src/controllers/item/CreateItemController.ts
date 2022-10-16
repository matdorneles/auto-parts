import { Request, Response } from "express";

import { CreateItemService } from "../../services/item/CreateItemService";

class CreateItemController {
  async handle(req: Request, res: Response) {
    const { title, description, price, quantity, categoryId } = req.body;

    const createItemService = new CreateItemService();

    if(!req.file) {
      throw new Error("You must send an image");
    } else {
      const { originalname, filename: image } = req.file;

      const item = await createItemService.execute({title, description, image, price, quantity, categoryId});

      return res.json(item);
    }
  }
}

export { CreateItemController }