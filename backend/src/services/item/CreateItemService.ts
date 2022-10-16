import { ItemModel } from "../../database/models/ItemModel";

interface ItemRequest {
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  categoryId: string;
}

class CreateItemService {
  async execute({ title, description, image, price, quantity, categoryId }: ItemRequest) {
    const item = await ItemModel.create({
      title: title,
      description: description,
      image: image,
      price: price,
      quantity: quantity,
      categoryId: categoryId
    });

    return item;
  }
}

export { CreateItemService }