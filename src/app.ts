// src/app.ts
import express from "express";

import testController from "@/controllers/users";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/test", testController);

export default app;
