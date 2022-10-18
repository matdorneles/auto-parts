import { ItemModel } from "../../database/models/ItemModel";

interface ItemRequest {
  itemId: number
}

class GetItemService {
  async execute({ itemId }: ItemRequest) {
    const item = await ItemModel.findOne({
      where: {
        id: itemId
      }
    });

    return item;
  }
}

export { GetItemService }