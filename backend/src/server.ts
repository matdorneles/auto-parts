import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes"
import { db } from "./database/db";
import CheckAdminService from "./services/user/CheckAdminService";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port = 3333;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    // If instanceof type Error
    return res.json(400).json({
      error: err.message,
    });
  }

  return res.json(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, async () => {
  await db.sync();
  CheckAdminService();
  console.log(`Server running on port ${port}`)
});