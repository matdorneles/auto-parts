import { Request, Response } from "express";

import { GetCategoryService } from "../../services/category/GetCategoryService";

class GetCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const getCategoryService = new GetCategoryService();

    const category = await getCategoryService.execute({ category_id });

    return res.json(category);
  }
}

export { GetCategoryController }