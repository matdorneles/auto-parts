import { CategoryModel } from "../../database/models/CategoryModel";

interface CategoryRequest {
  name: string
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if(name === "") {
      throw new Error("You must inform a category name");
    }

    const category = await CategoryModel.create({
      name: name
    });

    return category;
  }
}

export { CreateCategoryService };