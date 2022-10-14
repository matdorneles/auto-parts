import { CategoryModel } from "../../database/models/CategoryModel";

interface CategoryRequest {
  category_id: string
}

class GetCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const category = await CategoryModel.findOne({
      where: {
        id: category_id
      }
    });

    return category;
  }
}

export { GetCategoryService }