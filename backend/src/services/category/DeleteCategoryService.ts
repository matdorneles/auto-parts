import { CategoryModel } from "../../database/models/CategoryModel"

interface CategoryRequest {
  category_id: string
}

class DeleteCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const category = await CategoryModel.destroy({
      where: { id: category_id }
    });

    return category;
  }
}

export { DeleteCategoryService }