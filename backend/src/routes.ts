import { Router } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

router.post("/user/auth", new AuthUserController().handle);

export { router };