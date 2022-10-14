import { Router } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { checkAdminUser } from "./middlewares/checkAdminUser";

import { AuthUserController } from "./controllers/user/AuthUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { PatchCategoryController } from "./controllers/category/PatchCategoryController";

const router = Router();

// USER ROUTES
router.get("/user/auth", checkAdminUser)
router.post("/user/auth", new AuthUserController().handle);

// CATEGORY ROUTES
router.post("/category/create", isAuthenticated, new CreateCategoryController().handle);
router.put("/category/edit", isAuthenticated, new PatchCategoryController().handle);

export { router };