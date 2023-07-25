// src/controllers/testController.ts
import { Request, Response } from "express";

const testController: any = {};

testController.get("/test", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

export default testController;
