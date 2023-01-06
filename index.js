import express from "express";
import { userRouter } from "./users/users.js";

const app = express();
const port = 8000;

app.use("/users", userRouter);

app.get("/hello", (req, res) => {
  res.status(201).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
