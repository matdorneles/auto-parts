import { Request, Response, NextFunction } from "express";
import { hash } from "bcryptjs";

import { UserModel } from "../database/models/UserModel";

export async function checkAdminUser(req: Request, res: Response, next: NextFunction) {
  // Check for admin user?
  let checkAdmin: boolean = true;

  // User information
  const name = "admin";
  const email = "admin@email.com";
  const password = "admin123";

  if(checkAdmin) {
    // Check if user admin exists
    const userAdminExists = await UserModel.findOne({
      where: {
        name: name
      }
    });

    if(userAdminExists) {
      return res.json("User Admin already exists, skipping creation");
    }

    // Encrypt password
    const passwordHash = await hash(password, 8);

    // If it does not exists, create
    const user = await UserModel.create({
      name: name,
      email: email,
      password: passwordHash
    })

    checkAdmin = false

    res.json("User Admin has been created")
    
    return next();
  }
  
  return;
}