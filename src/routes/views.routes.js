import { Router } from "express";
import isAdmin, { person } from "../middleware/isAdmin.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", person[1]);
});

router.get("/admin", isAdmin, (req, res) => {
  res.render("admin", person[0]);
  next()
});

router.get("/users", (req, res) => {

let users = person;

  res.render("users", { users, styles: "index.css" });
});

let users = [];

router.post("/users", (req, res) => {
  const { email, password } = req.body;

  const newUser = {
    email,
    password,
  };

  users.push(newUser);

  res.status(201).json({ status: "success", payload: users });
});

router.get("/register", (req, res) => {
  res.render("register");
});

export default router;
