import { UserModel } from "../../database/models/UserModel";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Make our DB Model accept schema as properties
    const DB: any = UserModel;

    // Verify if email exists
    const user = await DB.findOne({
      where: {
        email: email
      }
    });

    if(!user) {
      throw new Error("User/password does not exist")
    }

    // Verify is password matches
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("User/password is incorrect")
    }

    // If all is OK, generate new JWT Token for user
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      "5471818f551c1dadda68a9f9909e788e",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    };
  }
}

export { AuthUserService };