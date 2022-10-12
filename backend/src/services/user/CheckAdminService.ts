import { hash } from "bcryptjs";

import { UserModel } from "../../database/models/UserModel";

  async function CheckAdminService() {
    // User information
    const name = "admin";
    const email = "admin@email.com";
    const password = "admin123";

    // Check if user admin exists
    const userAdminExists = await UserModel.findOne({
      where: {
        name: name
      }
    });

    if(userAdminExists) {
      return console.log("User Admin already exists, skipping creation");
    }

    // Encrypt password
    const passwordHash = await hash(password, 8);

    // If it does not exists, create
    const user = await UserModel.create({
      name: name,
      email: email,
      password: passwordHash
    })

    return user;
  }

export default CheckAdminService;