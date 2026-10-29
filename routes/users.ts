import express, { type Request, type Response } from "express";
import * as store from "../db/store";
import type { CreateUserInput, User } from "../db/store";

const router = express.Router();

// GET /users — list every user
router.get("/", (req, res) => {
  res.json(store.getAllUsers());
});

// GET /users/:id — fetch a single user, or 404 if it doesn't exist
router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = Number(req.params.id);
  const user = store.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// POST /users — create a user; name and email are required
router.post(
  "/",
  (
    req: Request<Record<string, never>, User | { error: string }, CreateUserInput>,
    res: Response,
  ) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }

    const user = store.createUser({ name, email });
    res.status(201).json(user);
  },
);

export default router;
