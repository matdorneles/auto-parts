import { CategoryModel } from "../../database/models/CategoryModel";

class ListCategoryService {
  async execute() {
    const category = await CategoryModel.findAll()

    return category;
  }
}

export { ListCategoryService }