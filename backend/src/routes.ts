import { Router } from "express";
import multer from "multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { checkAdminUser } from "./middlewares/checkAdminUser";
import uploadConfig from "./config/multer";

import { AuthUserController } from "./controllers/user/AuthUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { PatchCategoryController } from "./controllers/category/PatchCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { GetCategoryController } from "./controllers/category/GetCategoryController";
import { CreateItemController } from "./controllers/item/CreateItemController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// USER ROUTES
router.get("/user/auth", checkAdminUser)
router.post("/user/auth", new AuthUserController().handle);

// CATEGORY ROUTES
router.post("/admin/category/create", isAuthenticated, new CreateCategoryController().handle);
router.put("/admin/category/edit", isAuthenticated, new PatchCategoryController().handle);
router.delete("/admin/category/delete", isAuthenticated, new DeleteCategoryController().handle);
router.get("/category", isAuthenticated, new ListCategoryController().handle);
router.get("/category/search", isAuthenticated, new GetCategoryController().handle);

// ITEM ROUTES
router.post("/admin/item/create", isAuthenticated, upload.single("file"), new CreateItemController().handle);

export { router };