import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({ email, password });

    if(user === 'Unauthorized') {
      return res.status(401).json("User/Password is incorrect")
    }

    return res.status(200).json(user);
  }
}

export { AuthUserController };