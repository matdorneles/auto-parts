import { ItemModel } from "../../database/models/ItemModel";

class ListItemsService {
  async execute() {
    const item = await ItemModel.findAll();

    return item;
  }
}

export { ListItemsService }