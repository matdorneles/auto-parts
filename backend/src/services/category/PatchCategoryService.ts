import { CategoryModel } from "../../database/models/CategoryModel";

interface CategoryRequest {
  category_id: string;
  newName: string
}

class PatchCategoryService {
  async execute({ category_id, newName }: CategoryRequest) {
    const category = await CategoryModel.update(
      { name: newName },
      { where: { id: category_id } }
    );

    return category;
  }
}

export { PatchCategoryService }