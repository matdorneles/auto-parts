import { UserModel } from "../../database/models/UserModel";

  async function CheckAdminService() {
    // Check if user admin exists
    const userAdminExists = await UserModel.findOne({
      where: {
        name: "admin"
      }
    });

    if(userAdminExists) {
      return console.log("User Admin already exists, skipping creation")
    }

    // If it does not exists, create
    await UserModel.create({
      name: "admin",
      email: "admin@email.com",
      password: "admin123"
    })

    return console.log("Creating user admin");
  }

export default CheckAdminService;