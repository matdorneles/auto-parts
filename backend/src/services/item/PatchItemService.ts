import { ItemModel } from "../../database/models/ItemModel";

interface ItemRequest {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number
}

class PatchItemService {
  async execute({ id, title, description, image, price, quantity }: ItemRequest) {
    const item = await ItemModel.update({
      title: title,
      description: description,
      image: image,
      price: price,
      quantity: quantity
    },
    {
      where: { id: id }
    }
    );

    return item;
  }
}

export { PatchItemService }