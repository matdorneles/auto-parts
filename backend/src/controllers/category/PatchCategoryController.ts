import { Request, Response } from "express";

import { PatchCategoryService } from "../../services/category/PatchCategoryService";

class PatchCategoryController {
  async handle(req: Request, res: Response) {
    const { category_id, newName } = req.body;

    const patchCategoryService = new PatchCategoryService();

    const category = await patchCategoryService.execute({
      category_id,
      newName
    });

    return res.json(category);
  }
}

export { PatchCategoryController }