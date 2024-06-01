import { Router } from "express";
import isAdmin, { person } from "../middleware/isAdmin.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", person[1]);
});

router.get("/admin", isAdmin, (req, res) => {
  res.render("admin", person[0]);
  next();
});

router
  .route("/users")
  .get("/users", (req, res) => {
    let users = person;
    res.render("users", { users, styles: "index.css" });
  })
  .post((req, res) => {
    const { email, password } = req.body;
    let users = [];
    const newUser = {
      email,
      password,
    };
    users.push(newUser);
    res.status(201).json({ status: "success", payload: users });
  });

router
  .route("/register")
  .get((req, res) => {
    res.render("register", { hello: "Saludos" });
  })
  .post((req, res) => {
    const { email, password } = req.body;
    const newUser = {
      email,
      password,
    };
    users.push(newUser);
    res.status(201).json({ status: "success", payload: users });
  });

export default router;
